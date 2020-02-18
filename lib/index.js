'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React$2 = require('react');
var React$2__default = _interopDefault(React$2);
var Snackbar$2 = _interopDefault(require('@material-ui/core/Snackbar'));
var styles$2 = require('@material-ui/core/styles');
var lab$2 = require('@material-ui/lab');
var Box$2 = _interopDefault(require('@material-ui/core/Box'));
var AppBar$2 = _interopDefault(require('@material-ui/core/AppBar'));
var Toolbar$2 = _interopDefault(require('@material-ui/core/Toolbar'));
var Typography$2 = _interopDefault(require('@material-ui/core/Typography'));
var InputBase$2 = _interopDefault(require('@material-ui/core/InputBase'));
var icons$2 = require('@material-ui/icons');
var Button$2 = _interopDefault(require('@material-ui/core/Button'));
var colors$2 = require('@material-ui/core/colors');
var core$2 = require('@material-ui/core');
var Backdrop$2 = _interopDefault(require('@material-ui/core/Backdrop'));
var CircularProgress$2 = _interopDefault(require('@material-ui/core/CircularProgress'));
var TableContainer$2 = _interopDefault(require('@material-ui/core/TableContainer'));
var Paper$2 = _interopDefault(require('@material-ui/core/Paper'));
var Table$2 = _interopDefault(require('@material-ui/core/Table'));
var TableHead$2 = _interopDefault(require('@material-ui/core/TableHead'));
var TableBody$2 = _interopDefault(require('@material-ui/core/TableBody'));
var TableRow$2 = _interopDefault(require('@material-ui/core/TableRow'));
var TableCell$2 = _interopDefault(require('@material-ui/core/TableCell'));
var Link$2 = _interopDefault(require('@material-ui/core/Link'));
var reactRouterDom$1 = require('react-router-dom');

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault$1(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React$1 = require('react');

var React$1__default = _interopDefault$1(React$1);

var Snackbar$1 = _interopDefault$1(require('@material-ui/core/Snackbar'));

var styles$1 = require('@material-ui/core/styles');

var lab$1 = require('@material-ui/lab');

var Box$1 = _interopDefault$1(require('@material-ui/core/Box'));

var AppBar$1 = _interopDefault$1(require('@material-ui/core/AppBar'));

var Toolbar$1 = _interopDefault$1(require('@material-ui/core/Toolbar'));

var Typography$1 = _interopDefault$1(require('@material-ui/core/Typography'));

var InputBase$1 = _interopDefault$1(require('@material-ui/core/InputBase'));

var icons$1 = require('@material-ui/icons');

var Button$1 = _interopDefault$1(require('@material-ui/core/Button'));

var colors$1 = require('@material-ui/core/colors');

var core$1 = require('@material-ui/core');

var Backdrop$1 = _interopDefault$1(require('@material-ui/core/Backdrop'));

var CircularProgress$1 = _interopDefault$1(require('@material-ui/core/CircularProgress'));

var TableContainer$1 = _interopDefault$1(require('@material-ui/core/TableContainer'));

var Paper$1 = _interopDefault$1(require('@material-ui/core/Paper'));

var Table$1 = _interopDefault$1(require('@material-ui/core/Table'));

var TableHead$1 = _interopDefault$1(require('@material-ui/core/TableHead'));

var TableBody$1 = _interopDefault$1(require('@material-ui/core/TableBody'));

var TableRow$1 = _interopDefault$1(require('@material-ui/core/TableRow'));

var TableCell$1 = _interopDefault$1(require('@material-ui/core/TableCell'));

var Link$1 = _interopDefault$1(require('@material-ui/core/Link'));

var reactRouterDom = require('react-router-dom');

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault$1$1(ex) {
  return ex && _typeof$1(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = require('react');

var React__default = _interopDefault$1$1(React);

var Snackbar = _interopDefault$1$1(require('@material-ui/core/Snackbar'));

var styles = require('@material-ui/core/styles');

var lab = require('@material-ui/lab');

var Box = _interopDefault$1$1(require('@material-ui/core/Box'));

var AppBar = _interopDefault$1$1(require('@material-ui/core/AppBar'));

var Toolbar = _interopDefault$1$1(require('@material-ui/core/Toolbar'));

var Typography = _interopDefault$1$1(require('@material-ui/core/Typography'));

var InputBase = _interopDefault$1$1(require('@material-ui/core/InputBase'));

var icons = require('@material-ui/icons');

var Button = _interopDefault$1$1(require('@material-ui/core/Button'));

var colors = require('@material-ui/core/colors');

var core = require('@material-ui/core');

var Backdrop = _interopDefault$1$1(require('@material-ui/core/Backdrop'));

var CircularProgress = _interopDefault$1$1(require('@material-ui/core/CircularProgress'));

var TableContainer = _interopDefault$1$1(require('@material-ui/core/TableContainer'));

var Paper = _interopDefault$1$1(require('@material-ui/core/Paper'));

var Table = _interopDefault$1$1(require('@material-ui/core/Table'));

var TableHead = _interopDefault$1$1(require('@material-ui/core/TableHead'));

var TableBody = _interopDefault$1$1(require('@material-ui/core/TableBody'));

var TableRow = _interopDefault$1$1(require('@material-ui/core/TableRow'));

var TableCell = _interopDefault$1$1(require('@material-ui/core/TableCell'));

var Link = _interopDefault$1$1(require('@material-ui/core/Link'));

function _defineProperty$1$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1$1(Object(source), true).forEach(function (key) {
        _defineProperty$1$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray$1$1(arr, i) {
  return _arrayWithHoles$1$1(arr) || _iterableToArrayLimit$1$1(arr, i) || _nonIterableRest$1$1();
}

function _arrayWithHoles$1$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1$1(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest$1$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var useStyles = styles.makeStyles(function (theme) {
  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  };
});

function Alerta(_ref) {
  var titulo = _ref.titulo,
      tipo = _ref.tipo,
      texto = _ref.texto;
  var classes = useStyles();

  var _useState = React.useState(true),
      _useState2 = _slicedToArray$1$1(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return React__default.createElement("div", {
    className: classes.root
  }, React__default.createElement(Snackbar, {
    open: open,
    autoHideDuration: 5000,
    onClose: handleClose
  }, React__default.createElement(lab.Alert, {
    severity: tipo ? tipo : 'error',
    onClose: handleClose
  }, titulo && React__default.createElement(lab.AlertTitle, null, titulo), texto)));
}

var theme = styles.createMuiTheme({
  palette: {
    "default": {
      main: colors.grey[50]
    }
  }
});
var useStyles$1 = styles.makeStyles(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: _defineProperty$1$1({
      flexGrow: 1,
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: _defineProperty$1$1({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: styles.fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: styles.fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: _defineProperty$1$1({
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: 120,
      '&:focus': {
        width: 200
      }
    })
  };
});

function BarraContexto(_ref) {
  var titulo = _ref.titulo,
      acoes = _ref.acoes,
      buscar = _ref.buscar,
      limparBusca = _ref.limparBusca;
  var classes = useStyles$1();

  var _useState = React.useState(''),
      _useState2 = _slicedToArray$1$1(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray$1$1(_useState3, 2),
      buscou = _useState4[0],
      setBuscou = _useState4[1];

  return React__default.createElement("div", {
    className: classes.root
  }, React__default.createElement(styles.ThemeProvider, {
    theme: theme
  }, React__default.createElement(AppBar, {
    position: "static",
    color: "primary"
  }, React__default.createElement(Toolbar, null, React__default.createElement(Typography, {
    className: classes.title,
    variant: "h6",
    noWrap: true
  }, titulo), acoes && acoes.map(function (acao, i) {
    var link = acao.link,
        texto = acao.texto,
        tipo = acao.tipo,
        icone = acao.icone,
        click = acao.click;
    return React__default.createElement("span", {
      key: i
    }, i > 0 && React__default.createElement(Box, {
      ml: 1,
      component: "span"
    }), React__default.createElement(Button, {
      variant: tipo ? tipo : 'contained',
      color: "default",
      key: i,
      onClick: function onClick() {
        return click();
      },
      href: link
    }, icone, "\xA0", texto));
  }), buscar && React__default.createElement("div", {
    className: classes.search
  }, React__default.createElement("div", {
    className: classes.searchIcon
  }, React__default.createElement(icons.Search, null)), React__default.createElement("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();

      if (search.length >= 3) {
        buscar({
          variables: {
            search: "%".concat(search, "%")
          }
        });
        setBuscou(true);
      }
    }
  }, React__default.createElement(InputBase, {
    placeholder: "Buscar...",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'busca'
    },
    value: search,
    onChange: function onChange(event) {
      return setSearch(event.target.value);
    }
  }), buscou && React__default.createElement(Button, {
    style: {
      color: '#fff'
    },
    onClick: function onClick() {
      limparBusca();
      setSearch('');
      setBuscou(false);
    }
  }, React__default.createElement(icons.Cancel, null))))))), React__default.createElement(Box, {
    m: 4
  }));
}

function Formulario(_ref) {
  var campos = _ref.campos,
      dados = _ref.dados,
      setDados = _ref.setDados,
      dadosIniciais = _ref.dadosIniciais,
      HandleSubmit = _ref.HandleSubmit,
      path = _ref.path;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(core.Grid, {
    container: true,
    spacing: 3
  }, React__default.createElement(core.Grid, {
    item: true,
    lg: 6,
    md: 8,
    xs: 12
  }, React__default.createElement(core.Paper, null, React__default.createElement(core.Box, {
    p: 3
  }, React__default.createElement("form", {
    autoComplete: "new-password",
    onSubmit: HandleSubmit
  }, campos.map(function (campo, i) {
    var name = campo.name,
        label = campo.label,
        type = campo.type,
        required = campo.required,
        options = campo.options;
    var input = '';

    if (type === 'text') {
      input = React__default.createElement(core.TextField, {
        id: name,
        required: required,
        label: label,
        type: "text",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2$1$1({}, dados, _defineProperty$1$1({}, name, value)));
        }
      });
    }

    if (type === 'email') {
      input = React__default.createElement(core.TextField, {
        id: name,
        required: required,
        label: label,
        type: "email",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2$1$1({}, dados, _defineProperty$1$1({}, name, value)));
        }
      });
    }

    if (type === 'password') {
      input = React__default.createElement(core.TextField, {
        id: name,
        required: required,
        label: label,
        type: "password",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2$1$1({}, dados, _defineProperty$1$1({}, name, value)));
        }
      });
    }

    if (type === 'switch') {
      input = React__default.createElement(core.FormControlLabel, {
        control: React__default.createElement(core.Switch, {
          checked: dados[name] ? true : false,
          onChange: function onChange(event) {
            var checked = event.target.checked;
            setDados(_objectSpread2$1$1({}, dados, _defineProperty$1$1({}, name, checked)));
          }
        }),
        label: label
      });
    }

    if (type === 'checkbox') {
      var _dados = dados;
      input = React__default.createElement(React__default.Fragment, null, React__default.createElement(core.FormControl, null, React__default.createElement(core.FormLabel, null, label), React__default.createElement(core.FormGroup, null, Array.isArray(options) && options.map(function (option, i) {
        var value = option.value,
            text = option.text;
        return React__default.createElement(core.FormControlLabel, {
          key: i,
          control: React__default.createElement(core.Checkbox, {
            checked: _dados[name][value],
            value: value,
            name: name,
            onChange: function onChange(event) {
              var checked = event.target.checked;
              setDados(_objectSpread2$1$1({}, dados, _defineProperty$1$1({}, name, _objectSpread2$1$1({}, dados[name], _defineProperty$1$1({}, value, checked)))));
            }
          }),
          label: text
        });
      }))));
    }

    return React__default.createElement(core.Box, {
      key: i,
      mb: 2
    }, input);
  }), React__default.createElement(core.Button, {
    size: "large",
    color: "primary",
    variant: "contained",
    type: "submit",
    startIcon: React__default.createElement(icons.Save, null),
    disabled: JSON.stringify(dados) === JSON.stringify(dadosIniciais)
  }, "Salvar"), React__default.createElement(core.Box, {
    ml: 1,
    component: "span"
  }), React__default.createElement(core.Button, {
    size: "large",
    color: "default",
    variant: "text",
    href: path,
    startIcon: React__default.createElement(icons.Cancel, null)
  }, "Cancelar")))))));
}

