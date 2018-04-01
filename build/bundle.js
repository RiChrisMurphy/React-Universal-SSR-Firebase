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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalTrigger = exports.fetchStockData = exports.FETCH_STOCK_DATA = exports.fetchAdmins = exports.FETCH_ADMINS = exports.fetchCurrentUser = exports.FETCH_CURRENT_USER = exports.fetchUsers = exports.FETCH_USERS = undefined;

var _actionTypes = __webpack_require__(4);

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'FETCH_USERS';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/users');

            case 2:
              res = _context.sent;

              dispatch({
                type: FETCH_USERS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.get('/current_user');

            case 2:
              res = _context2.sent;

              dispatch({
                type: FETCH_CURRENT_USER,
                payload: res
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.get('/admins');

            case 2:
              res = _context3.sent;

              dispatch({
                type: FETCH_ADMINS,
                payload: res
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var FETCH_STOCK_DATA = exports.FETCH_STOCK_DATA = 'FETCH_STOCK_DATA';

var fetchStockData = exports.fetchStockData = function fetchStockData() {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return api.get('/stockdata');

            case 2:
              res = _context4.sent;

              dispatch({
                type: FETCH_STOCK_DATA,
                payload: res
              });

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }();
};

var ModalTrigger = exports.ModalTrigger = function ModalTrigger(trigger) {
  return function (dispatch, getState, api) {
    console.log(trigger, 'trigger at modalTrigger');
    if (trigger) {
      return dispatch({
        type: types.MODAL_TRIGGER_TRUE,
        payload: trigger
      });
    }
    return dispatch({
      type: types.MODAL_TRIGGER_FALSE,
      payload: trigger
    });
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AUTH_INITIALIZATION_DONE = exports.AUTH_INITIALIZATION_DONE = 'AUTH_INITIALIZATION_DONE';
var AUTH_LOGGED_OUT_SUCCESS = exports.AUTH_LOGGED_OUT_SUCCESS = 'AUTH_LOGGED_OUT_SUCCESS';
var AUTH_LOGGED_IN_SUCCESS = exports.AUTH_LOGGED_IN_SUCCESS = 'AUTH_LOGGED_IN_SUCCESS';

var MODAL_TRIGGER_TRUE = exports.MODAL_TRIGGER_TRUE = 'MODAL_TRIGGER_TRUE';
var MODAL_TRIGGER_FALSE = exports.MODAL_TRIGGER_FALSE = 'MODAL_TRIGGER_FALSE';

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-stripe-elements");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogOut = exports.SignInWithGoogle = exports.authInitialized = undefined;
exports.authInitializedDone = authInitializedDone;
exports.authLoggedInSuccess = authLoggedInSuccess;
exports.authLoggedOutSuccess = authLoggedOutSuccess;

var _actionTypes = __webpack_require__(4);

var types = _interopRequireWildcard(_actionTypes);

var _firebaseApi = __webpack_require__(22);

var _firebaseApi2 = _interopRequireDefault(_firebaseApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var authInitialized = exports.authInitialized = function authInitialized(user) {
  return function (dispatch, getState, api) {
    dispatch(authInitializedDone());
    if (user) {
      //dispatch(authLoggedInSuccess(user.uid));
    } else {
      dispatch(authLoggedOutSuccess());
    }
  };
};

function authInitializedDone() {
  return {
    type: types.AUTH_INITIALIZATION_DONE
  };
}

function authLoggedInSuccess(userUID) {
  return {
    type: types.AUTH_LOGGED_IN_SUCCESS,
    payload: { userUID: userUID }
  };
}

function authLoggedOutSuccess() {
  return { type: types.AUTH_LOGGED_OUT_SUCCESS };
}

var SignInWithGoogle = exports.SignInWithGoogle = function SignInWithGoogle() {
  return function (dispatch, getState, api) {
    return _firebaseApi2.default.LoginWithGoogle().then(function (user) {
      user.getIdToken(true).then(function (idToken) {
        api.post('/login', {
          token: idToken
        });
      }).then(function (response) {
        dispatch(authLoggedInSuccess(user.uid));
      }).catch(function (error) {});
      return user;
    });
  };
};

var LogOut = exports.LogOut = function LogOut() {
  return function (dispatch, getState, api) {
    _firebaseApi2.default.Logout().then(function () {
      api.post('/logout').then(function () {
        dispatch(authLoggedOutSuccess());
      });
    });
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  auth: {
    isLogged: false,
    currentUserUID: null,
    initialized: false
  },
  ajaxCallsInProgress: 0,
  modalIsOpen: false,
  stockdata: null
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(20);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(30);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NotFoundPage = __webpack_require__(35);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminsListPage = __webpack_require__(36);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

var _ProductPage = __webpack_require__(37);

var _ProductPage2 = _interopRequireDefault(_ProductPage);

var _BabaStockPage = __webpack_require__(40);

var _BabaStockPage2 = _interopRequireDefault(_BabaStockPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Route = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _ProductPage2.default, {
    path: '/details',
    exact: true
  }), _extends({}, _BabaStockPage2.default, {
    path: '/baba',
    exact: true
  }), _extends({}, _NotFoundPage2.default)]
})];

exports.default = Route;
/*{
 ...AdminsListPage,
 path: '/admins'
 {
  ...UsersListPage,
  path: '/users'
 },
},*/

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStripeElements = __webpack_require__(5);

var _CheckoutForm = __webpack_require__(31);

var _CheckoutForm2 = _interopRequireDefault(_CheckoutForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyStoreCheckout = function (_Component) {
  _inherits(MyStoreCheckout, _Component);

  function MyStoreCheckout() {
    _classCallCheck(this, MyStoreCheckout);

    return _possibleConstructorReturn(this, (MyStoreCheckout.__proto__ || Object.getPrototypeOf(MyStoreCheckout)).apply(this, arguments));
  }

  _createClass(MyStoreCheckout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactStripeElements.Elements,
        null,
        _react2.default.createElement(_CheckoutForm2.default, null)
      );
    }
  }]);

  return MyStoreCheckout;
}(_react.Component);

exports.default = MyStoreCheckout;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
  var RequireAuth = function (_Component) {
    _inherits(RequireAuth, _Component);

    function RequireAuth() {
      _classCallCheck(this, RequireAuth);

      return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
    }

    _createClass(RequireAuth, [{
      key: 'render',
      value: function render() {
        switch (this.props.auth) {
          case false:
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
          case null:
            return _react2.default.createElement(
              'div',
              null,
              'Loading'
            );
          default:
            return _react2.default.createElement(ChildComponent, this.props);
        }
      }
    }]);

    return RequireAuth;
  }(_react.Component);

  function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return { auth: auth };
  }
  return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(10);
module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(17);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(18);

var _renderer2 = _interopRequireDefault(_renderer);

var _expressHttpProxy = __webpack_require__(43);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _createStore = __webpack_require__(44);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(6);

var _Routes = __webpack_require__(11);

var _Routes2 = _interopRequireDefault(_Routes);

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _stripe = __webpack_require__(52);

var _stripe2 = _interopRequireDefault(_stripe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var session = __webpack_require__(53);
var FileStore = __webpack_require__(54)(session);
var admin = __webpack_require__(55);
var bodyParser = __webpack_require__(56);
var Keys = __webpack_require__(57);

var stripe = (0, _stripe2.default)(Keys.stripeSecretDev);

//

var newWorld = {};
var GetStockData = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios2.default.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=' + Keys.alphAvantage, { Authorization: Keys.alphAvantage }).then(function (response) {
              return response.data['Time Series (Daily)'];
            });

          case 2:
            res = _context.sent;

            newWorld = res;
            return _context.abrupt('return', res);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function GetStockData() {
    return _ref.apply(this, arguments);
  };
}();

