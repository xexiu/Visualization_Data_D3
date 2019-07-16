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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/smarthphone_tablet.js":
/*!************************************!*\
  !*** ./data/smarthphone_tablet.js ***!
  \************************************/
/*! exports provided: dataJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataJSON\", function() { return dataJSON; });\n/* eslint-disable padding-line-between-statements */\nvar dataJSON = {\n  revenue: {\n    metricName: 'revenue',\n    devices: {\n      tablet: 123000,\n      smartphone: 80000\n    },\n    properties: {\n      color: ['#99d15a', '#436223']\n    }\n  },\n  impressions: {\n    metricName: 'impressions',\n    devices: {\n      tablet: 20000000,\n      smartphone: 30000000\n    },\n    properties: {\n      color: ['#d0eef7', '#334e5e']\n    }\n  },\n  visits: {\n    metricName: 'visits',\n    devices: {\n      tablet: 480000000,\n      smartphone: 120000000\n    },\n    properties: {\n      color: ['#ecc54d', '#af5e2c']\n    }\n  }\n};\n\n//# sourceURL=webpack:///./data/smarthphone_tablet.js?");

/***/ }),

/***/ "./node_modules/d3/index.js":
/*!**********************************!*\
  !*** ./node_modules/d3/index.js ***!
  \**********************************/
/*! exports provided: version, bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, range, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip, axisTop, axisRight, axisBottom, axisLeft, brush, brushX, brushY, brushSelection, chord, ribbon, nest, set, map, keys, values, entries, color, rgb, hsl, lab, hcl, lch, gray, cubehelix, contours, contourDensity, dispatch, drag, dragDisable, dragEnable, dsvFormat, csvParse, csvParseRows, csvFormat, csvFormatBody, csvFormatRows, tsvParse, tsvParseRows, tsvFormat, tsvFormatBody, tsvFormatRows, autoType, easeLinear, easeQuad, easeQuadIn, easeQuadOut, easeQuadInOut, easeCubic, easeCubicIn, easeCubicOut, easeCubicInOut, easePoly, easePolyIn, easePolyOut, easePolyInOut, easeSin, easeSinIn, easeSinOut, easeSinInOut, easeExp, easeExpIn, easeExpOut, easeExpInOut, easeCircle, easeCircleIn, easeCircleOut, easeCircleInOut, easeBounce, easeBounceIn, easeBounceOut, easeBounceInOut, easeBack, easeBackIn, easeBackOut, easeBackInOut, easeElastic, easeElasticIn, easeElasticOut, easeElasticInOut, blob, buffer, dsv, csv, tsv, image, json, text, xml, html, svg, forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, forceX, forceY, formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, precisionFixed, precisionPrefix, precisionRound, geoArea, geoBounds, geoCentroid, geoCircle, geoClipAntimeridian, geoClipCircle, geoClipExtent, geoClipRectangle, geoContains, geoDistance, geoGraticule, geoGraticule10, geoInterpolate, geoLength, geoPath, geoAlbers, geoAlbersUsa, geoAzimuthalEqualArea, geoAzimuthalEqualAreaRaw, geoAzimuthalEquidistant, geoAzimuthalEquidistantRaw, geoConicConformal, geoConicConformalRaw, geoConicEqualArea, geoConicEqualAreaRaw, geoConicEquidistant, geoConicEquidistantRaw, geoEqualEarth, geoEqualEarthRaw, geoEquirectangular, geoEquirectangularRaw, geoGnomonic, geoGnomonicRaw, geoIdentity, geoProjection, geoProjectionMutator, geoMercator, geoMercatorRaw, geoNaturalEarth1, geoNaturalEarth1Raw, geoOrthographic, geoOrthographicRaw, geoStereographic, geoStereographicRaw, geoTransverseMercator, geoTransverseMercatorRaw, geoRotation, geoStream, geoTransform, cluster, hierarchy, pack, packSiblings, packEnclose, partition, stratify, tree, treemap, treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify, interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize, path, polygonArea, polygonCentroid, polygonHull, polygonContains, polygonLength, quadtree, randomUniform, randomNormal, randomLogNormal, randomBates, randomIrwinHall, randomExponential, scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat, schemeCategory10, schemeAccent, schemeDark2, schemePaired, schemePastel1, schemePastel2, schemeSet1, schemeSet2, schemeSet3, interpolateBrBG, schemeBrBG, interpolatePRGn, schemePRGn, interpolatePiYG, schemePiYG, interpolatePuOr, schemePuOr, interpolateRdBu, schemeRdBu, interpolateRdGy, schemeRdGy, interpolateRdYlBu, schemeRdYlBu, interpolateRdYlGn, schemeRdYlGn, interpolateSpectral, schemeSpectral, interpolateBuGn, schemeBuGn, interpolateBuPu, schemeBuPu, interpolateGnBu, schemeGnBu, interpolateOrRd, schemeOrRd, interpolatePuBuGn, schemePuBuGn, interpolatePuBu, schemePuBu, interpolatePuRd, schemePuRd, interpolateRdPu, schemeRdPu, interpolateYlGnBu, schemeYlGnBu, interpolateYlGn, schemeYlGn, interpolateYlOrBr, schemeYlOrBr, interpolateYlOrRd, schemeYlOrRd, interpolateBlues, schemeBlues, interpolateGreens, schemeGreens, interpolateGreys, schemeGreys, interpolatePurples, schemePurples, interpolateReds, schemeReds, interpolateOranges, schemeOranges, interpolateCubehelixDefault, interpolateRainbow, interpolateWarm, interpolateCool, interpolateSinebow, interpolateViridis, interpolateMagma, interpolateInferno, interpolatePlasma, create, creator, local, matcher, mouse, namespace, namespaces, clientPoint, select, selectAll, selection, selector, selectorAll, style, touch, touches, window, event, customEvent, arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAppearance, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse, timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears, timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse, now, timer, timerFlush, timeout, interval, transition, active, interrupt, voronoi, zoom, zoomTransform, zoomIdentity */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/d3/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/d3/index.js?");

