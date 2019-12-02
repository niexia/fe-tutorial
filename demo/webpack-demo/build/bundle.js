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
/******/ 	__webpack_require__.p = "build/";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createImg__ = __webpack_require__(2);
var sum = __webpack_require__(1);


console.log(sum(1, 2));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (a, b) {
  return a + b;
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_img_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_img_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_img_css__);
// 引入样式

var smallImg = document.createElement('img');
smallImg.src = __webpack_require__(4); // 必须 require 进来

document.body.appendChild(smallImg);
var bigImg = document.createElement('img');
bigImg.src = __webpack_require__(5);
document.body.appendChild(bigImg);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"test":"_36DXJuJw98euMvrtX--kvv"};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADGCAYAAACXUs/uAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAABLuSURBVHhe7d0JdJTluQfwZ2ay7xsJawGbEAwgm0vVo7fC9bY91VoUad3KYm1xCdxbtfa0PS7Vrl5vQVTQ4wpWrSnWQtXaWpfaRa2AoKyBIBGQQDaGrJNk5r7POzM2ppNn3i+ZSb6Z+f/OyenMVDMz8fu/z/du3+cYX/mqjwAgJGfgfwEgBAQEQICAAAgQEAABAgIgQEAABAgIgAABARAgIAACBARAgIAACBAQAAECAiBAQAAECAiAAAEBECAgAAIEBECAgAAIEBAAAQICIEBAAAQICIAAAQEQICAAAgQEQICAAAgQEAABAgIgQEAABAgIgAABARAgIAACBARAgIAACBAQAAECAiBAQAAECAiAAAEBECAgAAIEBECAgAAIEBAAAQICIEBAAAQICIAAAQEQICAAAgQEQICAAAgQEAABAgIgQEAABAgIgAABARAgIAACBARAgIAACBAQAAECAiBAQAAECAiAwDG+8lVf4HHM6+7xUme32ddxqJ+MVJf/SRT4fD5q83gDz/qXnuwkp5M/jazH66OOrvC/LyhN/V6Xwe+1gr9Tu/pOpgdMsstBKUmx3QbHTUA6unqoKDuFzp9aSJ4wIXGo44YPuKf+/jHlZyYHXo0cPpAaWrromvPGkqdHfZZ+Pk56ipOeePNw2IOZP2uq+mcumlVsFBL+fb/bfJQ61T8bqZDwdzre1k1XnTNaPebngf+jH8lJDnq3xk37jrZRagyHJC4C0q0OID4o9v7y84FXzJx351u083CL+ncjW0kaTnjole+fTmeU5Qde6V/DiQ6asOwNKshKVsENfTDXq9+34abZNGdKUeCV8Kr+cYgWP/SBbjQiocPTQ7Mn5tILt5wWeMWAz0tZS/5EhcJ3s7u46IP0qFa6tCQz8LjH6IfIS7/57xl0zO3RrWMkcdU4oyxXHR+h37v3T2F2mnjK4lWfjasHh8Mb4t/v7+fSM8dQXmaSOu0c/Hfjv0+9qogPLK5Qz7wh3y/UDzmcNHdK+IpuZ3HTSefTECs4VHxwLv3Pz1BLJwcmsrosHBTSP+lULS9/t3teqCGny1ql+78rJlNTa1fg2cDxqdoXTimi8cWZ+u9mwuVy0vba4/TS1mOqHxKb1YMl9iiWauHvV60iHwBeiwEbSjlpSXRrVbV+bHqmwi34AlVFRuenUlePeee+Ly6ux9Qp3polU9QzK7/HQd948H19iherp1csoQPibwyd9OMFk6hZdUDtike5+DTrxid3qMdWqoiPHl86TfVzBl5FOrt66EvTi2hcUYaF6uGijZs+ph0HW2J+FCuxK4jCLe3yL02kjBSn7uzbVXaai1a9fEB93m7jkakeVTnOLi+kyaMzVT9gYFXkqOqjPXi11epBtCSCAwTDKeEDEsQtbb06GOyKT1PyMpLpyge26c6vOZ86jZyih52tavf00JdnjqAxhVb6Hi76+YZ9umMe6XmY4YCAKFxFvjijhGZOyNb9EbvieZOqt+uowd2hDkQrVaSApoy1VkX0yJU6NVtjoXqofrnqy/XQHeurKTcjKfBqbENAPuGlJ5aeouccIj3sGylcRfi05ZIVW9Qza1XkvoUVlqoIT0heMEtVjwLzvgc5XLT0kR16hQKPvsUDBCSAD4JJo7Np/hkj9XIKu+IJ0b/taaZtHx7XQ6kmuIqcpfoiFYZ9EW4gOEzBeQ8TXNE+bmqnh1/7iDKjuIRnqCEgvfm4ikyjxtYu21YRVpybQpfe+556ZKWV9ukDng/8cN9NV4+ZxdaqhzqULl25hUpyU2N6WLcvBKQXnpBLSU6i2y8pJXe7fYd9k1XlqG1op5e21OlOsQmuImcGqkiXcND7+x4ei9XDSX/dVU/v7HPr4eh4goD0wZ3MH84rIx7xtTo7P5QKs1Jo8UPvB56Z8ukhW6kvwtXjwlnFNLog3UL1cNBl922l4pzYH9btCwHpI3j28cCSCmocwNDoUElS5/xtnV5a88qHlqrI6WUFNHVsVr99ET3vYWHWnN/70ddqqbm1W3+meIOAhMDDvlecPVadgw9umUa05WUk0c1P7daPzU/7fbRaBYBXHPfF8x7zTi2mknyz6hGc5qhcuzMq2wbsAAHpl4+erZxBdcftO3nIS1CS1M+P1u8xXoKiq0hpPp0yPvtTVSTY9+DwmFYPh3rP5U9sp7Qks01fsQgB6QcfSDMm5ulVrNyy2lVOehL96Lf71CPeHOV/LTwfPbCoQk8EBnHfY96pJVSSZ1Y9eFj3eGsnrX6llrLS4mdYt6+EDIh5Y+elddeeEpU9I5HCQ6r5mUm0ZI3qsDvMq8hppQU0I1BF+Ltxx/0+CyNXfOhwx5xPreJpWLevhAsIh6NOHfAmrS23pAXZqbTsCxOopcO+VSQjxUWPvXGI3K3qexl3lH10z5Xler+Irh6nldBI4+rhpF2H3PTytgZKV+8dzxIuIHzefPOvVMfWsLXlXYErFlZQp2pp7bpnhFvwkrzg5KHZf1KuIudMLqLR+Wl0VPWzfrJgknrVtHo46ML/3aQCFX/Dun0l5CkWnxZUvXVYt4ThBDPxi8snUVObfYd9+cIIf97eQLtVy266BIXdfVk5VYzLpLJRWYbVw0VPvnmQDjd59IRlvEvIgJSNzKDrH9+hHpmdjvCw73XnT9TB4ksL2RFXEZ6om7/SfAkKf6+LzxhFqxebjVwFuxo3/mqXvshEIkjIgPBK02ONHfTCZl6qYfon8NFj356mOuz2rSK8e6/6SBu9tv2Y8ffikJx7coFR9eCh5DvXV+vTzXjY62EiIQPCMjKS6a7neXjUtLX10typI+j00lxb7xnh5fCLeETL8Hsxo1MrfaR46fbnqik3PT72ephI2IDwlTY27T9Om2uaLFQRL1Utn0FH3Z22Hfbl5R48ZPvUXw/p/kLEOFz09Xvf02vA4nlYt6+EDAhfa4pxa3vdY1b6Ij49FHrF2WOoLQqXCoqUAtVXuubhD/TjSBzL3IDsPuym9e/U6V2NiSQhA8J7Fnh0is/Ztxw4QX/f3WBeRXw9tHbpNGr19HwSNLvhZR986c97fr/PeAmKzEELV8f+JXwGIgED4tPXigrOaYzITqbL7t+qHhlWEe5+OJ1027xSfa1au+J+gn8ho5UlKP+OT9N438l7qiGJt70eJhKygnh79bGT1NFT7+6ijZuOGJ+z8yVAb7moVB8wdt0zwi09D8Uu4+Fsw0nR/uhr/MbhXg8TCRmQvngt07K1OwPPwgtG4pFrpuoVsHbFe8NX/bGWGi1cBaU3bjB++WKN7m/xquFEhIAoXEV4QeK6Nw8aVxGeP7hw9kg6qTiDuvrZfDTcuIqMUC3/4gd52Nfaf2p/HHz03ad3630niQoBCeBZ8mVP8IiWaW+E+fSwLy9+7MsuDS6PIwzkRkH+Kumgc8sLyGPT1QNDAQEJ4JlhPph+9ru9xldR58nDirE5dE55PvENfII4HDwX4RjmlPBcTZP6HE8vm6GeDGRY2kvPLpuuN43Zdd4n2hCQXnLUqcQdz+3Vj82Pbb7PyEy9+Sh4EPFSltr6DvVoeAPibu+hWy/+rHrEgwn+16zgeZ/CnDS6/vzo3CIiFiAgvfCBzR3bpQ9v08viTeiDKDuVLjm9hNp7LUFxDvNfludoeCfkrZdM0ldqGTBVeVYtqtC/y67zPtGEgPTBAXn0jUN0pKndwsiPl+5fdDI19qoiw403QvG9T9hgPhJXHofDSbddbO95n2hBQPoIzh9cxVdRN/zzcBUpykmn+X2qyHDhuRneZXj1eZ/Ro22Dped9vlKqL3tq52uFRQMCEgLf1PP1nY20ZX+zqiKmfyKvviJI8BYKfAvk4cJzM09eP109iszBHPwtK7+hqqSNrxUWDQhIP/j6t/NX8lXUzQ50riL5qi+y4HOj9LW0Nu13q1eHPiQ8JzNhRDqdP22E+kyRq2Zcib5+1hgaV5Bm62uFRRoC0g/eTnqk2UPPvmVl2biXHry6grpUCz4cl//n/g/PyTz/nZn8zP9iGObfjfnoqRum66svJsqwLwIi4L4I3++CmQz7chXJzUylL5812tLNaiKFd/rNrSig8tE5RtWDw7HqD/uNQ8K/c9ZJefQfkwv0eyUCBETAk4c8tMlXLjQd9uUqct+iisAp1tDR1UNVvF/zpKD6DOEEA7/sofdp835rm8aeVe9R18SbxgIvxTEEJAxeNn7nb/dRp8fs5plcRSYUZ9Lsidnq2dAdQa2dPfStueMoLytVf4ZwOPArXqyhdNVvuvZRa5vG+FphN3xxvHrP+B/2RUDC4GHfvOAOPcObZ3KH9ptzeIh1aE5DuHo0tXb770ZrsKQkGIWfbqihwuxk2vKhmzbVWBix83n1iBbfOjve+yIIiAGePFz35mFLk4dDFQ7GN/u589IyHWCTt+W1Zo+9XkttHv/VSSxvPfb69E7Fnywos/X95SMBATE0Kj+VLrh7k3pkrz8Z74zkO0Z9/6ulRktKghG45Zk9nyxj563HWw+4LV0Gid/ruwkweYiAGOKJvw8OtVi67dlQ4Ks9rrhqsn5scrbjrx4f6bVVvftURepUq1Iv9zerIsH3undhfE8eIiCGuC9SlJVM1+tTEdPDKLq6A0tKvjlnvO73hBP8zP5NUJ++MiJvGuP5jXV/+ci4AeD3/NqZY2hsYZptN40NFgJigd55eMJDD796wHjPSDTxspZnKs2XlPBn5tuldXZ9unoE8aax5et26cfmDYCPnrlhuv67xGOHHQGxKF9VkRse9+9fNxj1jRqeiJw0KpPOm2JtScltv9lLOemhr6sbnPe567k9ljaNzZyYR6dNzFGfCQFJeME9Izc+ucPC5GHk8S6/Kj0paHZQ8mnTC5uP6HvASzfb5DtW3fV8jX5s3gB4aePNs+lIE28Siy8IyADwLcdWvnSAPF1mk4eR1qE62P81tZDKx2Rbqh7L1+6ivEz5AgzcAPAe9tstrB7wTx6m0TVzx1FLR3wN+yIgA8Addp5gm79ii3oytH9CvaRE9T2erjRbUsKC1eNwc6fRPT24Afj5RotVxOdf7n+iPb52HiIgA8S3HnvxvXra+qGVPSODx0tKluolJSm65TbF1/3i63+Z4CqSnuyiH/x6l3kV8fp0EO+YX0ruOJo8REAGgfeMXKl3Hg7NaRZXD+5DrF5SoZ6Y7RTk8P5x21H6uMmsegRlqyrysw011N7ZZXwayZOH37uolFLiaPIQARkEnoHeW9dGL6rTl6GYPOQ94b+4rFzl0WW0pMTPQT+sqtbryazwbz1OUf2WncankcEzq7svL4+byUMEZJB4HZO/ikS3jnCLzMffTRd81vgqJVw93tnbpE4D3TrMVmWkOOmR1w9Rh4UqwpOHC88dR2MKUuNi5yECMkh84HBX4O6N+6I6edisT634XoL/aqnDc9DSR7dToQrxQAQvYFFpoYr4+WjttXy7Op48DLwUoxCQCMjNSKLb1u+lbtV6RmPYVy8pSXXR5WeP0S20Ca4eb1c30vaDLQOqHkG6irx2kLosDGnz0PPnygrp1JNyh2VnZSQhIBGg5w7UgVSpbzUQ+T8pLynx7xS00hw76H/WDf5utFxF+ALYX1u11eJ389Lvb5pFR5rte7s6EwhIhGSlJdGaP9VS3XErF5wLj1vgKWOz6PMVRbplNsHvX1PXQu/uP04pEfgsvKR9w6ajdOBoq/F3C04efmvOOL3vJFbFTUCsXIcqNTlyB3BvI/PTaIG+T7m1P6v0aU50dOv7kFirHk66TvU9uHpwBRgs/h28HN6/qcpaFVm16OSYnl2Pi4BwODar1rLhBN8oxiX+8OH48rYGPVYfaXzn3H9UN9M/9zWGfO9QP4ca2tQBGPgFIfC6rx9U7VGPHCH//VA/tcfa6JXtjZQ6iL5HX3w3rZffr6eDjW0h3zPUDx9et1ZV6+8QqxzjK1+N8XEGv251+uFRZX3eqSV6OXco3BKeaO+mP2yrp8IIta598XAsH0xzKgrCdlBTk11U9fYRylIHEN94sz88gvWV2cW6kxzufJ4nA9/d79a3qrYyMWiCh21LclJp9sQcgyFchwqog6reqdOTjtH4Ww+FuAkI4+2nHWEOSj4OuWWN5n8wDonpdaP4/N7kInO8A9D0PxT3O3jvSjRwMHiLr6l09f1iNRwsrgICEGlx0QcBiBYEBECAgAAIEBAAAQICIEBAAAQICIAAAQEQICAAAgQEQICAAAgQEAABAgIgQEAABAgIgAABARAgIAACBARAgIAACBAQAAECAiBAQAAECAiAAAEBECAgAAIEBECAgAAIEBAAAQICIEBAAAQICIAAAQEQICAAAgQEQICAAAgQEAABAgIgQEAABAgIgAABARAgIAACBARAgIAACBAQAAECAiBAQAAECAiAAAEBECAgAAIEBECAgAAIEBAAAQICIEBAAAQICIAAAQEQICAAAgQEQICAAAgQEAABAgIgQEAABAgIgAABARAgIAACBASgX0T/D6fCQvHpUHIAAAAAAElFTkSuQmCC"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/nx-big.b4b10226aee80de50a57866a20d99ad6.png";

/***/ })
/******/ ]);