GetStockData();
setInterval(GetStockData, 60000);

var firebase = admin.initializeApp({
  credential: admin.credential.cert(Keys.serviceAccount),
  databaseURL: Keys.firedatabaseURL
});

var app = (0, _express2.default)();

app.use(bodyParser.json());
app.use(session({
  secret: Keys.sessionSecret,
  saveUninitialized: true,
  store: new FileStore({ path: '/tmp/sessions', secret: Keys.sessionSecret }),
  resave: false,
  rolling: true,
  httpOnly: true,
  cookie: { maxAge: 1, secure: true // week
  } }));
/*app.use((req, res, next) => {
 req.firebaseServer = firebase;
 next();
});*/

app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:3000/'));

app.use(_express2.default.static('public'));

app.get('/stockdata', function (req, res) {
  res.json(newWorld);
});

app.post('/pay', function (req, res) {
  if (!req.body) return res.sendStatus(400);
  if (!req.session.decodedToken) {
    return res.status(401).send({ message: 'HELLO WORLD' });
  }
  if (!req.body.stripetoken) return res.sendStatus(400);
  var token = req.body.stripetoken.id;
  stripe.charges.create({
    amount: 3000,
    currency: 'usd',
    source: token, // obtained with Stripe.js
    description: 'Charge for Title Turner\'s Title Naming service for'
  }, function (err, charge) {
    if (err) {
      res.status(200).json(err);
    }
    res.status(200).json(charge);
  });
});

app.post('/login', function (req, res) {
  if (!req.body) return res.sendStatus(400);
  var token = req.body.token;
  firebase.auth().verifyIdToken(token).then(function (decodedToken) {
    req.session.decodedToken = decodedToken;
    return decodedToken;
  }).then(function (decodedToken) {
    res.json({ status: true, decodedToken: decodedToken });
  }).catch(function (error) {
    return res.json({ error: error });
  });
});

app.post('/logout', function (req, res) {
  req.session.decodedToken = null;
  res.json({ status: true });
});

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref2) {
    var route = _ref2.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });
  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('listening on port 3000');
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(6);

var _reactRedux = __webpack_require__(1);

var _Routes = __webpack_require__(11);

var _Routes2 = _interopRequireDefault(_Routes);

var _serializeJavascript = __webpack_require__(41);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));
  var helmet = _reactHelmet.Helmet.renderStatic();
  return '<html>\n <head>\n  ' + helmet.title.toString() + '\n' + helmet.meta.toString() + '\n<meta charset="utf-8">\n   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">\n<link rel="stylesheet" href="styles.css">\n </head>\n <body>\n   <div id="root">' + content + '</div>\n   <script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '</script>\n   <script src="https://js.stripe.com/v3/"></script>\n\n   <script src="bundle.js"></script>\n\n\n</body></html>';
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(6);

var _Header = __webpack_require__(21);

var _Header2 = _interopRequireDefault(_Header);

var _reactStripeElements = __webpack_require__(5);

var _footer = __webpack_require__(28);

var _footer2 = _interopRequireDefault(_footer);

var _clientKeys = __webpack_require__(29);