/***/ }),

/***/ "./src/css/circle.css":
/*!****************************!*\
  !*** ./src/css/circle.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/css-loader/dist/runtime/api.js'\\n    at runLoaders (/Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/webpack/lib/NormalModule.js:302:20)\\n    at /Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/loader-runner/lib/LoaderRunner.js:203:19\\n    at process.nextTick (/Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:73:15)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack:///./src/css/circle.css?");

/***/ }),

/***/ "./src/css/dashboard.css":
/*!*******************************!*\
  !*** ./src/css/dashboard.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/css-loader/dist/runtime/api.js'\\n    at runLoaders (/Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/webpack/lib/NormalModule.js:302:20)\\n    at /Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/loader-runner/lib/LoaderRunner.js:203:19\\n    at process.nextTick (/Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:73:15)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack:///./src/css/dashboard.css?");

/***/ }),

/***/ "./src/css/devices.css":
/*!*****************************!*\
  !*** ./src/css/devices.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/css-loader/dist/runtime/api.js'\\n    at runLoaders (/Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/webpack/lib/NormalModule.js:302:20)\\n    at /Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/loader-runner/lib/LoaderRunner.js:203:19\\n    at process.nextTick (/Users/sergiumironescuiancu1/Desktop/Sergio/D3_Data_Driven_Documents/Project_Visualization_d3/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:73:15)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack:///./src/css/devices.css?");

/***/ }),

