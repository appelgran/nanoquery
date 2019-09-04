/*
    nanoQuery function (can replace jQuery in 90% cases) 
    Syntax:
    ñ(selector) - select and return the first matching element
    ñ(selector, callback) - perform a callback on all selected elements
    ñ(selector, event, handler) - add event handler to all selected elements
*/

window.ñ=window.nanoQuery=function(s,c,x){var r=document.querySelectorAll(s);return r.length?(c?[].forEach.call(r,x?function(e){e.addEventListener(c,x,!!0);}:c):r[0]):null;};
