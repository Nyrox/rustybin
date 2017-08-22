"use strict";

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), Header = function(e) {
    function t() {
        return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "render",
        value: function() {
            return React.createElement("div", {
                className: "header"
            }, React.createElement("div", {
                className: "clear-btn icon"
            }, React.createElement("img", {
                src: "public/images/clear.svg"
            })), React.createElement("div", {
                className: "save-btn icon"
            }, React.createElement("img", {
                src: "public/images/save.svg"
            })));
        }
    } ]), t;
}(React.Component), Editor = function(e) {
    function t() {
        return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "render",
        value: function() {
            return React.createElement("div", {
                className: "editor"
            }, React.createElement("textarea", {
                spellCheck: "false",
                onChange: this.onChange
            }));
        }
    } ]), t;
}(React.Component), Application = function(e) {
    function t() {
        return _classCallCheck(this, t), _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "render",
        value: function() {
            return React.createElement("div", null, React.createElement(Header, null), React.createElement(Editor, null));
        }
    } ]), t;
}(React.Component);

ReactDOM.render(React.createElement(Application, null), document.getElementById("react-container"));

for (var textareas = document.getElementsByTagName("textarea"), count = textareas.length, i = 0; i < count; i++) textareas[i].onkeydown = function(e) {
    if (9 == e.keyCode || 9 == e.which) {
        e.preventDefault();
        var t = this.selectionStart;
        this.value = this.value.substring(0, this.selectionStart) + "\t" + this.value.substring(this.selectionEnd), 
        this.selectionEnd = t + 1;
    }
};