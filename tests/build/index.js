/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spec_bar_spec__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spec_foo_spec__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spec_calculator_spec__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spec_leapYears_spec__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spec_leapYears_spec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__spec_leapYears_spec__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spec_removeFromArray_spec__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spec_removeFromArray_spec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__spec_removeFromArray_spec__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spec_repeatString_spec__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spec_repeatString_spec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__spec_repeatString_spec__);







/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util_bar__ = __webpack_require__(2);


describe("utilBar", () => {
  it("returns intended value", () => {
    expect(Object(__WEBPACK_IMPORTED_MODULE_0_util_bar__["a" /* utilBar */])()).toEqual("util-bar");
  });
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = utilBar;
function utilBar() {
    return "util-bar";
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util_foo__ = __webpack_require__(4);


describe("utilFoo", () => {
  it("returns intended value", () => {
    expect(Object(__WEBPACK_IMPORTED_MODULE_0_util_foo__["a" /* utilFoo */])()).toEqual("util-foo");
  });
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = utilFoo;
function utilFoo() {
    return "util-foo";
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util_calculator__ = __webpack_require__(6);


describe('add', function () {
	beforeEach(() => {
		console.log('add');
	});
	it('adds 0 and 0', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].add(0, 0)).toEqual(0);
	});

	it('adds 2 and 2', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].add(2, 2)).toEqual(4);
	});

	it('adds positive numbers', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].add(2, 6)).toEqual(8);
	});
});

describe('subtract', function () {
	it('subtracts numbers', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].subtract(10, 4)).toEqual(6);
	});
});

describe('sum', function () {
	it('computes the sum of an empty array', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].sum([])).toEqual(0);
	});

	it('computes the sum of an array of one number', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].sum([7])).toEqual(7);
	});

	xit('computes the sum of an array of two numbers', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].sum([7, 11])).toEqual(18);
	});

	xit('computes the sum of an array of many numbers', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].sum([1, 3, 5, 7, 9])).toEqual(25);
	});
});

describe('multiply', function () {
	xit('multiplies two numbers', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].multiply([2, 4])).toEqual(8);
	});

	xit('multiplies several numbers', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].multiply([2, 4, 6, 8, 10, 12, 14])).toEqual(645120);
	});
});

describe('power', function () {
	xit('raises one number to the power of another number', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].power(4, 3)).toEqual(64); // 4 to third power is 64
	});
});

describe('factorial', function () {
	xit('computes the factorial of 0', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].factorial(0)).toEqual(1); // 0! = 1
	});

	xit('computes the factorial of 1', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].factorial(1)).toEqual(1);
	});

	xit('computes the factorial of 2', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].factorial(2)).toEqual(2);
	});

	xit('computes the factorial of 5', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].factorial(5)).toEqual(120);
	});

	xit('computes the factorial of 10', function () {
		expect(__WEBPACK_IMPORTED_MODULE_0_util_calculator__["a" /* calculator */].factorial(10)).toEqual(3628800);
	});
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export add */
/* unused harmony export subtract */
/* unused harmony export sum */
/* unused harmony export multiply */
/* unused harmony export power */
/* unused harmony export factorial */
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sum(array) {
    let result = 0;
    for (const item of array) {
        result += item;
    }
    return result;
}

function multiply(array) {
    let result = array[0];
    for (const item of array) {
        result = result * item;
    }
    return result;
}

function power(a, b) {
    let result = a;
    for (let index = 0; index < b; index++) {
        result = result * a;
    }
}

function factorial() {
    let f = [];
    if (n == 0 || n == 1) return 1;
    if (f[n] > 0) return f[n];
    return f[n] = factorial(n - 1) * n;
}

const calculator = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
/* harmony export (immutable) */ __webpack_exports__["a"] = calculator;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const leapYears = __webpack_require__(8);

describe('leapYears', function () {
  it('works with non century years', function () {
    expect(leapYears(1996)).toEqual(true);
  });
  xit('works with non century years', function () {
    expect(leapYears(1997)).toEqual(false);
  });
  xit('works with ridiculously futuristic non century years', function () {
    expect(leapYears(34992)).toEqual(true);
  });
  xit('works with century years', function () {
    expect(leapYears(1900)).toEqual(false);
  });
  xit('works with century years', function () {
    expect(leapYears(1600)).toEqual(true);
  });
  xit('works with century years', function () {
    expect(leapYears(700)).toEqual(false);
  });
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

const leapYears = function leapYears() {
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
};

module.exports = leapYears;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const removeFromArray = __webpack_require__(10);

describe('removeFromArray', function () {
  it('removes a single value', function () {
    expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  xit('removes multiple values', function () {
    expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  });
  xit('ignores non present values', function () {
    expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
  });
  xit('ignores non present values, but still works', function () {
    expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
  });
  xit('can remove all values', function () {
    expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
  });
  xit('works with strings', function () {
    expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
  });
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

const removeFromArray = function removeFromArray() {};

module.exports = removeFromArray;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const repeatString = __webpack_require__(12);

describe('repeatString', function () {
  it('repeats the string', function () {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');
  });
  xit('repeats the string many times', function () {
    expect(repeatString('hey', 10)).toEqual('heyheyheyheyheyheyheyheyheyhey');
  });
  xit('repeats the string 1 times', function () {
    expect(repeatString('hey', 1)).toEqual('hey');
  });
  xit('repeats the string 0 times', function () {
    expect(repeatString('hey', 0)).toEqual('');
  });
  xit('returns ERROR with negative numbers', function () {
    expect(repeatString('hey', -1)).toEqual('ERROR');
  });
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

const repeatString = function repeatString() {};

module.exports = repeatString;

/***/ })
/******/ ]);