var _clientKeys2 = _interopRequireDefault(_clientKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { stripe: null };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ stripe: window.Stripe(_clientKeys2.default.stripePublicDev) });
    }
  }, {
    key: 'render',
    value: function render() {
      var route = this.props.route;

      return _react2.default.createElement(
        _reactStripeElements.StripeProvider,
        { stripe: this.state.stripe },
        _react2.default.createElement(
          'div',
          { className: 'Avenir' },
          _react2.default.createElement(_Header2.default, null),
          (0, _reactRouterConfig.renderRoutes)(route.routes),
          _react2.default.createElement(_footer2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = {
  component: App
  /* loadData: ({ dispatch }) => {
   return dispatch(fetchCurrentUser());
  }*/
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _authActions = __webpack_require__(7);

var _reactMotion = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.createUser = function (event) {
      event.preventDefault();
      _this.props.SignInWithGoogle().then(function (user) {
        console.log(user, 'User off Google Login');
      }).catch(function (error) {});
    };

    _this.renderBugerMenu = function () {
      var style = {
        overflow: 'visible',
        cursor: 'pointer',
        // disable touch highlighting on devices
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      };
      return _react2.default.createElement(
        'svg',
        {
          viewBox: '0 0 96 96',
          height: '2em',
          onClick: _this.handleClick.bind(_this),
          style: style
        },
        _react2.default.createElement(
          _reactMotion.Motion,
          {
            style: {
              x: (0, _reactMotion.spring)(_this.state.toggle ? 1 : 0, _reactMotion.presets.wobbly),
              y: (0, _reactMotion.spring)(_this.state.toggle ? 0 : 1, _reactMotion.presets.wobbly)
            }
          },
          function (_ref) {
            var x = _ref.x,
                y = _ref.y;
            return _react2.default.createElement(
              'g',
              {
                id: 'navicon',
                fill: 'none',
                stroke: '#000',
                strokeWidth: '10',
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
              },
              _react2.default.createElement('line', {
                transform: 'translate(' + x * 12 + ', ' + x * -7 + ') rotate(' + x * 45 + ', 7, 26)',
                x1: '7',
                y1: '26',
                x2: '89',
                y2: '26'
              }),
              _react2.default.createElement('line', {
                transform: 'translate(' + x * 12 + ', ' + x * 7 + ') rotate(' + x * -45 + ', 7, 70)',
                x1: '7',
                y1: '70',
                x2: '89',
                y2: '70'
              }),
              _react2.default.createElement('line', {
                transform: 'translate(' + x * -96 + ')',
                opacity: y,
                x1: '7',
                y1: '48',
                x2: '89',
                y2: '48'
              })
            );
          }
        )
      );
    };

    _this.state = {
      toggle: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ toggle: !this.state.toggle });
    }
  }, {
    key: 'renderListMenu',
    value: function renderListMenu() {
      var _props = this.props,
          auth = _props.auth,
          LogOut = _props.LogOut;

      var authButton = auth.isLogged ? _react2.default.createElement(
        'a',
        {
          className: 'f4 fw6 db white link hover-light-purple text-center ba',
          onClick: LogOut
        },
        'Logout'
      ) : _react2.default.createElement(
        'a',
        {
          className: 'f4 fw6 db white link hover-light-purple text-center ba',
          onClick: this.createUser,
          href: '/api/auth/google'
        },
        'Log in'
      );

      if (this.state.toggle) {
        return _react2.default.createElement(
          'div',
          { className: 'dt w-100 mw8 center relative' },
          _react2.default.createElement(
            'div',
            { className: 'absolute right-0' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              {
                className: 'f4 fw6 db white link hover-light-purple text-center ba',
                to: '/users'
              },
              'About'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              {
                className: 'f4 fw6 db white link hover-light-purple text-center ba',
                to: '/admins'
              },
              'Blog'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              {
                className: 'f4 fw6 db white link hover-light-purple text-center ba',
                to: '/admins'
              },
              'Contact'
            ),
            authButton
          )
        );
      }
      return _react2.default.createElement(
        'div',
        null,
        ' '
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          auth = _props2.auth,
          LogOut = _props2.LogOut;

      var authButton = auth.isLogged ? _react2.default.createElement(
        'a',
        {
          className: 'f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba',
          onClick: LogOut
        },
        'Logout'
      ) : _react2.default.createElement(
        'a',
        {
          className: 'f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba',
          onClick: this.createUser
        },
        'Log in'
      );

      return _react2.default.createElement(
        'div',
        { style: { backgroundColor: '#26e08f' } },
        _react2.default.createElement(
          'nav',
          { className: 'dt w-100 mw8 center' },
          _react2.default.createElement(
            'div',
            { className: 'dtc w2 v-mid pa2' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              {
                to: '/',
                className: 'dib w3.5 h2.3 bg-white grow-large border-box ba bw1 b--black'
              },
              _react2.default.createElement(
                'svg',
                {
                  version: '1.0',
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '80pt',
                  height: '38.12pt',
                  viewBox: '0 0 1938.000000 920.000000',
                  preserveAspectRatio: 'xMidYMid meet'
                },
                _react2.default.createElement(
                  'g',
                  {
                    transform: 'translate(0.000000,920.000000) scale(0.100000,-0.100000)',
                    fill: '#000000',
                    stroke: 'none'
                  },
                  _react2.default.createElement('path', { d: 'M7145 8604 c-11 -2 -45 -9 -75 -15 -205 -41 -431 -197 -553 -382\n-186 -280 -201 -643 -40 -937 127 -232 365 -407 621 -456 82 -16 276 -18 335\n-5 l39 9 54 -114 53 -114 -44 -115 c-82 -211 -143 -451 -182 -710 -28 -189\n-25 -650 5 -845 29 -181 53 -292 98 -444 19 -65 34 -122 32 -126 -2 -5 -25\n-31 -51 -59 l-48 -51 -87 26 c-115 34 -278 36 -395 5 -255 -67 -463 -281 -523\n-538 -25 -106 -16 -294 20 -398 81 -239 284 -422 528 -480 81 -19 245 -19 326\n0 232 55 424 218 513 436 38 94 52 169 52 281 l0 97 61 -89 c142 -208 382\n-471 579 -633 151 -124 223 -232 252 -377 8 -37 21 -253 31 -508 10 -243 21\n-448 26 -455 21 -34 28 27 38 303 16 471 14 653 -9 742 -40 157 -79 212 -313\n448 -295 298 -487 567 -642 902 l-45 98 185 200 c102 110 187 200 188 200 1 0\n36 -12 77 -27 68 -25 86 -27 224 -28 137 0 157 3 230 27 116 40 199 92 292\n185 l83 83 452 -169 453 -169 6 -138 c3 -77 11 -159 17 -184 83 -337 327 -591\n657 -682 115 -31 345 -31 460 0 182 50 360 167 476 312 66 82 149 241 174 335\n23 84 31 277 15 372 -50 311 -258 575 -550 698 -246 104 -545 87 -783 -44\n-115 -64 -268 -203 -314 -286 -8 -13 -80 11 -470 156 l-460 171 -6 87 c-25\n339 -257 613 -578 682 -62 13 -222 17 -259 7 -25 -7 -29 0 -219 409 l-193 417\n17 31 c39 67 168 255 231 335 94 118 360 382 474 470 161 124 327 228 515 320\n289 143 541 222 865 272 123 19 186 22 415 22 292 0 404 -12 658 -69 509 -114\n1002 -389 1388 -775 182 -182 274 -323 332 -505 37 -118 53 -205 103 -554 24\n-173 49 -333 55 -355 11 -43 89 -193 366 -703 164 -304 204 -399 190 -453 -4\n-16 -117 -125 -303 -295 -232 -210 -301 -279 -316 -312 -17 -39 -19 -84 -26\n-575 l-7 -533 -25 -50 c-51 -105 -138 -173 -257 -202 -105 -25 -806 -25 -983\n0 -419 61 -777 184 -1109 382 -69 40 -97 53 -105 45 -14 -15 11 -35 184 -152\n243 -163 567 -305 861 -377 269 -65 487 -90 864 -98 314 -6 362 0 484 60 97\n47 208 160 253 257 20 41 41 96 47 121 10 42 31 397 46 769 3 80 8 168 11 197\nl5 52 288 245 c184 156 300 262 319 291 39 59 67 177 57 243 -17 120 -44 184\n-291 677 l-255 510 -34 285 c-55 443 -94 618 -181 809 -107 233 -375 529 -699\n771 -549 411 -1205 630 -1887 630 -529 0 -986 -108 -1449 -341 -309 -156 -538\n-321 -795 -571 l-111 -109 13 63 c17 81 17 222 0 318 -32 180 -107 328 -236\n463 -123 130 -217 189 -393 249 -82 28 -106 31 -232 34 -77 2 -149 1 -160 -2z\nm288 -413 c83 -29 144 -68 208 -133 168 -173 190 -446 50 -644 -186 -264 -550\n-297 -777 -70 -246 247 -185 650 125 815 118 62 269 75 394 32z m435 -2223\nl121 -262 -57 -61 c-111 -118 -171 -268 -179 -445 -6 -144 11 -233 69 -350 23\n-47 42 -88 42 -92 2 -14 -197 -219 -205 -211 -4 4 -17 53 -28 108 -84 415 -79\n862 15 1265 30 129 85 310 94 310 3 0 61 -118 128 -262z m751 -503 c120 -60\n181 -153 189 -284 7 -137 -54 -244 -180 -312 -58 -31 -70 -34 -148 -34 -71 0\n-94 5 -140 27 -98 46 -158 120 -186 227 -11 43 -14 82 -10 115 17 133 123 253\n253 286 63 16 165 5 222 -25z m2372 -685 c150 -28 294 -140 362 -280 85 -175\n69 -362 -46 -523 -53 -74 -114 -122 -213 -169 -67 -32 -73 -33 -199 -33 -129\n0 -131 0 -205 36 -94 46 -148 89 -205 164 -152 202 -131 480 51 663 121 121\n288 173 455 142z m-3759 -907 c66 -30 133 -95 165 -162 23 -47 27 -70 28 -141\n0 -102 -27 -170 -94 -237 -132 -131 -340 -131 -472 0 -65 64 -93 135 -94 232\n0 113 40 197 125 265 90 71 236 90 342 43z' }),
                  _react2.default.createElement('path', { d: 'M4065 2209 c-33 -4 -177 -6 -319 -4 l-259 3 -28 -29 c-43 -46 -53\n-112 -40 -254 7 -66 13 -137 14 -157 4 -78 52 -76 84 5 16 40 20 72 19 137 -1\n47 4 99 10 117 22 58 111 84 218 64 93 -17 100 -28 90 -136 -4 -49 -8 -135 -7\n-190 4 -232 8 -341 16 -352 4 -7 3 -21 -3 -32 -6 -12 -9 -71 -8 -141 3 -120 3\n-122 -23 -144 -17 -14 -47 -26 -80 -30 -54 -7 -95 -23 -85 -33 3 -4 -4 -11\n-17 -17 -15 -8 -23 -22 -25 -47 -7 -81 68 -93 328 -56 96 14 189 23 206 20 47\n-7 81 19 89 69 9 52 -6 67 -76 74 -108 11 -133 27 -144 95 -4 21 -11 41 -15\n44 -10 6 -11 104 -1 120 12 21 8 131 -6 158 -12 24 -12 38 -3 76 9 37 8 79 -3\n187 -9 84 -12 173 -8 224 l6 85 60 22 c77 28 140 29 183 3 35 -22 41 -52 17\n-84 -19 -25 -19 -69 0 -105 8 -16 17 -47 21 -70 4 -26 12 -41 21 -41 8 0 21\n-16 29 -35 8 -19 18 -35 23 -35 23 0 43 15 57 42 13 26 15 55 9 182 -8 173\n-17 221 -47 237 -26 14 -162 39 -208 37 -19 0 -62 -4 -95 -9z' }),
                  _react2.default.createElement('path', { d: 'M9715 2210 c-33 -5 -177 -7 -319 -5 l-259 3 -28 -27 c-45 -46 -53\n-96 -40 -251 7 -74 12 -149 11 -166 0 -37 21 -58 48 -50 26 9 67 117 55 143\n-5 10 -7 53 -4 96 5 70 9 81 34 103 45 39 98 49 185 37 105 -15 115 -28 105\n-137 -8 -84 -8 -114 -1 -555 4 -254 3 -265 -16 -294 -18 -27 -30 -32 -89 -42\n-37 -6 -72 -16 -79 -23 -7 -7 -8 -12 -2 -12 5 0 -2 -6 -16 -13 -26 -13 -36\n-43 -26 -83 4 -16 17 -26 44 -33 55 -16 110 -13 287 14 87 13 177 22 200 19\n53 -6 82 17 91 73 6 42 6 43 -29 58 -20 8 -58 15 -84 15 -27 0 -58 7 -69 15\n-37 25 -87 229 -59 238 13 5 16 126 3 151 -10 18 -19 209 -22 454 l-1 122 55\n22 c148 57 272 12 214 -77 -18 -28 -16 -54 12 -152 12 -41 24 -63 36 -66 11\n-3 21 -18 24 -36 8 -37 34 -41 64 -11 30 30 32 53 22 229 -11 191 -18 208 -98\n228 -68 18 -178 23 -249 13z' }),
                  _react2.default.createElement('path', { d: 'M5788 2163 c-42 -46 -48 -67 -48 -172 0 -55 -5 -111 -11 -125 -12\n-25 -63 -51 -81 -40 -9 6 -31 -2 -125 -41 -55 -24 -52 -50 9 -105 46 -41 61\n-49 108 -54 30 -4 68 -12 84 -18 28 -11 28 -12 22 -77 -4 -36 -8 -82 -9 -101\n-2 -19 -8 -44 -14 -55 -6 -11 -13 -60 -16 -110 -4 -75 -2 -95 14 -127 10 -20\n19 -50 19 -66 0 -32 34 -82 55 -82 15 0 25 -22 25 -53 0 -14 19 -38 51 -66\nl51 -44 108 7 c137 8 224 34 268 79 39 41 96 211 96 292 1 45 -2 51 -28 64\n-37 17 -75 7 -138 -40 -55 -40 -64 -60 -48 -100 7 -16 10 -35 7 -43 -8 -21\n-55 -43 -109 -51 -43 -7 -50 -5 -76 21 -19 20 -37 57 -55 114 -30 98 -37 153\n-38 301 -2 177 24 201 232 209 117 4 140 8 158 24 32 29 23 58 -24 80 -29 13\n-77 21 -175 26 -74 5 -142 11 -150 14 -37 15 -53 71 -56 197 -3 132 -16 169\n-57 169 -13 0 -35 -12 -49 -27z' }),
                  _react2.default.createElement('path', { d: 'M6760 2159 c-19 -5 -82 -6 -140 -3 -104 6 -106 6 -138 -21 -37 -31\n-45 -87 -14 -103 17 -9 212 -24 286 -22 22 0 45 5 51 10 23 19 40 -40 40 -143\n0 -82 3 -101 18 -111 16 -13 16 -15 -2 -57 -19 -42 -19 -57 -10 -264 16 -397\n19 -378 -48 -411 -31 -15 -67 -19 -183 -22 -80 -2 -149 -8 -154 -13 -5 -4 -11\n-30 -12 -56 -1 -26 -4 -54 -6 -62 -2 -9 13 -19 42 -28 44 -14 90 -13 315 4 28\n2 80 3 117 3 53 0 69 3 76 17 9 14 13 15 26 4 10 -9 30 -12 56 -8 26 3 57 -1\n90 -14 60 -23 120 -24 184 -5 67 20 86 40 86 91 0 73 -49 95 -159 72 -46 -9\n-78 -11 -116 -4 -42 8 -59 7 -85 -7 -55 -27 -60 -23 -58 47 0 34 -6 110 -14\n170 -13 90 -13 113 -2 145 8 26 10 51 4 76 -5 21 -4 51 1 71 7 24 6 48 -2 77\n-11 35 -18 216 -19 452 -1 94 -107 147 -230 115z' }),
                  _react2.default.createElement('path', { d: 'M4903 2153 c-30 -6 -89 -76 -97 -115 -11 -54 -7 -94 12 -111 30 -27\n89 -47 141 -47 64 0 103 31 127 102 15 46 15 53 1 84 -26 53 -123 99 -184 87z' }),
                  _react2.default.createElement('path', { d: 'M7909 1820 c-72 -11 -231 -73 -244 -95 -5 -9 -26 -34 -47 -55 -63\n-67 -89 -168 -91 -350 -1 -87 32 -192 86 -272 33 -49 61 -75 127 -120 47 -31\n101 -59 120 -62 101 -17 127 -18 197 -6 83 13 206 67 273 120 42 34 66 86 55\n127 -6 24 -8 25 -74 21 l-68 -3 -73 -68 -73 -67 -81 6 c-44 3 -101 12 -126 20\n-95 30 -193 132 -207 216 -5 35 -4 37 33 48 57 16 438 32 483 20 59 -16 97\n-12 140 17 36 24 41 31 42 67 1 23 0 46 -1 51 -1 6 -2 30 -2 53 -1 25 -7 46\n-14 49 -6 2 -22 31 -34 64 -28 74 -89 129 -205 183 -88 41 -133 49 -216 36z\nm134 -161 c34 -11 82 -31 106 -45 24 -13 49 -24 57 -24 15 0 20 -16 29 -92 6\n-56 6 -58 -20 -68 -24 -9 -206 -15 -375 -13 -74 2 -138 20 -154 45 -8 13 -6\n28 5 60 12 33 26 48 61 68 25 14 61 35 79 47 19 13 44 23 56 23 12 0 25 5 28\n10 10 16 61 12 128 -11z' }),
                  _react2.default.createElement('path', { d: 'M14044 1820 c-73 -10 -236 -72 -243 -93 -4 -8 -20 -26 -37 -40 -94\n-79 -137 -339 -84 -506 29 -91 85 -180 136 -215 137 -93 144 -97 252 -112 66\n-10 185 14 270 54 133 62 187 117 180 185 -3 31 -5 32 -52 35 -74 5 -90 -2\n-167 -73 l-71 -65 -86 7 c-48 3 -104 12 -126 19 -80 29 -167 111 -195 187 -19\n49 -14 63 27 76 51 17 437 33 482 21 45 -13 108 -13 123 0 7 6 22 18 35 28 19\n14 23 26 22 77 0 97 -4 125 -18 134 -7 4 -21 32 -31 62 -25 70 -88 127 -200\n180 -95 45 -130 51 -217 39z m129 -161 c34 -11 82 -31 107 -44 25 -13 52 -25\n61 -28 19 -6 35 -135 18 -152 -9 -9 -104 -14 -349 -17 -111 -1 -174 13 -193\n44 -8 11 -7 28 3 58 11 34 22 46 50 58 19 8 50 27 68 43 18 16 45 31 60 34 15\n4 34 10 42 15 25 15 67 11 133 -11z' }),
                  _react2.default.createElement('path', { d: 'M12100 1805 c-14 -7 -47 -17 -75 -20 -27 -4 -74 -20 -102 -36 -29\n-16 -59 -29 -67 -29 -7 0 -19 -7 -26 -15 -21 -25 -52 -13 -81 30 -16 23 -39\n42 -55 47 -16 4 -87 5 -158 1 -141 -7 -166 -17 -166 -68 0 -55 65 -83 166 -71\n50 6 55 4 71 -21 33 -51 38 -530 6 -580 -21 -31 -74 -53 -131 -53 -59 0 -112\n-36 -112 -76 0 -43 59 -55 159 -32 45 10 53 9 71 -7 18 -16 25 -17 60 -6 30 9\n55 9 105 0 82 -14 117 -7 113 24 -2 17 3 23 21 25 13 2 28 -1 34 -7 6 -6 25\n-11 42 -11 26 0 32 5 42 37 14 45 11 50 -23 34 -25 -11 -26 -10 -21 10 11 42\n-1 49 -77 49 -106 0 -116 10 -116 116 0 47 -5 105 -11 130 -11 43 -10 48 35\n139 44 88 82 135 110 135 7 0 22 13 34 30 30 40 69 58 122 58 l45 -1 0 -46 c1\n-61 10 -92 35 -119 18 -19 31 -22 94 -22 l74 0 31 47 c17 25 31 52 31 59 0 8\n-10 37 -23 66 -13 29 -27 65 -31 81 -8 35 -74 83 -139 102 -60 18 -56 18 -87\n0z' }),
                  _react2.default.createElement('path', { d: 'M15380 1805 c-14 -7 -47 -17 -75 -20 -27 -4 -74 -20 -102 -36 -29\n-16 -59 -29 -67 -29 -7 0 -19 -7 -26 -15 -21 -25 -52 -13 -81 30 -16 23 -39\n42 -55 47 -16 4 -87 5 -158 1 -141 -7 -166 -17 -166 -68 0 -55 65 -83 166 -71\n50 6 55 4 71 -21 33 -51 38 -530 6 -580 -21 -32 -74 -53 -135 -53 -46 0 -58\n-4 -81 -28 -69 -72 -3 -112 132 -80 45 10 53 9 71 -7 18 -16 25 -17 60 -6 30\n9 55 9 105 0 82 -14 117 -7 113 24 -2 17 3 23 21 25 13 2 28 -1 34 -7 6 -6 25\n-11 42 -11 26 0 32 5 42 37 14 45 11 50 -23 34 -25 -11 -26 -10 -21 10 11 42\n-1 49 -77 49 -106 0 -116 10 -116 116 0 47 -5 105 -11 130 -11 43 -10 48 35\n139 44 88 82 135 110 135 7 0 22 13 34 30 30 40 69 58 122 58 l45 -1 0 -46 c1\n-61 10 -92 35 -119 18 -19 31 -22 94 -22 l74 0 31 47 c17 25 31 52 31 59 0 8\n-10 37 -23 66 -13 29 -27 65 -31 81 -8 35 -74 83 -139 102 -60 18 -56 18 -87\n0z' }),
                  _react2.default.createElement('path', { d: 'M10255 1799 c-66 -8 -113 -33 -121 -63 -15 -62 37 -106 127 -106 39\n0 61 -5 70 -16 23 -28 27 -115 16 -346 -10 -209 -9 -228 7 -250 9 -12 31 -44\n48 -70 18 -28 39 -48 49 -48 10 0 27 -13 39 -30 20 -28 25 -30 89 -30 82 0\n150 19 255 72 43 22 85 37 92 34 8 -3 24 -21 35 -40 24 -41 53 -52 157 -60 81\n-7 115 4 151 50 31 39 27 78 -11 118 -28 29 -40 35 -74 34 -46 0 -81 18 -91\n47 -11 34 -6 250 6 287 8 25 9 48 2 79 -6 24 -11 100 -11 169 0 169 0 169\n-128 168 -156 0 -222 -22 -222 -74 0 -40 39 -73 95 -80 75 -9 92 -24 99 -86 5\n-45 13 -173 18 -284 1 -17 -8 -50 -20 -73 -25 -48 -85 -111 -105 -111 -8 0\n-22 -9 -32 -20 -10 -11 -30 -20 -44 -20 -14 -1 -37 -7 -51 -15 -35 -20 -109\n-18 -150 4 -42 22 -80 83 -80 131 0 19 7 60 15 90 11 43 13 96 9 240 -3 102\n-7 199 -10 217 -9 60 -112 97 -229 82z' }),
                  _react2.default.createElement('path', { d: 'M12990 1791 c-19 -11 -44 -24 -55 -29 -12 -6 -37 -25 -56 -43 -41\n-41 -87 -79 -94 -79 -2 0 -11 24 -20 54 -19 66 -35 81 -103 95 -71 15 -126 14\n-166 -3 -74 -31 -47 -132 41 -151 46 -9 81 -41 92 -83 10 -36 13 -197 8 -399\n-2 -118 -10 -131 -78 -140 -58 -7 -79 -27 -79 -74 0 -48 18 -65 83 -79 75 -15\n273 -14 322 2 34 11 41 19 49 51 12 46 4 56 -85 101 l-64 32 3 49 c1 28 -5 70\n-15 97 -13 37 -14 51 -5 60 7 7 12 37 12 67 0 77 37 171 66 171 6 0 16 11 22\n25 7 14 20 28 29 32 10 3 34 21 53 39 60 55 192 74 243 34 33 -26 51 -96 48\n-180 -6 -119 -6 -304 -1 -370 l5 -65 -52 -1 c-123 -3 -153 -21 -129 -77 17\n-42 33 -51 111 -67 45 -8 81 -8 145 0 47 6 110 12 140 14 30 1 61 5 68 9 19\n13 14 72 -9 102 -19 23 -27 26 -56 20 -28 -5 -38 -2 -63 24 -30 29 -38 55 -21\n65 5 4 7 41 5 84 -2 42 1 133 7 202 10 109 9 131 -5 164 -9 21 -16 53 -16 71\n0 36 -46 111 -91 149 -39 33 -88 46 -179 46 -55 0 -84 -5 -110 -19z' }),
                  _react2.default.createElement('path', { d: 'M4630 1760 c-61 -9 -90 -35 -90 -80 0 -39 17 -49 116 -65 83 -13 94\n-13 166 5 53 14 84 17 100 11 51 -19 52 -25 55 -310 2 -146 1 -276 -2 -288 -9\n-40 -39 -47 -220 -48 -181 -1 -215 -8 -215 -46 0 -31 75 -116 110 -124 41 -9\n149 14 170 37 16 18 27 19 102 13 82 -7 87 -6 193 34 129 49 166 52 192 15 12\n-16 34 -28 63 -35 25 -5 55 -15 68 -21 49 -25 112 31 98 87 -3 13 -16 27 -29\n31 -12 4 -41 20 -64 36 -56 38 -88 43 -184 28 -78 -12 -81 -12 -102 9 -20 20\n-22 32 -24 184 -3 194 -8 245 -28 267 -14 15 -14 20 0 46 22 43 19 105 -8 145\n-38 58 -73 68 -253 73 -87 3 -184 1 -214 -4z' }),
                  _react2.default.createElement('path', { d: 'M0 75 l0 -75 9680 0 9680 0 0 75 0 75 -9680 0 -9680 0 0 -75z' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'dtc v-mid tr pa1' },
            this.renderBugerMenu(),
            this.renderListMenu()
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);
/*<nav className="navbar navbar-expand-lg navbar-dark bg-purple">
 <div className="container">
  <Link to="/" className="navbar-brand">
   SSR
  </Link>
  <button
   className="navbar-toggler navbar-toggler-right"
   type="button"
   data-toggle="collapse"
   data-target="#navbarNavAltMarkup"
   aria-controls="navbarNavAltMarkup"
   aria-expanded="false"
   aria-label="Toggle navigation"
  >
   <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
   <div className="navbar-nav ml-md-auto">
    <Link className="nav-item nav-link ml-md-auto" to="/users">
     Users
    </Link>
    <Link className="nav-item nav-link ml-md-auto" to="/admins">
     Admins
    </Link>
    {authButton}
   </div>
  </div>
 </div>
</nav>*/


function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { LogOut: _authActions.LogOut, SignInWithGoogle: _authActions.SignInWithGoogle })(Header);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // This import loads the firebase namespace along with all its type information.


var _app = __webpack_require__(23);

var firebase = _interopRequireWildcard(_app);

__webpack_require__(24);

__webpack_require__(25);

var _config = __webpack_require__(26);

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FirebaseApi = function () {
  function FirebaseApi() {
    _classCallCheck(this, FirebaseApi);
  }

  _createClass(FirebaseApi, null, [{
    key: 'initAuth',
    value: function initAuth() {
      firebase.initializeApp(_config.config);
      return new Promise(function (resolve, reject) {
        var unsub = firebase.auth().onAuthStateChanged(function (user) {
          //console.log(unsub(), 'unsub?');
          //unsub();
          resolve(user);
        }, function (error) {
          return reject(error);
        });
      });
    }
  }, {
    key: 'LoginWithGoogle',
    value: function LoginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      return firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        return user;
      }).catch(function (error) {
        throw error;
      });
    }
  }, {
    key: 'Logout',
    value: function Logout() {
      return firebase.auth().signOut();
    }
    /*static LoginWithFacebook(callback) {
     const provider = new firebase.auth.FacebookAuthProvider();
     provider.addScope('public_profile');
      return firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
       const token = result.credential.accessToken;
       // The signed-in user info.
       const user = result.user;
       console.log(token, "token", user, "user")
       //callback(user, token);
      })
      .catch(function(error) {
       throw error;
      });
    }
    */

  }, {
    key: 'authSignOut',
    value: function authSignOut() {
      return firebase.auth().signOut();
    }
  }]);

  return FirebaseApi;
}();

exports.default = FirebaseApi;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var prodConfig = {
  apiKey: 'AIzaSyAA9GyyuFo_nXcovqeH46WrMlM_3tA8dKM',
  authDomain: 'motivational-2be93.firebaseapp.com',
  databaseURL: 'https://motivational-2be93.firebaseio.com',
  projectId: 'motivational-2be93',
  storageBucket: 'motivational-2be93.appspot.com',
  messagingSenderId: '377610427017'
};

var devConfig = {
  apiKey: 'AIzaSyAA9GyyuFo_nXcovqeH46WrMlM_3tA8dKM',
  authDomain: 'motivational-2be93.firebaseapp.com',
  databaseURL: 'https://motivational-2be93.firebaseio.com',
  projectId: 'motivational-2be93',
  storageBucket: 'motivational-2be93.appspot.com',
  messagingSenderId: '377610427017'
};

var config = exports.config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    "footer",
    { className: "pv4 ph3 ph5-m ph6-l mid-gray" },
    _react2.default.createElement(
      "small",
      { className: "f6 db tc" },
      "\xA9 2016 ",
      _react2.default.createElement(
        "b",
        { className: "ttu" },
        "Title Turner Inc"
      ),
      "., All Rights Reserved"
    ),
    _react2.default.createElement(
      "div",
      { className: "tc mt3" },
      _react2.default.createElement(
        "a",
        {
          href: "/language/",
          title: "Language",
          className: "f6 dib ph2 link mid-gray dim"
        },
        "Language"
      ),
      _react2.default.createElement(
        "a",
        { href: "/terms/", title: "Terms", className: "f6 dib ph2 link mid-gray dim" },
        "Terms of Use"
      ),
      _react2.default.createElement(
        "a",
        {
          href: "/privacy/",
          title: "Privacy",
          className: "f6 dib ph2 link mid-gray dim"
        },
        "Privacy"
      )
    )
  );
};

exports.default = Footer;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var clientKeys = {
  stripePublicDev: 'pk_test_heMWKCgyCzouaPOCJatrymU5'
};

exports.default = clientKeys;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _MyStoreCheckout = __webpack_require__(12);

var _MyStoreCheckout2 = _interopRequireDefault(_MyStoreCheckout);

var _book = __webpack_require__(34);

var _book2 = _interopRequireDefault(_book);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    'div',
    {
      style: {
        backgroundImage: 'url(' + _book2.default + ')',
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    },
    _react2.default.createElement(
      'div',
      { className: 'bg-black-80 h-100' },
      _react2.default.createElement(
        'section',
        { className: 'mw5 mw7-ns center pa3 ph5-ns text-center' },
        _react2.default.createElement(
          'h1',
          { className: 'f2 f1-l fw2 white-90 mb0 lh-title' },
          'WE MAKE YOUR TITLE GREAT'
        ),
        _react2.default.createElement(
          'h2',
          { className: 'fw1 f3 white-80 mt3 mb4' },
          'Best titles for the best people'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            className: 'f12 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3',
            to: '/details'
          },
          'Call to Action'
        )
      )
    )
  );
};

exports.default = {
  component: HomePage
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStripeElements = __webpack_require__(5);

var _stripeActions = __webpack_require__(32);

var _reactRedux = __webpack_require__(1);

var _CardSection = __webpack_require__(33);

var _CardSection2 = _interopRequireDefault(_CardSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckoutForm = function (_React$Component) {
  _inherits(CheckoutForm, _React$Component);

  function CheckoutForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckoutForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckoutForm.__proto__ || Object.getPrototypeOf(CheckoutForm)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (ev) {
      // We don't want to let default form submission happen here, which would refresh the page.
      ev.preventDefault();

      // Within the context of `Elements`, this call to createToken knows which Element to
      // tokenize, since there's only one in this group.
      _this.props.stripe.createToken({ name: 'Jenny Rosen' }).then(function (_ref2) {
        var token = _ref2.token;

        console.log(token, 'at checkoutform');
        _this.props.PayWithStripe(token);
      });

      // However, this line of code will do the same thing:
      // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckoutForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Checkout' },
        _react2.default.createElement(
          'form',
          { className: 'StripeForm', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'label',
            { className: 'StripeLabel' },
            'Enter Card',
            _react2.default.createElement(_CardSection2.default, null)
          ),
          _react2.default.createElement(
            'button',
            { className: 'StripeButton' },
            'Confirm order'
          )
        )
      );
    }
  }]);

  return CheckoutForm;
}(_react2.default.Component);

function mapStateToProps(_ref3) {
  var auth = _ref3.auth;

  return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { PayWithStripe: _stripeActions.PayWithStripe })((0, _reactStripeElements.injectStripe)(CheckoutForm));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PayWithStripe = exports.PayWithStripe = function PayWithStripe(token) {
  return function (dispatch, getState, api) {
    return api.post('/pay', {
      stripetoken: token
    }).then(function (response) {
      return response.data;
    }).catch(function (error) {
      return error.response.data;
    });
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStripeElements = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  base: {
    iconColor: '#001d87',
    color: '#003a87',
    fontWeight: 500,
    fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
    fontSize: '16px',
    fontSmoothing: 'antialiased',
    backgroundColor: '#7795f8',

    ':-webkit-autofill': {
      color: '#fce883'
    },
    '::placeholder': {
      color: '#87BBFD'
    }
  },
  invalid: {
    iconColor: '#FFC7EE',
    color: '#FFC7EE'
  }
};

var CardSection = function (_React$Component) {
  _inherits(CardSection, _React$Component);

  function CardSection() {
    _classCallCheck(this, CardSection);

    return _possibleConstructorReturn(this, (CardSection.__proto__ || Object.getPrototypeOf(CardSection)).apply(this, arguments));
  }

  _createClass(CardSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'label',
        null,
        _react2.default.createElement(_reactStripeElements.CardElement, { style: style })
      );
    }
  }]);

  return CardSection;
}(_react2.default.Component);

