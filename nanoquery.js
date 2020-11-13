/*
    nanoquery
    Syntax:
    nano(selector) - select and return the first matching element
    nano(selector, callback) - perform a callback on all selected elements
    nano(selector, event, handler) - add event handler to all selected elements
    nanowith(element, ...) - as nano but on element instead of document
*/

window.nanowith=window.nanoquerywith=function(a,s,c,x){var r=a.querySelectorAll(s);return r.length?(c?[].forEach.call(r,x?function(e){e.addEventListener(c,x,!!0);}:c):r[0]):null;};
window.nano=window.nanoquery=function(s,c,x){return nanoquerywith(document,s,c,x);};