/***/ "./src/js/Dashboard.js":
/*!*****************************!*\
  !*** ./src/js/Dashboard.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dashboard; });\n/* harmony import */ var _css_dashboard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/dashboard.css */ \"./src/css/dashboard.css\");\n/* harmony import */ var _css_dashboard_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_dashboard_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_Circles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/components/Circles */ \"./src/js/components/Circles.js\");\n/* harmony import */ var _js_components_Devices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/components/Devices */ \"./src/js/components/Devices.js\");\n/* harmony import */ var _js_model_DataModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/model/DataModel */ \"./src/js/model/DataModel.js\");\n/* harmony import */ var _js_utils_DOMVirtual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/utils/DOMVirtual */ \"./src/js/utils/DOMVirtual.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable padding-line-between-statements */\n\n\n\n\n\n\nfunction buildWrapper(_ref) {\n  var metricName = _ref.metricName;\n  var container = document.querySelector('.d3__metrics');\n  var wrapper = Object(_js_utils_DOMVirtual__WEBPACK_IMPORTED_MODULE_4__[\"buildDomElement\"])('div', \"d3__wrapper--\".concat(metricName));\n  container.appendChild(wrapper);\n}\n\nvar Dashboard =\n/*#__PURE__*/\nfunction () {\n  function Dashboard() {\n    _classCallCheck(this, Dashboard);\n\n    this.model = new _js_model_DataModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.circles = new _js_components_Circles__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.devices = new _js_components_Devices__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n\n  _createClass(Dashboard, [{\n    key: \"init\",\n    value: function init() {\n      this.createChildren(this.model);\n    }\n  }, {\n    key: \"createChildren\",\n    value: function createChildren() {\n      var _this = this;\n\n      Array.from(this.model.getData()).forEach(function (data) {\n        var _this$model = _this.model,\n            getMetricName = _this$model.getMetricName,\n            getMetricColor = _this$model.getMetricColor,\n            getDevicesValues = _this$model.getDevicesValues,\n            getDevicesTotalValue = _this$model.getDevicesTotalValue,\n            getDevices = _this$model.getDevices;\n        var objToDraw = {\n          metricName: getMetricName(data),\n          metricColor: getMetricColor(data),\n          devicesValues: getDevicesValues(data),\n          devicesTotalValue: getDevicesTotalValue(data),\n          devices: getDevices(data)\n        };\n        buildWrapper(objToDraw);\n\n        _this.circles.drawCircles(objToDraw);\n\n        _this.devices.drawDevices(objToDraw);\n      });\n    }\n  }]);\n\n  return Dashboard;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/Dashboard.js?");

/***/ }),

/***/ "./src/js/adapters/AbstractCircle.js":
/*!*******************************************!*\
  !*** ./src/js/adapters/AbstractCircle.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AbstractCircle; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* harmony import */ var _utils_d3Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/d3Utils */ \"./src/js/utils/d3Utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable padding-line-between-statements */\n\n\nvar WIDTH = 250;\nvar HEIGHT = 250;\nvar INNER_RADIUS = 110;\nvar OUTER_RADIUS = 117;\nvar HALF_SECOND = 500;\n\nvar AbstractCircle =\n/*#__PURE__*/\nfunction () {\n  function AbstractCircle() {\n    _classCallCheck(this, AbstractCircle);\n  }\n\n  _createClass(AbstractCircle, [{\n    key: \"drawCircles\",\n    value: function drawCircles(_ref) {\n      var metricName = _ref.metricName,\n          metricColor = _ref.metricColor,\n          devicesValues = _ref.devicesValues,\n          devicesTotalValue = _ref.devicesTotalValue;\n      var canvas = Object(_utils_d3Utils__WEBPACK_IMPORTED_MODULE_1__[\"buildSVG\"])(\".d3__wrapper--\".concat(metricName), WIDTH, HEIGHT);\n      var arc = Object(_utils_d3Utils__WEBPACK_IMPORTED_MODULE_1__[\"buildArc\"])(INNER_RADIUS, OUTER_RADIUS);\n      var pie = Object(_utils_d3Utils__WEBPACK_IMPORTED_MODULE_1__[\"buildPie\"])();\n      var color = d3__WEBPACK_IMPORTED_MODULE_0__[\"scaleOrdinal\"]().range(metricColor);\n      var group = canvas.append('g').attr('transform', 'translate(125,125)');\n      var arcs = group.selectAll('.arc').data(pie(devicesValues)).enter().append('g').attr('class', 'arc');\n      arcs.append('path').attr('d', arc).attr('fill', function (d) {\n        return color(d.value);\n      }).transition().duration(HALF_SECOND).attrTween('d', function (d) {\n        return Object(_utils_d3Utils__WEBPACK_IMPORTED_MODULE_1__[\"interpolateAngles\"])(arc, d);\n      });\n      arcs.append('text').style('text-anchor', 'middle').style('fill', '#b9b9b9').text(metricName.toUpperCase());\n      arcs.append('text').style('text-anchor', 'middle').attr('dy', '1em').text(new Intl.NumberFormat().format(devicesTotalValue));\n    }\n  }]);\n\n  return AbstractCircle;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/adapters/AbstractCircle.js?");