exports.default = CardSection;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "99ba5c5f428a91b6254458ab757b7b68.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    'h1',
    null,
    ' Oops, route not found'
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(2);

var _requireAuth = __webpack_require__(13);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminsListPage = function (_Component) {
  _inherits(AdminsListPage, _Component);

  function AdminsListPage() {
    _classCallCheck(this, AdminsListPage);

    return _possibleConstructorReturn(this, (AdminsListPage.__proto__ || Object.getPrototypeOf(AdminsListPage)).apply(this, arguments));
  }

  _createClass(AdminsListPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchAdmins();
    }
  }, {
    key: 'renderAdmins',
    value: function renderAdmins() {
      return this.props.admins.map(function (admin) {
        return _react2.default.createElement(
          'li',
          { key: admin.id },
          admin.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          ' Protected List of Admins'
        ),
        this.renderAdmins()
      );
    }
  }]);

  return AdminsListPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var admins = _ref.admins;

  return { admins: admins };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })((0, _requireAuth2.default)(AdminsListPage))
  //loadData: ({ dispatch }) => dispatch(fetchAdmins())
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _authActions = __webpack_require__(7);

var _MyStoreCheckout = __webpack_require__(12);

var _MyStoreCheckout2 = _interopRequireDefault(_MyStoreCheckout);

