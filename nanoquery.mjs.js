/*
    nanoquery
    Syntax:
    nano(selector) - select and return the first matching element
    nano(selector, callback) - perform a callback on all selected elements
    nano(selector, event, handler) - add event handler to all selected elements
	nano(selector, event, targetSelector, handler) - add event handler to all selected elements, fires on child matching targetSelector
    nanowith(element, ...) - as nano but on element instead of document
*/

const nanowith=function(a,s,c,x,z,r){r=a.querySelectorAll(s);return r.length?(c?[].forEach.call(r,x?function(n){n.addEventListener(c,z?function(e,i){i=e.target;while(i!==this&&i!==null){if(i.matches(x)){z.apply(i,[e]);return;}i=i.parentNode;}}:x,z&&!!c.match(/change|blur|focus/i));}:c):r[0]):null;};const nano=function(s,c,x,z){return nanowith(document,s,c,x,z);};export{nanowith,nano,nanowith as nanoquerywith,nano as nanoquery,nano as default};