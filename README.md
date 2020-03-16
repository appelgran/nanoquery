# nanoquery
Can replace jquery in many cases.

## Syntax

    nano(selector) - select and return the first matching element

    nano(selector, callback) - perform a callback on all selected elements

    nano(selector, event, handler) - add event handler to all selected elements
    
## Examples

Single argument:

    nano(".js-horse").innerHTML = "Horse text";

Two arguments:

    nano(".js-horse", function(horseElement) {
        horseElement.innerHTML = "Another text";
    });

Three arguments:

    nano(".js-horse", "touchmove", function(event) {
        this.innerHTML = "Touched horse";
    });

## Full source code

    /*
        nanoquery
        Syntax:
        nano(selector) - select and return the first matching element
        nano(selector, callback) - perform a callback on all selected elements
        nano(selector, event, handler) - add event handler to all selected elements
    */
    
    window.nano=window.nanoquery=function(s,c,x){var r=document.querySelectorAll(s);return r.length?(c?[].forEach.call(r,x?function(e){e.addEventListener(c,x,!!0);}:c):r[0]):null;};
    

## Credits
Guest at https://bitbin.it/T1eVO0Ur/ (2013)