var _modal = __webpack_require__(38);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookGenres = ['Science fiction', 'Satire', 'Drama', 'Action and Adventure', 'Romance', 'Mystery', 'Horror', 'Self help', 'Health', 'Guide', 'Travel', "Children's", 'Religion, Spirituality & New Age', 'Science', 'History', 'Math', 'Anthology', 'Poetry', 'Encyclopedias', 'Dictionaries', 'Comics', 'Art', 'Cookbooks', 'Diaries', 'Journals', 'Prayer books', 'Series', 'Trilogy', 'Biographies', 'Autobiographies', 'Fantasy'];

var ProductPage = function (_Component) {
  _inherits(ProductPage, _Component);

  function ProductPage() {
    _classCallCheck(this, ProductPage);

    return _possibleConstructorReturn(this, (ProductPage.__proto__ || Object.getPrototypeOf(ProductPage)).apply(this, arguments));
  }

  _createClass(ProductPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          auth = _props.auth,
          SignInWithGoogle = _props.SignInWithGoogle;
      //const InLoggedIn = auth ? StripeModal : SignInWithGoogle;

      return _react2.default.createElement(
        'div',
        { className: 'detailsPage', style: { minHeight: 300 } },
        _react2.default.createElement(
          'div',
          { className: 'fl w-100' },
          _react2.default.createElement(
            'form',
            { id: 'paper', className: 'mw9 mw7-ns center' },
            _react2.default.createElement(
              'div',
              { id: 'margin' },
              'Details'
            ),
            _react2.default.createElement('textarea', {
              className: 'fl w-100',
              placeholder: 'Please enter synopsis',
              id: 'text',
              name: 'text',
              rows: '8',
              style: {
                overflow: 'hidden',
                wordWrap: 'break-word',
                resize: 'none',
                height: '160px'
              }
            })
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'mw5 mw7-ns center tc' },
          _react2.default.createElement(
            'h1',
            { className: 'mt0' },
            'Centered Container'
          ),
          _react2.default.createElement(
            _modal2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'fl w-100' },
              _react2.default.createElement(_MyStoreCheckout2.default, null)
            )
          )
        )
      );
    }
  }]);

  return ProductPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var auth = _ref.auth;

  return { auth: auth };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { SignInWithGoogle: _authActions.SignInWithGoogle })(ProductPage)
  //loadData: ({ dispatch }) => dispatch(fetchAdmins())
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(39);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactRedux = __webpack_require__(1);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: 700
  }
};

