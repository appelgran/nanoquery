/*
    nanoquery function (can replace jQuery in 90% cases) 
    Syntax:
    nano(selector) - select and return the first matching element
    nano(selector, callback) - perform a callback on all selected elements
    nano(selector, event, handler) - add event handler to all selected elements
*/

window.nano=window.nanoquery=function(s,c,x){var r=document.querySelectorAll(s);return r.length?(c?[].forEach.call(r,x?function(e){e.addEventListener(c,x,!!0);}:c):r[0]):null;};