var useStyles$2 = styles.makeStyles(function (theme) {
  return {
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    }
  };
});

function SimpleBackdrop() {
  var classes = useStyles$2();
  return React__default.createElement(Backdrop, {
    className: classes.backdrop,
    open: true
  }, React__default.createElement(CircularProgress, {
    color: "inherit"
  }));
}

function TabelaContainer(_ref) {
  var colunas = _ref.colunas,
      children = _ref.children;
  return React__default.createElement(TableContainer, {
    component: Paper
  }, React__default.createElement(Table, null, colunas && React__default.createElement(TableHead, null, React__default.createElement(TableRow, null, colunas.map(function (coluna, i) {
    var titulo = coluna.titulo;

    if (titulo) {
      return React__default.createElement(TableCell, {
        key: i
      }, titulo);
    } else {
      return React__default.createElement(TableCell, {
        key: i
      }, coluna);
    }
  }))), React__default.createElement(TableBody, null, children)));
}

var useStyles$3 = styles.makeStyles({
  link: {
    display: 'block'
  }
});

function TabelaSimples(_ref) {
  var registros = _ref.registros,
      colunas = _ref.colunas,
      link = _ref.link,
      sufixo = _ref.sufixo,
      target = _ref.target;
  var classes = useStyles$3();
  return React__default.createElement(React__default.Fragment, null, registros && React__default.createElement(TabelaContainer, {
    colunas: colunas
  }, registros.length === 0 ? React__default.createElement(TableRow, null, React__default.createElement(TableCell, {
    colSpan: colunas.length
  }, "Nenhum registro encontrado")) : registros.map(function (registro, i) {
    return React__default.createElement(TableRow, {
      key: i
    }, colunas.map(function (coluna, j) {
      var parametro = coluna.parametro,
          idLink = coluna.idLink;
      return React__default.createElement(TableCell, {
        key: j
      }, link && idLink && React__default.createElement(Link, {
        className: classes.link,
        href: link + '/' + registro[idLink] + sufixo,
        target: target,
        rel: "noopener"
      }, registro[parametro]), !link && registro[parametro]);
    }));
  })));
}

