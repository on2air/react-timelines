"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _Toggle = _interopRequireDefault(require("../Toggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createProps = function createProps() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? undefined : _ref$isOpen,
      _ref$toggleOpen = _ref.toggleOpen,
      toggleOpen = _ref$toggleOpen === void 0 ? jest.fn() : _ref$toggleOpen,
      _ref$zoomIn = _ref.zoomIn,
      zoomIn = _ref$zoomIn === void 0 ? jest.fn() : _ref$zoomIn,
      _ref$zoomOut = _ref.zoomOut,
      zoomOut = _ref$zoomOut === void 0 ? jest.fn() : _ref$zoomOut,
      _ref$zoom = _ref.zoom,
      zoom = _ref$zoom === void 0 ? 2 : _ref$zoom,
      _ref$zoomMin = _ref.zoomMin,
      zoomMin = _ref$zoomMin === void 0 ? 1 : _ref$zoomMin,
      _ref$zoomMax = _ref.zoomMax,
      zoomMax = _ref$zoomMax === void 0 ? 10 : _ref$zoomMax;

  return {
    isOpen: isOpen,
    toggleOpen: toggleOpen,
    zoomIn: zoomIn,
    zoomOut: zoomOut,
    zoom: zoom,
    zoomMin: zoomMin,
    zoomMax: zoomMax
  };
};

describe('<Controls />', function () {
  describe('Toggle', function () {
    it('render <Toggle />', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(wrapper.find(_Toggle.default).exists()).toBe(true);
    });
    it('do not render <Toggle /> if no "toggleOpen" prop', function () {
      var props = _objectSpread({}, createProps(), {
        toggleOpen: undefined
      });

      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(wrapper.find(_Toggle.default).exists()).toBe(false);
    });
  });
  describe('Zoom in button', function () {
    var findButton = function findButton(node) {
      return node.find('.rt-controls__button--zoom-in');
    };

    it('not rendered if no "zoomIn" fn passed', function () {
      var props = _objectSpread({}, createProps(), {
        zoomIn: undefined
      });

      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(findButton(wrapper).exists()).toBe(false);
    });
    it('is disabled when "zoom" is equal to "zoomMax"', function () {
      var props = createProps({
        zoom: 5,
        zoomMax: 5
      });
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(true);
    });
    it('is disabled when "zoom" is greater than "zoomMax"', function () {
      var props = createProps({
        zoom: 6,
        zoomMax: 5
      });
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(true);
    });
    it('is not disabled when "zoom" is less than "zoomMax"', function () {
      var props = createProps({
        zoom: 2,
        zoomMax: 5
      });
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(false);
    });
    it('calls "zoomIn() when clicked"', function () {
      var zoomIn = jest.fn();
      var props = createProps({
        zoom: 2,
        zoomMax: 5,
        zoomIn: zoomIn
      });
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      findButton(wrapper).simulate('click');
      expect(zoomIn).toBeCalled();
    });
  });
  describe('Zoom out button', function () {
    var findButton = function findButton(node) {
      return node.find('.rt-controls__button--zoom-out');
    };

    it('not rendered if no "zoomOut" fn passed', function () {
      var props = _objectSpread({}, createProps(), {
        zoomOut: undefined
      });

      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(findButton(wrapper).exists()).toBe(false);
    });
    it('is disabled when "zoom" is equal to "zoomMin"', function () {
      var props = createProps({
        zoom: 2,
        zoomMin: 2
      });
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(true);
    });
    it('is disabled when "zoom" is less than "zoomMin"', function () {
      var props = createProps({
        zoom: 1,
        zoomMin: 2
      });
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(true);
    });
    it('is not disabled when "zoom" is greater than "zoomMin"', function () {
      var props = createProps({
        zoom: 5,
        zoomMin: 2
      });
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(findButton(wrapper).prop('disabled')).toBe(false);
    });
    it('calls "zoomOut() when clicked"', function () {
      var zoomOut = jest.fn();
      var props = createProps({
        zoom: 5,
        zoomMin: 2,
        zoomOut: zoomOut
      });
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_.default, props));
      findButton(wrapper).simulate('click');
      expect(zoomOut).toBeCalled();
    });
  });
});