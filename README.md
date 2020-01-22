# nanoQuery
Can replace jQuery in 90% cases

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

## Credits
Guest at https://bitbin.it/T1eVO0Ur/ (2013)
