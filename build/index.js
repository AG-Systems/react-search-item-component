module.exports =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'getHighlightedText',
    value: function getHighlightedText(text, higlight) {
      var _this2 = this;

      // Split on higlight term and include term into parts, ignore case
      var parts = text.split(new RegExp('(' + higlight + ')', 'gi'));
      return _react2.default.createElement(
        'span',
        null,
        ' ',
        parts.map(function (part, i) {
          return _react2.default.createElement(
            'span',
            { key: i, style: part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold', backgroundColor: _this2.props.highlight_color_bg, color: _this2.props.highlight_color_text } : {} },
            part
          );
        }),
        ' '
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var val = void 0;
      if (this.props.type === "title") {
        val = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            { className: 'card-title' },
            ' ',
            this.getHighlightedText(this.props.title, this.props.searched)
          ),
          _react2.default.createElement(
            'p',
            { className: 'card-text' },
            this.props.links[this.props.index]["description"]
          )
        );
      } else {
        val = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            { className: 'card-title' },
            this.props.links[this.props.index]["title"],
            ' '
          ),
          _react2.default.createElement(
            'p',
            { className: 'card-text' },
            this.getHighlightedText(this.props.links[this.props.index]["description"], this.props.searched)
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'card text-white bg-dark mb-3', style: { maxWidth: "20rem", backgroundColor: "rgba(60, 60, 60, .2)" }, key: this.props.index },
        _react2.default.createElement('img', { className: 'card-img-top', src: this.props.links[this.props.index]["img"], alt: 'Card image cap' }),
        _react2.default.createElement(
          'div',
          { className: 'card-body' },
          val,
          _react2.default.createElement(
            'a',
            { href: "/" + this.props.links[this.props.index]["hashed_url"], className: 'btn btn-mycolor', style: { color: "white" } },
            'View Item'
          )
        )
      );
    }
  }]);

  return Item;
}(_react2.default.Component);

var Search = function (_React$Component2) {
  _inherits(Search, _React$Component2);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this3 = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this3.state = { search_term: "" }; //if you want to hide the results intially, this.state = {search_term: "-"};
    return _this3;
  }

  _createClass(Search, [{
    key: 'onChange',
    value: function onChange(event) {
      this.setState({ search_term: event.target.value });
    }
  }, {
    key: 'search',
    value: function search(type) {
      var javascript_side_json = this.props.data;
      var links = [];
      // var javascript_side_json = JSON.stringify(javascript_side_json);

      if ((typeof response === 'undefined' ? 'undefined' : _typeof(response)) == 'object') {
        console.log(javascript_side_json);
        var javascript_side_json = JSON.parse(javascript_side_json);
      }
      var str = this.state.search_term.toLowerCase();
      if (str === "" && str.length === 0) {
        var list = Object.keys(javascript_side_json).filter(function (key) {
          var term = javascript_side_json[key][type].toLowerCase();
          if (term.indexOf(str) !== -1) {
            links.push(javascript_side_json[key]);
            return javascript_side_json[key][type];
          }
        }).map(function (key) {
          return javascript_side_json[key][type];
        });

        return [list, links];
      } else {
        var counter = 0;
        var list = Object.keys(javascript_side_json).filter(function (key) {
          var term = javascript_side_json[key][type].toLowerCase();
          if (term.indexOf(str) !== -1 && counter < 6) {
            links.push(javascript_side_json[key]);
            counter += 1;
            return javascript_side_json[key][type];
          }
        }).map(function (key) {
          return javascript_side_json[key][type];
        });

        return [list, links];
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var list = [];
      var links = [];
      for (var section = 0; section < this.props.section_list.length; section++) {
        list.push(this.search(this.props.section_list[section])[0]);
        links.push(this.search(this.props.section_list[section])[1]);
      }
      //list = [this.search("title")[0], this.search("description")[0]];
      //links = [this.search("title")[1], this.search("description")[1]];
      if (this.state.search_term === "") {
        list[1] = [];
      }
      var input_style = {
        width: '100%',
        margin: '0 auto'
      };

      var divh1 = void 0;
      if (list[0].length > 1) {
        var _divh = { width: "100%", minHeight: "200px" };
      } else {
        var _divh2 = { width: "100%" };
      }

      var searched = this.state.search_term;
      console.log(this.props.section_list[0]);
      var list_of_sections = this.props.section_list;
      var highlight_text = this.props.highlight_color_text;
      var highlight_color = this.props.highlight_color_bg;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: 'form-group', style: { width: "40%", margin: "0 auto" } },
          _react2.default.createElement('label', { htmlFor: 'exampleInputEmail1' }),
          _react2.default.createElement('input', { type: 'email', className: 'form-control', id: 'exampleInputEmail1', 'aria-describedby': 'emailHelp', placeholder: 'Search For Title & Description', onChange: this.onChange.bind(this) }),
          _react2.default.createElement('small', { id: 'emailHelp', className: 'form-text text-muted' })
        ),
        _react2.default.createElement('br', null),
        list_of_sections.map(function (item, index_section) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h1',
              { style: { textAlign: "left" } },
              ' ',
              list_of_sections[index_section],
              ' '
            ),
            _react2.default.createElement(
              'div',
              { style: divh1, className: 'card-group' },
              list[index_section].map(function (a, index) {
                return _react2.default.createElement(
                  'div',
                  { style: { paddingLeft: "7px", paddingRight: "7px" }, key: index },
                  _react2.default.createElement(Item, { title: a, links: links[index_section], index: index, type: list_of_sections[index_section], key: index, searched: searched, highlight_color_bg: highlight_color, highlight_color_text: highlight_text })
                );
              })
            )
          );
        })
      );
    }
  }]);

  return Search;
}(_react2.default.Component);

exports.default = Search;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);