var ModalApp = function (_Component) {
  _inherits(ModalApp, _Component);

  function ModalApp() {
    _classCallCheck(this, ModalApp);

    return _possibleConstructorReturn(this, (ModalApp.__proto__ || Object.getPrototypeOf(ModalApp)).apply(this, arguments));
  }

  _createClass(ModalApp, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isModalOpen = _props.isModalOpen,
          ModalTrigger = _props.ModalTrigger,
          buttonInline = _props.buttonInline,
          buttonClass = _props.buttonClass;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            className: '' + buttonClass,
            style: { buttonInline: buttonInline },
            onClick: function onClick() {
              return ModalTrigger(true);
            }
          },
          'Open Modal'
        ),
        _react2.default.createElement(
          _reactModal2.default,
          {
            isOpen: isModalOpen,
            style: customStyles,
            contentLabel: 'Modal',
            ariaHideApp: false,
            onRequestClose: function onRequestClose() {
              return ModalTrigger(false);
            }
          },
          this.props.children
        )
      );
    }
  }]);

  return ModalApp;
}(_react.Component);

function mapStateToProps(_ref) {
  var isModalOpen = _ref.isModalOpen;

  return { isModalOpen: isModalOpen };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, { ModalTrigger: _index.ModalTrigger })(ModalApp);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _index = __webpack_require__(2);