exports.Alerta = Alerta;
exports.BarraContexto = BarraContexto;
exports.Formulario = Formulario;
exports.PreLoader = SimpleBackdrop;
exports.TabelaContainer = TabelaContainer;
exports.TabelaSimples = TabelaSimples;
var useStyles$4 = styles$1.makeStyles(function (theme) {
  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  };
});

function Alerta$1(_ref) {
  var titulo = _ref.titulo,
      tipo = _ref.tipo,
      texto = _ref.texto;
  var classes = useStyles$4();

  var _useState = React$1.useState(true),
      _useState2 = _slicedToArray$1(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return React$1__default.createElement("div", {
    className: classes.root
  }, React$1__default.createElement(Snackbar$1, {
    open: open,
    autoHideDuration: 5000,
    onClose: handleClose
  }, React$1__default.createElement(lab$1.Alert, {
    severity: tipo ? tipo : 'error',
    onClose: handleClose
  }, titulo && React$1__default.createElement(lab$1.AlertTitle, null, titulo), texto)));
}

var theme$1 = styles$1.createMuiTheme({
  palette: {
    "default": {
      main: colors$1.grey[50]
    }
  }
});
var useStyles$5 = styles$1.makeStyles(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: _defineProperty$1({
      flexGrow: 1,
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: _defineProperty$1({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: styles$1.fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: styles$1.fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: _defineProperty$1({
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: 120,
      '&:focus': {
        width: 200
      }
    })
  };
});

function BarraContexto$1(_ref) {
  var titulo = _ref.titulo,
      acoes = _ref.acoes,
      buscar = _ref.buscar,
      limparBusca = _ref.limparBusca;
  var classes = useStyles$5();

  var _useState = React$1.useState(''),
      _useState2 = _slicedToArray$1(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = React$1.useState(false),
      _useState4 = _slicedToArray$1(_useState3, 2),
      buscou = _useState4[0],
      setBuscou = _useState4[1];

  return React$1__default.createElement("div", {
    className: classes.root
  }, React$1__default.createElement(styles$1.ThemeProvider, {
    theme: theme$1
  }, React$1__default.createElement(AppBar$1, {
    position: "static",
    color: "primary"
  }, React$1__default.createElement(Toolbar$1, null, React$1__default.createElement(Typography$1, {
    className: classes.title,
    variant: "h6",
    noWrap: true
  }, titulo), acoes && acoes.map(function (acao, i) {
    var link = acao.link,
        texto = acao.texto,
        tipo = acao.tipo,
        icone = acao.icone,
        click = acao.click;
    return React$1__default.createElement("span", {
      key: i
    }, i > 0 && React$1__default.createElement(Box$1, {
      ml: 1,
      component: "span"
    }), React$1__default.createElement(Button$1, {
      variant: tipo ? tipo : 'contained',
      color: "default",
      key: i,
      onClick: function onClick() {
        return click();
      },
      href: link
    }, icone, "\xA0", texto));
  }), buscar && React$1__default.createElement("div", {
    className: classes.search
  }, React$1__default.createElement("div", {
    className: classes.searchIcon
  }, React$1__default.createElement(icons$1.Search, null)), React$1__default.createElement("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();

      if (search.length >= 3) {
        buscar({
          variables: {
            search: "%".concat(search, "%")
          }
        });
        setBuscou(true);
      }
    }
  }, React$1__default.createElement(InputBase$1, {
    placeholder: "Buscar...",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'busca'
    },
    value: search,
    onChange: function onChange(event) {
      return setSearch(event.target.value);
    }
  }), buscou && React$1__default.createElement(Button$1, {
    style: {
      color: '#fff'
    },
    onClick: function onClick() {
      limparBusca();
      setSearch('');
      setBuscou(false);
    }
  }, React$1__default.createElement(icons$1.Cancel, null))))))), React$1__default.createElement(Box$1, {
    m: 4
  }));
}

function Formulario$1(_ref) {
  var campos = _ref.campos,
      dados = _ref.dados,
      setDados = _ref.setDados,
      dadosIniciais = _ref.dadosIniciais,
      HandleSubmit = _ref.HandleSubmit,
      path = _ref.path;
  return React$1__default.createElement(React$1__default.Fragment, null, React$1__default.createElement(core$1.Grid, {
    container: true,
    spacing: 3
  }, React$1__default.createElement(core$1.Grid, {
    item: true,
    lg: 6,
    md: 8,
    xs: 12
  }, React$1__default.createElement(core$1.Paper, null, React$1__default.createElement(core$1.Box, {
    p: 3
  }, React$1__default.createElement("form", {
    autoComplete: "new-password",
    onSubmit: HandleSubmit
  }, campos.map(function (campo, i) {
    var name = campo.name,
        label = campo.label,
        type = campo.type,
        required = campo.required,
        options = campo.options;
    var input = '';

    if (type === 'text') {
      input = React$1__default.createElement(core$1.TextField, {
        id: name,
        required: required,
        label: label,
        type: "text",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2$1({}, dados, _defineProperty$1({}, name, value)));
        }
      });
    }

    if (type === 'email') {
      input = React$1__default.createElement(core$1.TextField, {
        id: name,
        required: required,
        label: label,
        type: "email",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2$1({}, dados, _defineProperty$1({}, name, value)));
        }
      });
    }

    if (type === 'password') {
      input = React$1__default.createElement(core$1.TextField, {
        id: name,
        required: required,
        label: label,
        type: "password",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2$1({}, dados, _defineProperty$1({}, name, value)));
        }
      });
    }

    if (type === 'switch') {
      input = React$1__default.createElement(core$1.FormControlLabel, {
        control: React$1__default.createElement(core$1.Switch, {
          checked: dados[name] ? true : false,
          onChange: function onChange(event) {
            var checked = event.target.checked;
            setDados(_objectSpread2$1({}, dados, _defineProperty$1({}, name, checked)));
          }
        }),
        label: label
      });
    }

    if (type === 'checkbox') {
      var _dados = dados;
      input = React$1__default.createElement(React$1__default.Fragment, null, React$1__default.createElement(core$1.FormControl, null, React$1__default.createElement(core$1.FormLabel, null, label), React$1__default.createElement(core$1.FormGroup, null, Array.isArray(options) && options.map(function (option, i) {
        var value = option.value,
            text = option.text;
        return React$1__default.createElement(core$1.FormControlLabel, {
          key: i,
          control: React$1__default.createElement(core$1.Checkbox, {
            checked: _dados[name][value],
            value: value,
            name: name,
            onChange: function onChange(event) {
              var checked = event.target.checked;
              setDados(_objectSpread2$1({}, dados, _defineProperty$1({}, name, _objectSpread2$1({}, dados[name], _defineProperty$1({}, value, checked)))));
            }
          }),
          label: text
        });
      }))));
    }

    return React$1__default.createElement(core$1.Box, {
      key: i,
      mb: 2
    }, input);
  }), React$1__default.createElement(core$1.Button, {
    size: "large",
    color: "primary",
    variant: "contained",
    type: "submit",
    startIcon: React$1__default.createElement(icons$1.Save, null),
    disabled: JSON.stringify(dados) === JSON.stringify(dadosIniciais)
  }, "Salvar"), React$1__default.createElement(core$1.Box, {
    ml: 1,
    component: "span"
  }), React$1__default.createElement(core$1.Button, {
    size: "large",
    color: "default",
    variant: "text",
    href: path,
    startIcon: React$1__default.createElement(icons$1.Cancel, null)
  }, "Cancelar")))))));
}

