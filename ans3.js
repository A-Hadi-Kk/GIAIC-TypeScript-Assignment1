"use strict";
let suppose = "Hayat";
let lc = suppose.toLowerCase();
console.log("its " + lc);
let uc = suppose.toUpperCase();
console.log("same as " + uc);
function toTitleCase(suppose) {
    return suppose.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}
let tc = toTitleCase(suppose);
console.log("and also same as " + tc);
