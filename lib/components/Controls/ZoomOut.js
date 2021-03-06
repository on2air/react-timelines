"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZoomOut = function ZoomOut(_ref) {
  var zoom = _ref.zoom,
      zoomMin = _ref.zoomMin,
      zoomOut = _ref.zoomOut;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "rt-controls__button rt-controls__button--zoom-out",
    disabled: zoomMin && zoom <= zoomMin,
    onClick: zoomOut,
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "rt-visually-hidden"
  }, "Zoom Out"), /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "1 1 59 59",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.5 22h24v6h-24z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M25 48.5C12.02 48.5 1.5 37.98 1.5 25S12.02 1.5 25 1.5 48.5 12.02 48.5 25 37.98 48.5 25 48.5zm-.12-6.24c9.6 0 17.38-7.78 17.38-17.38 0-9.6-7.78-17.38-17.38-17.38-9.6 0-17.38 7.78-17.38 17.38 0 9.6 7.78 17.38 17.38 17.38z"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    width: "24",
    height: "8",
    rx: "4",
    transform: "rotate(45 -22.312 67.766)"
  }))));
};

ZoomOut.propTypes = {
  zoom: _propTypes.default.number.isRequired,
  zoomMin: _propTypes.default.number.isRequired,
  zoomOut: _propTypes.default.func.isRequired
};
var _default = ZoomOut;
exports.default = _default;