var useStyles$6 = styles$1.makeStyles(function (theme) {
  return {
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    }
  };
});

function SimpleBackdrop$1() {
  var classes = useStyles$6();
  return React$1__default.createElement(Backdrop$1, {
    className: classes.backdrop,
    open: true
  }, React$1__default.createElement(CircularProgress$1, {
    color: "inherit"
  }));
}

function TabelaContainer$1(_ref) {
  var colunas = _ref.colunas,
      children = _ref.children;
  return React$1__default.createElement(TableContainer$1, {
    component: Paper$1
  }, React$1__default.createElement(Table$1, null, colunas && React$1__default.createElement(TableHead$1, null, React$1__default.createElement(TableRow$1, null, colunas.map(function (coluna, i) {
    var titulo = coluna.titulo;

    if (titulo) {
      return React$1__default.createElement(TableCell$1, {
        key: i
      }, titulo);
    } else {
      return React$1__default.createElement(TableCell$1, {
        key: i
      }, coluna);
    }
  }))), React$1__default.createElement(TableBody$1, null, children)));
}

var useStyles$7 = styles$1.makeStyles({
  link: {
    display: 'block'
  }
});

function TabelaSimples$1(_ref) {
  var registros = _ref.registros,
      colunas = _ref.colunas,
      link = _ref.link,
      sufixo = _ref.sufixo,
      target = _ref.target;
  var classes = useStyles$7();
  return React$1__default.createElement(React$1__default.Fragment, null, registros && React$1__default.createElement(TabelaContainer$1, {
    colunas: colunas
  }, registros.length === 0 ? React$1__default.createElement(TableRow$1, null, React$1__default.createElement(TableCell$1, {
    colSpan: colunas.length
  }, "Nenhum registro encontrado")) : registros.map(function (registro, i) {
    return React$1__default.createElement(TableRow$1, {
      key: i
    }, colunas.map(function (coluna, j) {
      var parametro = coluna.parametro,
          idLink = coluna.idLink;
      return React$1__default.createElement(TableCell$1, {
        key: j
      }, link && idLink && React$1__default.createElement(Link$1, {
        className: classes.link,
        href: link + '/' + registro[idLink] + sufixo,
        target: target,
        rel: "noopener"
      }, registro[parametro]), !link && registro[parametro]);
    }));
  })));
}

