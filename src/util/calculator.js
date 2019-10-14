export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function sum(array) {
    let result = 0;
    for (const item of array) {
        result += item;
    }
    return result;
}

export function multiply(array) {
    let result = array[0];
    for (const item of array) {
        result = result * item;
    }
    return result;
}

export function power(a, b) {
    let result = a;
    for (let index = 0; index < b; index++) {
        result = result * a;
    }
}

export function factorial() {
    let f = [];
    if (n == 0 || n == 1)
        return 1;
    if (f[n] > 0)
        return f[n];
    return f[n] = factorial(n - 1) * n;
}

export const calculator = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
}