var _requireAuth = __webpack_require__(13);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BabaStockPage = function (_Component) {
  _inherits(BabaStockPage, _Component);

  function BabaStockPage() {
    _classCallCheck(this, BabaStockPage);

    return _possibleConstructorReturn(this, (BabaStockPage.__proto__ || Object.getPrototypeOf(BabaStockPage)).apply(this, arguments));
  }

  _createClass(BabaStockPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //this.props.fetchStockData();
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props.stockData);
      return _react2.default.createElement('div', null);
    }
  }]);

  return BabaStockPage;
}(_react.Component);

function mapStateToProps(_ref) {
  var stockData = _ref.stockData;

  return { stockData: stockData };
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchStockData: _index.fetchStockData })(BabaStockPage),
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;
    return dispatch((0, _index.fetchStockData)());
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _reduxThunk = __webpack_require__(45);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _authActions = __webpack_require__(7);

var _reducers = __webpack_require__(46);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'http://localhost:3000/',
    headers: {
      cookie: req.get('cookie') || ''
    }
  });
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
  if (req.session.decodedToken) {
    console.log(req.session.decodedToken.user_id, 'user id');
    store.dispatch((0, _authActions.authLoggedInSuccess)(req.session.decodedToken.user_id));
  }
  return store;
};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(14);