var FixReturn = {
  mutation: function mutation(object) {
    var data = object[Object.keys(object)[0]].returning[0];
    delete data.__typename;
    return data;
  },
  queryOne: function queryOne(object) {
    var data = object[Object.keys(object)[0]][0];
    delete data.__typename;
    return data;
  },
  query: function query(object) {
    return object[Object.keys(object)[0]];
  },
  "delete": function _delete(object) {
    return object[Object.keys(object)].affected_rows;
  }
};
/*
 * path: String - Caminho base do módulo
 * module: Object - Componentes do módulo (página)
 * actions: Array - Ações a incluir na rotas, seguir o padrão: [{page: caminho_url}]; Onde 'page' é um dos componentes do módulo e 'page_path' é a url complementar após o parâmetro 'path'
 */

function ModuleRoute(_ref) {
  var path = _ref.path,
      module = _ref.module,
      moduleTitle = _ref.moduleTitle,
      actions = _ref.actions;

  var _useState = React$1.useState(''),
      _useState2 = _slicedToArray$1(_useState, 2),
      alerta = _useState2[0],
      setAlerta = _useState2[1];

  return React$1__default.createElement(React$1__default.Fragment, null, actions.map(function (action, i) {
    var page = action.page,
        pagePath = action.pagePath,
        pageTitle = action.pageTitle;
    return React$1__default.createElement(reactRouterDom.Route, {
      key: i,
      exact: true,
      path: path + pagePath,
      component: function component() {
        document.title = (pageTitle ? pageTitle + ' - ' : '') + moduleTitle + ' - e-Estado';
        return module[page]({
          moduleTitle: moduleTitle,
          pageTitle: pageTitle,
          alerta: alerta,
          setAlerta: setAlerta,
          path: path
        });
      }
    });
  }));
}