/***/ }),

/***/ "./src/js/adapters/AbstractDevice.js":
/*!*******************************************!*\
  !*** ./src/js/adapters/AbstractDevice.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AbstractDevice; });\n/* harmony import */ var _utils_DOMVirtual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DOMVirtual */ \"./src/js/utils/DOMVirtual.js\");\n/* harmony import */ var _utils_mathsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mathsUtils */ \"./src/js/utils/mathsUtils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable padding-line-between-statements */\n\n\n\nvar AbstractDevice =\n/*#__PURE__*/\nfunction () {\n  function AbstractDevice() {\n    _classCallCheck(this, AbstractDevice);\n  }\n\n  _createClass(AbstractDevice, [{\n    key: \"drawDevices\",\n    value: function drawDevices(_ref) {\n      var metricName = _ref.metricName,\n          deviceName = _ref.deviceName,\n          deviceValue = _ref.deviceValue,\n          devicesTotalValue = _ref.devicesTotalValue;\n      // percent = obtained * 100 / total --> 12 * 100 / 20 = 60%\n      var percentValue = Object(_utils_mathsUtils__WEBPACK_IMPORTED_MODULE_1__[\"getPercentatge\"])(deviceValue, devicesTotalValue);\n      var container = document.querySelector(\".d3__wrapper--\".concat(metricName));\n      var device = Object(_utils_DOMVirtual__WEBPACK_IMPORTED_MODULE_0__[\"buildDomElement\"])('span', \"d3__\".concat(deviceName, \"--\").concat(metricName), deviceName);\n      var percent = Object(_utils_DOMVirtual__WEBPACK_IMPORTED_MODULE_0__[\"buildDomElement\"])('span', \"d3__\".concat(deviceName, \"--percent\"), \"\".concat(percentValue, \"%\"));\n      var value = Object(_utils_DOMVirtual__WEBPACK_IMPORTED_MODULE_0__[\"buildDomElement\"])('span', \"d3__\".concat(deviceName, \"--value\"), \"\".concat(deviceValue, \"\\u20AC\"));\n      container.appendChild(device);\n      container.appendChild(percent);\n      container.appendChild(value);\n    }\n  }]);\n\n  return AbstractDevice;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/adapters/AbstractDevice.js?");

/***/ }),

/***/ "./src/js/components/Circles.js":
/*!**************************************!*\
  !*** ./src/js/components/Circles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Circles; });\n/* harmony import */ var _adapters_AbstractCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adapters/AbstractCircle */ \"./src/js/adapters/AbstractCircle.js\");\n/* harmony import */ var _css_circle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/circle.css */ \"./src/css/circle.css\");\n/* harmony import */ var _css_circle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_circle_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* eslint-disable class-methods-use-this */\n\n/* eslint-disable padding-line-between-statements */\n\n\n\nvar Circles =\n/*#__PURE__*/\nfunction (_AbstractCircle) {\n  _inherits(Circles, _AbstractCircle);\n\n  function Circles() {\n    _classCallCheck(this, Circles);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Circles).apply(this, arguments));\n  }\n\n  _createClass(Circles, [{\n    key: \"drawCircles\",\n    value: function drawCircles(obj) {\n      _get(_getPrototypeOf(Circles.prototype), \"drawCircles\", this).call(this, obj);\n    }\n  }]);\n\n  return Circles;\n}(_adapters_AbstractCircle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/js/components/Circles.js?");

/***/ }),

