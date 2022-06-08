"use strict";
// name, arguments, return value
const sayHello = (firstName, age) => {
    return 42;
};
const returnVal = sayHello('Alice');
const returningPromise = (num) => {
    if (true) {
        return new Promise((resolve) => {
            resolve('hello');
        });
    }
};
const higherOrderFn = (callback) => {
    callback('nothing', 'hello');
};
higherOrderFn((err, data) => { });