var _usersReducer = __webpack_require__(47);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(48);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(49);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

var _modalReducer = __webpack_require__(50);

var _modalReducer2 = _interopRequireDefault(_modalReducer);

var _stockReducer = __webpack_require__(51);

var _stockReducer2 = _interopRequireDefault(_stockReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _authReducer2.default,
  isModalOpen: _modalReducer2.default,
  stockData: _stockReducer2.default
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authReducer;

var _actionTypes = __webpack_require__(4);

var types = _interopRequireWildcard(_actionTypes);

var _initialState = __webpack_require__(9);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.auth;
  var action = arguments[1];

  switch (action.type) {
    case types.AUTH_INITIALIZATION_DONE:
      return Object.assign({}, state, { initialized: true });

    case types.AUTH_LOGGED_IN_SUCCESS:
      return Object.assign({}, state, {
        isLogged: true,
        currentUserUID: action.payload.userUID
      });

    case types.AUTH_LOGGED_OUT_SUCCESS:
      return Object.assign({}, state, {
        isLogged: false,
        currentUserUID: null
      });
    default:
      return state;
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modalReducer;

var _actionTypes = __webpack_require__(4);

var types = _interopRequireWildcard(_actionTypes);

var _initialState = __webpack_require__(9);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function modalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.modalIsOpen;
  var action = arguments[1];

  switch (action.type) {
    case types.MODAL_TRIGGER_TRUE:
      return true;
    case types.MODAL_TRIGGER_FALSE:
      return false;
    default:
      return state;
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stockReducer;

var _actions = __webpack_require__(2);

var _initialState = __webpack_require__(9);

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stockReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.stockdata;
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_STOCK_DATA:
      return action.payload.data;
    default:
      return state;
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("stripe");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("session-file-store");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Keys = {
  serviceAccount: {
    type: 'service_account',
    project_id: 'motivational-2be93',
    private_key_id: '0237960d21600536aa3d73d2fded703632855443',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLLe9ypfSvSGO6\nqES0GOYV6C5oMFIr3iCDbzuWaRp8TyMHU4/I6z32ytNPVTE1VXyJqg1MfxUo6B27\nUhhMopjV20ojnherdheTq4bSXIqxB/UO7aOhaoPIQNaWjtyTB87IZOiJFs+ZGupU\ncuHnMKJ5jpxb2JYeJn4UlpsTod+Xt0BRTINIMNltv9IVZNaR6XZ849fXwLEk/YGC\nxRZRG4PGRdaNCg1e7mTlrrw5/OJ582T316tmjenxddQj35JX+9tjxkgfy56wmPFa\nAqU/CdNjfOTx8ed+Po8D211VoEiOf1kPUMbcS58qfMkU/OpoQVPDHLaOHntXeO6V\ndknJt9DbAgMBAAECggEAATYwFYrIJ5wdaCQPwNPd2hHtO5bU2Ukfqtj+IyVTpfEi\nNYLPOooDRRZW5e639pL2GqtmcpHWx6HWvOK+SAViNvLyAWi0cxknBoJBMWj233EQ\n35AVkpAG4tSsKEVdgGJNXo7nf3B2OCSxHWQlVRJ1Auzm9s9Br0Kt1s6XydQEeCxP\nW8cn4s5j5/mOPh83ex1MsiTFYdhDOijdlbtAXFlRVaC1IG0iG6HPU08nUK87at2b\nDb3oSa1b/9QOKzOcWcm9xCdImUA/htT11q9jvSN9DeS2Rq8q8eXv51Hfts2/Z2ke\nn+vQTqexDPMFsGrFr4zdEwlAN57g3iyWPDEBM2noUQKBgQD+ou9MnCAQVuCFUThN\nR368Yw0QekUhZru2r3MZwhLpcBDQYS10R/d3P1FgodUCVMnrbzBAzFhovrcFXm23\nZYiz5jl4covQxlYZkJbNhuirlW2MO8l/sP8MeLHKordVnD01g5pla8sWuHtOzBaT\nu1CkooKo24uWEGC7vueL/+BrSwKBgQDMRHYbE9AguxYtpWpCHUF58nNrJrHFZVVI\nTj3yxuuNmYlalH5BCQt61fnS6ZCAVyVhEh9fhV7fgYd2ET4vLqaJe8VN9kYsLyeo\nT/xSg+hC9L/euqumh8j5Qn4oCL3M9hBVvI0TE7WsKQiXlOgElodBQqrq9P6nBGwZ\ncBwTbhGmsQKBgQD8bvagkh5PVHEceVpBcmE3zVJERZKG/FuXTfPjUzyAY3Knwc7X\n+ghgFUtNauHKf9f1KLNDadEzde3myqgmKegNwGy09YmaHSV6DpcRhW7fuzFw1kx5\n5DPUX0qSQiFSI6Oii6biaKxbB+RmR3kSV54ouFqjn5KP4Ail1ymg5rfKZQKBgFBH\ns9dOgSTsAnpsIYfccahY1m3NZl67RbpGLeilr1wWdLop1DkBMgbT4/y1mPonxeQR\nuEzVYQUcpj2L51Gp1v//qfrLCKdC3SY0UWmot/bgtCv4V4/6m80DCgv364iLSL45\nfYR64ZLJCbxxZIKxGnVWm0/+e7rubQHOYupr/vnxAoGADyVJGq1N+TXwpn2fS8IV\nAs7Xljx9UIeJhJmyMhpM2VepQJYVYNb2LlZWz/7vTfX6r4ejGM5bgqCFKuxQkyk2\nYUq1NTvUnC65KLtzqaBF1sNiQACf4ODhC+kWN4o6npQjkfX3C9Ncb5jeNWPocIkp\npJYVhX22mPPw9Ui69rQmrRU=\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-ttl6y@motivational-2be93.iam.gserviceaccount.com',
    client_id: '103525277987882750376',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://accounts.google.com/o/oauth2/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ttl6y%40motivational-2be93.iam.gserviceaccount.com'
  },
  sessionSecret: 'iud2481270ad',
  firedatabaseURL: 'https://motivational-2be93.firebaseio.com',
  stripeSecretDev: 'sk_test_T8iDII7DalRWI7SClEZjJgJd',
  alphAvantage: 'XBEY6WV6KHPQ1NIB'
};

module.exports = Keys;

/***/ })
/******/ ]);