/***/ "./src/js/components/Devices.js":
/*!**************************************!*\
  !*** ./src/js/components/Devices.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Devices; });\n/* harmony import */ var _adapters_AbstractDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adapters/AbstractDevice */ \"./src/js/adapters/AbstractDevice.js\");\n/* harmony import */ var _css_devices_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/devices.css */ \"./src/css/devices.css\");\n/* harmony import */ var _css_devices_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_devices_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* eslint-disable padding-line-between-statements */\n\n\n\nvar Devices =\n/*#__PURE__*/\nfunction (_AbstractDevice) {\n  _inherits(Devices, _AbstractDevice);\n\n  function Devices() {\n    _classCallCheck(this, Devices);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Devices).apply(this, arguments));\n  }\n\n  _createClass(Devices, [{\n    key: \"drawDevices\",\n    value: function drawDevices(obj) {\n      var _this = this;\n\n      Array.from(obj.devices || []).forEach(function (_) {\n        var device = Object.assign(obj, {\n          deviceName: _[0],\n          deviceValue: _[1]\n        });\n\n        _get(_getPrototypeOf(Devices.prototype), \"drawDevices\", _this).call(_this, device);\n      });\n    }\n  }]);\n\n  return Devices;\n}(_adapters_AbstractDevice__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/js/components/Devices.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard */ \"./src/js/Dashboard.js\");\n/* eslint-disable padding-line-between-statements */\n\n\n(function () {\n  var dashboard = new _Dashboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  dashboard.init();\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/model/DataModel.js":
/*!***********************************!*\
  !*** ./src/js/model/DataModel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DataModel; });\n/* harmony import */ var _data_smarthphone_tablet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/smarthphone_tablet */ \"./data/smarthphone_tablet.js\");\n/* harmony import */ var _utils_mathsUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mathsUtils */ \"./src/js/utils/mathsUtils.js\");\n/* harmony import */ var _utils_objectUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/objectUtils */ \"./src/js/utils/objectUtils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* eslint-disable padding-line-between-statements */\n\n\n\n\nvar DataModel =\n/*#__PURE__*/\nfunction () {\n  function DataModel() {\n    _classCallCheck(this, DataModel);\n\n    this.data = _data_smarthphone_tablet__WEBPACK_IMPORTED_MODULE_0__[\"dataJSON\"];\n  }\n\n  _createClass(DataModel, [{\n    key: \"getMetric\",\n    value: function getMetric(data) {\n      // all object metric\n      return data;\n    }\n  }, {\n    key: \"getMetricName\",\n    value: function getMetricName(data) {\n      // name of the metric -> revenue\n      return data && data.metricName || 'No metric name!';\n    }\n  }, {\n    key: \"getDevicesTotalValue\",\n    value: function getDevicesTotalValue(data) {\n      // 3000 + 8000\n      return Object(_utils_objectUtils__WEBPACK_IMPORTED_MODULE_2__[\"getValues\"])(data && data.devices).reduce(_utils_mathsUtils__WEBPACK_IMPORTED_MODULE_1__[\"sum\"]);\n    }\n  }, {\n    key: \"getDevicesValues\",\n    value: function getDevicesValues(data) {\n      // [3000, 8000]\n      return Object(_utils_objectUtils__WEBPACK_IMPORTED_MODULE_2__[\"getValues\"])(data && data.devices);\n    }\n  }, {\n    key: \"getDevices\",\n    value: function getDevices(data) {\n      // -> [Array(2), Array(2)]\n      return data && Object(_utils_objectUtils__WEBPACK_IMPORTED_MODULE_2__[\"getEntries\"])(data.devices);\n    }\n  }, {\n    key: \"getMetricColor\",\n    value: function getMetricColor(data) {\n      // ['#ecc54d', '#af5e2c']\n      return data && data.properties.color || '';\n    }\n  }, {\n    key: \"getData\",\n    value: function getData() {\n      // all data\n      return this.data;\n    }\n  }, {\n    key: \"setData\",\n    value: function setData(data) {\n      this.data = data;\n    }\n  }]);\n\n  return DataModel;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/model/DataModel.js?");

/***/ }),

/***/ "./src/js/utils/DOMVirtual.js":
/*!************************************!*\
  !*** ./src/js/utils/DOMVirtual.js ***!
  \************************************/
/*! exports provided: buildDomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildDomElement\", function() { return buildDomElement; });\n/* eslint-disable padding-line-between-statements */\nfunction buildDomElement(element, className, text) {\n  return Object.assign(document.createElement(element), {\n    className: className,\n    innerText: text || ''\n  });\n}\n\n//# sourceURL=webpack:///./src/js/utils/DOMVirtual.js?");

