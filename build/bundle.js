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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogOut = exports.authLoggedIn = exports.SignInWithGoogle = exports.authInitialized = undefined;
exports.authInitializedDone = authInitializedDone;
exports.authLoggedInSuccess = authLoggedInSuccess;
exports.authLoggedOutSuccess = authLoggedOutSuccess;

var _actionTypes = __webpack_require__(7);

var types = _interopRequireWildcard(_actionTypes);

var _firebaseApi = __webpack_require__(18);

var _firebaseApi2 = _interopRequireDefault(_firebaseApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var authInitialized = exports.authInitialized = function authInitialized(user) {
  return function (dispatch, getState, api) {
    dispatch(authInitializedDone());
    if (user) {
      //grab data from database for user here potentially
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
        dispatch(authLoggedIn(user.uid));
      }).catch(function (error) {});
      return user;
    });
  };
};

var authLoggedIn = exports.authLoggedIn = function authLoggedIn(userUID) {
  return function (dispatch, getState, api) {
    dispatch(authLoggedInSuccess(userUID));
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(23);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NotFoundPage = __webpack_require__(25);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _AdminsListPage = __webpack_require__(26);

var _AdminsListPage2 = _interopRequireDefault(_AdminsListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Route = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AUTH_INITIALIZATION_DONE = exports.AUTH_INITIALIZATION_DONE = 'AUTH_INITIALIZATION_DONE';
var AUTH_LOGGED_OUT_SUCCESS = exports.AUTH_LOGGED_OUT_SUCCESS = 'AUTH_LOGGED_OUT_SUCCESS';
var AUTH_LOGGED_IN_SUCCESS = exports.AUTH_LOGGED_IN_SUCCESS = 'AUTH_LOGGED_IN_SUCCESS';

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(12);

var _express = __webpack_require__(13);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(14);

var _renderer2 = _interopRequireDefault(_renderer);

var _expressHttpProxy = __webpack_require__(29);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _createStore = __webpack_require__(30);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(3);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var session = __webpack_require__(37);
var FileStore = __webpack_require__(38)(session);
var admin = __webpack_require__(39);
var bodyParser = __webpack_require__(40);
var Keys = __webpack_require__(41);
var serviceAccount = Keys.serviceAccount;

var firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
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
  cookie: { maxAge: 604800000, secure: true // week
  } }));
app.use(function (req, res, next) {
  req.firebaseServer = firebase;
  next();
});

app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:3000/'));

app.use(_express2.default.static('public'));

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
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

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

app.listen(3000, function () {
  console.log('listening on port 3000');
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(15);

var _reactRouterDom = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _serializeJavascript = __webpack_require__(28);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(9);

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
  return '<html>\n <head>\n  ' + helmet.title.toString() + '\n' + helmet.meta.toString() + '\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.4/css/materialize.min.css">\n  <link rel="stylesheet" href="styles.css">\n\n </head>\n <body>\n   <div id="root">' + content + '</div>\n   <script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '</script>\n   <script src="bundle.js"></script>\n </body></html>';
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _Header = __webpack_require__(17);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
  /* loadData: ({ dispatch }) => {
   return dispatch(fetchCurrentUser());
  }*/
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _authActions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var auth = _ref.auth,
      LogOut = _ref.LogOut;

  console.log('my auth status is', auth);
  var authButton = auth.isLogged ? _react2.default.createElement(
    'a',
    { onClick: LogOut },
    'Logout'
  ) : _react2.default.createElement(
    'a',
    { href: '/api/auth/google' },
    'Log in'
  );
  return _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      'div',
      { className: 'nav-wrapper' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/', className: 'brand-logo' },
        'Conscientious SSR'
      ),
      _react2.default.createElement(
        'ul',
        { className: 'right' },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/users' },
            'Users'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/admins' },
            'Admins'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          authButton
        )
      )
    )
  );
};

function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { LogOut: _authActions.LogOut })(Header);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // This import loads the firebase namespace along with all its type information.


var _app = __webpack_require__(19);

var firebase = _interopRequireWildcard(_app);

__webpack_require__(20);

__webpack_require__(21);

var _config = __webpack_require__(22);

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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _UserLogin = __webpack_require__(24);

var _UserLogin2 = _interopRequireDefault(_UserLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    'div',
    { className: 'center-align', style: { marginTop: 200 } },
    _react2.default.createElement(
      'h3',
      null,
      ' Welcome'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Check out these awesome features'
    ),
    _react2.default.createElement(_UserLogin2.default, null)
  );
};

exports.default = {
  component: HomePage
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactHelmet = __webpack_require__(9);

var _authActions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserLogin = function (_Component) {
  _inherits(UserLogin, _Component);

  function UserLogin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserLogin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserLogin.__proto__ || Object.getPrototypeOf(UserLogin)).call.apply(_ref, [this].concat(args))), _this), _this.createUser = function (event) {
      event.preventDefault();
      _this.props.SignInWithGoogle().then(function (user) {
        console.log(user, 'User off Google Login');
      }).catch(function (error) {});
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserLogin, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { textAlign: 'center', marginBottom: 10 } },
        _react2.default.createElement(
          'button',
          { style: { cursor: 'pointer' }, onClick: this.createUser },
          'Login with Google'
        )
      );
    }
  }]);

  return UserLogin;
}(_react.Component);

function mapStateToProps(state) {
  return {};
}

function loadData(store) {
  return; //store.dispatch(fetchUsers());
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, { SignInWithGoogle: _authActions.SignInWithGoogle })(UserLogin);

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(5);

var _requireAuth = __webpack_require__(27);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

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
/* 28 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(10);

var _reduxThunk = __webpack_require__(31);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _authActions = __webpack_require__(4);

var _reducers = __webpack_require__(32);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: 'http://localhost:3000/',
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
  if (req.session.decodedToken) {
    store.dispatch((0, _authActions.authLoggedInSuccess)(req.session.decodedToken.user_id));
  }
  return store;
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(10);

var _usersReducer = __webpack_require__(33);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(34);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(36);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _authReducer2.default
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(5);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authReducer;

var _actionTypes = __webpack_require__(7);

var types = _interopRequireWildcard(_actionTypes);

var _initialState = __webpack_require__(35);

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
/* 35 */
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
  ajaxCallsInProgress: 0
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(5);

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
/* 37 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("session-file-store");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 41 */
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
  firedatabaseURL: 'https://motivational-2be93.firebaseio.com'
};

module.exports = Keys;

/***/ })
/******/ ]);