exports.Alerta = Alerta$1;
exports.BarraContexto = BarraContexto$1;
exports.FixReturn = FixReturn;
exports.Formulario = Formulario$1;
exports.ModuleRoute = ModuleRoute;
exports.PreLoader = SimpleBackdrop$1;
exports.TabelaContainer = TabelaContainer$1;
exports.TabelaSimples = TabelaSimples$1;

var useStyles$8 = styles$2.makeStyles(function (theme) {
  return {
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  };
});
function Alerta$2(_ref) {
  var titulo = _ref.titulo,
      tipo = _ref.tipo,
      texto = _ref.texto;
  var classes = useStyles$8();

  var _useState = React$2.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return React$2__default.createElement("div", {
    className: classes.root
  }, React$2__default.createElement(Snackbar$2, {
    open: open,
    autoHideDuration: 5000,
    onClose: handleClose
  }, React$2__default.createElement(lab$2.Alert, {
    severity: tipo ? tipo : 'error',
    onClose: handleClose
  }, titulo && React$2__default.createElement(lab$2.AlertTitle, null, titulo), texto)));
}

var theme$2 = styles$2.createMuiTheme({
  palette: {
    "default": {
      main: colors$2.grey[50]
    }
  }
});
var useStyles$9 = styles$2.makeStyles(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: _defineProperty({
      flexGrow: 1,
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: _defineProperty({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: styles$2.fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: styles$2.fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: _defineProperty({
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: 120,
      '&:focus': {
        width: 200
      }
    })
  };
});
function BarraContexto$2(_ref) {
  var titulo = _ref.titulo,
      acoes = _ref.acoes,
      buscar = _ref.buscar,
      limparBusca = _ref.limparBusca;
  var classes = useStyles$9();

  var _useState = React$2.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = React$2.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      buscou = _useState4[0],
      setBuscou = _useState4[1];

  return React$2__default.createElement("div", {
    className: classes.root
  }, React$2__default.createElement(styles$2.ThemeProvider, {
    theme: theme$2
  }, React$2__default.createElement(AppBar$2, {
    position: "static",
    color: "primary"
  }, React$2__default.createElement(Toolbar$2, null, React$2__default.createElement(Typography$2, {
    className: classes.title,
    variant: "h6",
    noWrap: true
  }, titulo), acoes && acoes.map(function (acao, i) {
    var link = acao.link,
        texto = acao.texto,
        tipo = acao.tipo,
        icone = acao.icone,
        click = acao.click;
    return React$2__default.createElement("span", {
      key: i
    }, i > 0 && React$2__default.createElement(Box$2, {
      ml: 1,
      component: "span"
    }), React$2__default.createElement(Button$2, {
      variant: tipo ? tipo : 'contained',
      color: "default",
      key: i,
      onClick: function onClick() {
        return click();
      },
      href: link
    }, icone, "\xA0", texto));
  }), buscar && React$2__default.createElement("div", {
    className: classes.search
  }, React$2__default.createElement("div", {
    className: classes.searchIcon
  }, React$2__default.createElement(icons$2.Search, null)), React$2__default.createElement("form", {
    onSubmit: function onSubmit(event) {
      event.preventDefault();

      if (search.length >= 3) {
        buscar({
          variables: {
            search: "%".concat(search, "%")
          }
        });
        setBuscou(true);
      }
    }
  }, React$2__default.createElement(InputBase$2, {
    placeholder: "Buscar...",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'busca'
    },
    value: search,
    onChange: function onChange(event) {
      return setSearch(event.target.value);
    }
  }), buscou && React$2__default.createElement(Button$2, {
    style: {
      color: '#fff'
    },
    onClick: function onClick() {
      limparBusca();
      setSearch('');
      setBuscou(false);
    }
  }, React$2__default.createElement(icons$2.Cancel, null))))))), React$2__default.createElement(Box$2, {
    m: 4
  }));
}

function Formulario$2(_ref) {
  var campos = _ref.campos,
      dados = _ref.dados,
      setDados = _ref.setDados,
      dadosIniciais = _ref.dadosIniciais,
      HandleSubmit = _ref.HandleSubmit,
      path = _ref.path;
  return React$2__default.createElement(React$2__default.Fragment, null, React$2__default.createElement(core$2.Grid, {
    container: true,
    spacing: 3
  }, React$2__default.createElement(core$2.Grid, {
    item: true,
    lg: 6,
    md: 8,
    xs: 12
  }, React$2__default.createElement(core$2.Paper, null, React$2__default.createElement(core$2.Box, {
    p: 3
  }, React$2__default.createElement("form", {
    autoComplete: "new-password",
    onSubmit: HandleSubmit
  }, campos.map(function (campo, i) {
    var name = campo.name,
        label = campo.label,
        type = campo.type,
        required = campo.required,
        options = campo.options;
    var input = '';

    if (type === 'text') {
      input = React$2__default.createElement(core$2.TextField, {
        id: name,
        required: required,
        label: label,
        type: "text",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2({}, dados, _defineProperty({}, name, value)));
        }
      });
    }

    if (type === 'email') {
      input = React$2__default.createElement(core$2.TextField, {
        id: name,
        required: required,
        label: label,
        type: "email",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2({}, dados, _defineProperty({}, name, value)));
        }
      });
    }

    if (type === 'password') {
      input = React$2__default.createElement(core$2.TextField, {
        id: name,
        required: required,
        label: label,
        type: "password",
        variant: "outlined",
        fullWidth: true,
        value: dados ? dados[name] : '',
        onChange: function onChange(event) {
          var value = event.target.value;
          setDados(_objectSpread2({}, dados, _defineProperty({}, name, value)));
        }
      });
    }

    if (type === 'switch') {
      input = React$2__default.createElement(core$2.FormControlLabel, {
        control: React$2__default.createElement(core$2.Switch, {
          checked: dados[name] ? true : false,
          onChange: function onChange(event) {
            var checked = event.target.checked;
            setDados(_objectSpread2({}, dados, _defineProperty({}, name, checked)));
          }
        }),
        label: label
      });
    }

    if (type === 'checkbox') {
      var _dados = dados;
      input = React$2__default.createElement(React$2__default.Fragment, null, React$2__default.createElement(core$2.FormControl, null, React$2__default.createElement(core$2.FormLabel, null, label), React$2__default.createElement(core$2.FormGroup, null, Array.isArray(options) && options.map(function (option, i) {
        var value = option.value,
            text = option.text;
        return React$2__default.createElement(core$2.FormControlLabel, {
          key: i,
          control: React$2__default.createElement(core$2.Checkbox, {
            checked: _dados[name][value],
            value: value,
            name: name,
            onChange: function onChange(event) {
              var checked = event.target.checked;
              setDados(_objectSpread2({}, dados, _defineProperty({}, name, _objectSpread2({}, dados[name], _defineProperty({}, value, checked)))));
            }
          }),
          label: text
        });
      }))));
    }

    return React$2__default.createElement(core$2.Box, {
      key: i,
      mb: 2
    }, input);
  }), React$2__default.createElement(core$2.Button, {
    size: "large",
    color: "primary",
    variant: "contained",
    type: "submit",
    startIcon: React$2__default.createElement(icons$2.Save, null),
    disabled: JSON.stringify(dados) === JSON.stringify(dadosIniciais)
  }, "Salvar"), React$2__default.createElement(core$2.Box, {
    ml: 1,
    component: "span"
  }), React$2__default.createElement(core$2.Button, {
    size: "large",
    color: "default",
    variant: "text",
    href: path,
    startIcon: React$2__default.createElement(icons$2.Cancel, null)
  }, "Cancelar")))))));
}

