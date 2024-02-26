# nanoquery
Can replace jquery in many cases.

## Syntax

    nano(selector) - select and return the first matching element

    nano(selector, callback) - perform a callback on all selected elements

    nano(selector, event, handler) - add event handler to all selected elements
	
	nano(selector, event, targetSelector, handler) - add event handler to all selected elements, fires on child matching targetSelector
    
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

Four arguments:

    nano(".js-stable", "click", ".js-horse", function(event) {
        this.innerHTML = "Clicked this horse";
    });

## Full source code

    /*
        nanoquery
        Syntax:
        nano(selector) - select and return the first matching element
        nano(selector, callback) - perform a callback on all selected elements
        nano(selector, event, handler) - add event handler to all selected elements
		nano(selector, event, targetSelector, handler) - add event handler to all selected elements, fires on child matching targetSelector
    */
    
    window.nanowith=window.nanoquerywith=function(a,s,c,x,z,r){r=a.querySelectorAll(s);return r.length?(c?[].forEach.call(r,x?function(n){n.addEventListener(c,z?function(e,i){i=e.target;while(i!==this&&i!==null){if(i.matches(x)){z.apply(i,[e]);return;}i=i.parentNode;}}:x,z&&!!c.match(/change|blur|focus/i));}:c):r[0]):null;};window.nano=window.nanoquery=function(s,c,x,z){return nanoquerywith(document,s,c,x,z);};

### Javascript module version

    /*
        nanoquery
        Syntax:
        nano(selector) - select and return the first matching element
        nano(selector, callback) - perform a callback on all selected elements
        nano(selector, event, handler) - add event handler to all selected elements
		nano(selector, event, targetSelector, handler) - add event handler to all selected elements, fires on child matching targetSelector
    */
    
    const nanowith=function(a,s,c,x,z,r){r=a.querySelectorAll(s);return r.length?(c?[].forEach.call(r,x?function(n){n.addEventListener(c,z?function(e,i){i=e.target;while(i!==this&&i!==null){if(i.matches(x)){z.apply(i,[e]);return;}i=i.parentNode;}}:x,z&&!!c.match(/change|blur|focus/i));}:c):r[0]):null;};const nano=function(s,c,x,z){return nanowith(document,s,c,x,z);};export{nanowith,nano,nanowith as nanoquerywith,nano as nanoquery,nano as default};
    

## Credits
Guest at https://bitbin.it/T1eVO0Ur/ (2013)
