(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var myFunc = _interopRequireWildcard(require("./modulse/myFunc"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//関数のパラメータにデフォルト値をつける
function test(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return x + y;
}

document.write(test(3) + '<hr>'); //8

var arrow = function arrow(val) {
  return val + 'アロー関数が使えます！';
};

document.write(arrow('HELLO! ') + '<hr>'); //クラス定義、set,get

var TestClass =
/*#__PURE__*/
function () {
  function TestClass(name) {
    _classCallCheck(this, TestClass);

    this.name = name;
  }

  _createClass(TestClass, [{
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }]);

  return TestClass;
}();

var testClass = new TestClass('蒲田');
testClass.Name = '山田';
document.write(testClass.name + '<hr>'); // 山田
//Set型定義

var familyNames = new Set(['鈴木', '佐藤', '櫻井', '林', '鈴木']);
document.write(familyNames.size + '<hr>'); // 4

if (familyNames.has('佐藤')) {
  document.write('佐藤さんが入っています！' + '<hr>');
} //ESモジュール import / export を使う


document.write(myFunc.square(100) + '<hr>'); //10000

document.write(myFunc.diag(4, 3)); //5

},{"./modulse/myFunc":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.square = square;
exports.diag = diag;
exports.sqrt = void 0;
var sqrt = Math.sqrt;
exports.sqrt = sqrt;

function square(x) {
  return x * x;
}

function diag(x, y) {
  return sqrt(square(x) + square(y));
}

},{}]},{},[1]);