/***/ }),

/***/ "./src/js/utils/d3Utils.js":
/*!*********************************!*\
  !*** ./src/js/utils/d3Utils.js ***!
  \*********************************/
/*! exports provided: shortValuesD3, buildSVG, buildArc, buildPie, interpolateAngles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shortValuesD3\", function() { return shortValuesD3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildSVG\", function() { return buildSVG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildArc\", function() { return buildArc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildPie\", function() { return buildPie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"interpolateAngles\", function() { return interpolateAngles; });\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/index.js\");\n/* eslint-disable padding-line-between-statements */\n\nvar DEFAULT_WIDTH = 50;\nvar DEFAUTL_HEIGHT = 50;\nfunction shortValuesD3(a, b) {\n  return a < b ? d3__WEBPACK_IMPORTED_MODULE_0__[\"ascending\"](a, b) : d3__WEBPACK_IMPORTED_MODULE_0__[\"descending\"](a, b);\n}\nfunction buildSVG() {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_WIDTH;\n  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAUTL_HEIGHT;\n  return d3__WEBPACK_IMPORTED_MODULE_0__[\"select\"](selector).append('svg').attr('width', width).attr('height', height).attr('class', 'd3-svg');\n}\nfunction buildArc() {\n  var innerRadius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_WIDTH;\n  var outerRadius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAUTL_HEIGHT;\n  return d3__WEBPACK_IMPORTED_MODULE_0__[\"arc\"]().innerRadius(innerRadius).outerRadius(outerRadius);\n}\nfunction buildPie() {\n  return d3__WEBPACK_IMPORTED_MODULE_0__[\"pie\"]().sort(shortValuesD3).value(function (d) {\n    return d;\n  });\n}\nfunction interpolateAngles(arc, d) {\n  var dimension = d;\n  var i = d3__WEBPACK_IMPORTED_MODULE_0__[\"interpolate\"](dimension.startAngle + 0.1, dimension.endAngle);\n  return function (t) {\n    dimension.endAngle = i(t);\n    return arc(dimension);\n  };\n}\n\n//# sourceURL=webpack:///./src/js/utils/d3Utils.js?");

/***/ }),

/***/ "./src/js/utils/mathsUtils.js":
/*!************************************!*\
  !*** ./src/js/utils/mathsUtils.js ***!
  \************************************/
/*! exports provided: sum, getPercentatge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPercentatge\", function() { return getPercentatge; });\n/* eslint-disable padding-line-between-statements */\nfunction sum(a, b) {\n  return a + b;\n}\nfunction getPercentatge(deviceValue, devicesTotalValue) {\n  var num = deviceValue * 100 / devicesTotalValue;\n  return num.toFixed();\n}\n\n//# sourceURL=webpack:///./src/js/utils/mathsUtils.js?");

/***/ }),

/***/ "./src/js/utils/objectUtils.js":
/*!*************************************!*\
  !*** ./src/js/utils/objectUtils.js ***!
  \*************************************/
/*! exports provided: isEmpty, getValues, getKeys, getEntries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmpty\", function() { return isEmpty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getValues\", function() { return getValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getKeys\", function() { return getKeys; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEntries\", function() { return getEntries; });\n/* eslint-disable padding-line-between-statements */\nfunction isEmpty(x) {\n  return !x || x.constructor !== Number && Object.keys(x).length === 0;\n}\nfunction getValues(obj) {\n  if (isEmpty(obj)) {\n    throw new Error('getValues param is undefined, null or empty');\n  }\n\n  return Object.values(obj);\n}\nfunction getKeys(obj) {\n  if (isEmpty(obj)) {\n    throw new Error('getKeys param is undefined, null or empty');\n  }\n\n  return Object.keys(obj);\n}\nfunction getEntries(obj) {\n  if (isEmpty(obj)) {\n    throw new Error('getEntries param is undefined, null or empty');\n  }\n\n  return Object.entries(obj);\n}\n\n//# sourceURL=webpack:///./src/js/utils/objectUtils.js?");

/***/ })

/******/ });