var useStyles$a = styles$2.makeStyles(function (theme) {
  return {
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    }
  };
});
function SimpleBackdrop$2() {
  var classes = useStyles$a();
  return React$2__default.createElement(Backdrop$2, {
    className: classes.backdrop,
    open: true
  }, React$2__default.createElement(CircularProgress$2, {
    color: "inherit"
  }));
}

function TabelaContainer$2(_ref) {
  var colunas = _ref.colunas,
      children = _ref.children;
  return React$2__default.createElement(TableContainer$2, {
    component: Paper$2
  }, React$2__default.createElement(Table$2, null, colunas && React$2__default.createElement(TableHead$2, null, React$2__default.createElement(TableRow$2, null, colunas.map(function (coluna, i) {
    var titulo = coluna.titulo;

    if (titulo) {
      return React$2__default.createElement(TableCell$2, {
        key: i
      }, titulo);
    } else {
      return React$2__default.createElement(TableCell$2, {
        key: i
      }, coluna);
    }
  }))), React$2__default.createElement(TableBody$2, null, children)));
}

var useStyles$b = styles$2.makeStyles({
  link: {
    display: 'block'
  }
});
function TabelaSimples$2(_ref) {
  var registros = _ref.registros,
      colunas = _ref.colunas,
      link = _ref.link,
      sufixo = _ref.sufixo,
      target = _ref.target;
  var classes = useStyles$b();
  return React$2__default.createElement(React$2__default.Fragment, null, registros && React$2__default.createElement(TabelaContainer$2, {
    colunas: colunas
  }, registros.length === 0 ? React$2__default.createElement(TableRow$2, null, React$2__default.createElement(TableCell$2, {
    colSpan: colunas.length
  }, "Nenhum registro encontrado")) : registros.map(function (registro, i) {
    return React$2__default.createElement(TableRow$2, {
      key: i
    }, colunas.map(function (coluna, j) {
      var parametro = coluna.parametro,
          idLink = coluna.idLink;
      return React$2__default.createElement(TableCell$2, {
        key: j
      }, link && idLink && React$2__default.createElement(Link$2, {
        className: classes.link,
        href: link + '/' + registro[idLink] + sufixo,
        target: target,
        rel: "noopener"
      }, registro[parametro]), !link && registro[parametro]);
    }));
  })));
}

