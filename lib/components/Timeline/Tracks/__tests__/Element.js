"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Element = _interopRequireDefault(require("../Element"));

var _Basic = _interopRequireDefault(require("../../../Elements/Basic"));

var _time = _interopRequireDefault(require("../../../../utils/time"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('<Element />', function () {
  var defaultProps = {
    id: '1',
    time: (0, _time.default)({
      start: new Date('2016-01-01'),
      end: new Date('2019-01-01'),
      zoom: 1
    }),
    title: 'test',
    start: new Date('2017-01-01'),
    end: new Date('2018-01-01')
  };
  it('renders with a calculated width and left position based on "start" and "end"', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Element.default, defaultProps));
    expect(wrapper.prop('style')).toEqual({
      left: '366px',
      width: '365px'
    });
  });
  it('renders <BasicElement />', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Element.default, defaultProps));
    expect(wrapper.find(_Basic.default).exists()).toBe(true);
  });
  describe('clickElement', function () {
    it('renders with a cursor pointer style if callback is passed', function () {
      var props = _objectSpread({}, defaultProps);

      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Element.default, _extends({}, props, {
        clickElement: jest.fn()
      })));
      expect(wrapper.prop('style')).toMatchObject({
        cursor: 'pointer'
      });
    });
    it('renders without cursor pointer style if callback is not passed', function () {
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Element.default, defaultProps));
      expect(wrapper.prop('style')).not.toMatchObject({
        cursor: 'pointer'
      });
    });
    it('gets called with props when clicked', function () {
      var clickElement = jest.fn();

      var props = _objectSpread({}, defaultProps, {
        clickElement: clickElement
      });

      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Element.default, _extends({}, props, {
        clickElement: clickElement
      })));
      expect(clickElement).toHaveBeenCalledTimes(0);
      wrapper.simulate('click');
      expect(clickElement).toHaveBeenCalledTimes(1);
      expect(clickElement).toHaveBeenCalledWith(props);
    });
  });
});