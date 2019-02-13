"use strict";

var sum = function (a, b) { return a + b; };

console.log(Object.getOwnPropertyDescriptor(this, "sum"));

delete window.sum

console.log(sum(2,1));