var FixReturn$1 = {
  mutation: function mutation(object) {
    var data = object[Object.keys(object)[0]].returning[0];
    delete data.__typename;
    return data;
  },
  queryOne: function queryOne(object) {
    var data = object[Object.keys(object)[0]][0];
    delete data.__typename;
    return data;
  },
  query: function query(object) {
    return object[Object.keys(object)[0]];
  },
  "delete": function _delete(object) {
    return object[Object.keys(object)].affected_rows;
  }
};

/*
 * path: String - Caminho base do módulo
 * module: Object - Componentes do módulo (página)
 * actions: Array - Ações a incluir na rotas, seguir o padrão: [{page: caminho_url}]; Onde 'page' é um dos componentes do módulo e 'page_path' é a url complementar após o parâmetro 'path'
 */

function ModuleRoute$1(_ref) {
  var path = _ref.path,
      module = _ref.module,
      moduleTitle = _ref.moduleTitle,
      actions = _ref.actions;

  var _useState = React$2.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      alerta = _useState2[0],
      setAlerta = _useState2[1];

  return React$2__default.createElement(React$2__default.Fragment, null, actions.map(function (action, i) {
    var page = action.page,
        pagePath = action.pagePath,
        pageTitle = action.pageTitle;
    return React$2__default.createElement(reactRouterDom$1.Route, {
      key: i,
      exact: true,
      path: path + pagePath,
      component: function component() {
        document.title = (pageTitle ? pageTitle + ' - ' : '') + moduleTitle + ' - e-Estado';
        return module[page]({
          moduleTitle: moduleTitle,
          pageTitle: pageTitle,
          alerta: alerta,
          setAlerta: setAlerta,
          path: path
        });
      }
    });
  }));
}

exports.Alerta = Alerta$2;
exports.BarraContexto = BarraContexto$2;
exports.FixReturn = FixReturn$1;
exports.Formulario = Formulario$2;
exports.ModuleRoute = ModuleRoute$1;
exports.PreLoader = SimpleBackdrop$2;
exports.TabelaContainer = TabelaContainer$2;
exports.TabelaSimples = TabelaSimples$2;
