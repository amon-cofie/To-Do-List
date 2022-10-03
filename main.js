"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./modules/check-completed.js":
/*!************************************!*\
  !*** ./modules/check-completed.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-array-module.js */ "./modules/tasks-array-module.js");
/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ "./modules/dynamic-storage-update.js");



const checkCompleted = (nod) => {
  const checker = nod.querySelector('input');

  const indexHolder = Number(nod.dataset.index);
  const descriptionHolder = nod.querySelector('.description');

  if (checker.checked) {
    nod.dataset.completed = true;
    _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((e) => {
      if (e.index === indexHolder) {
        e.completed = true;
      }
    });
    descriptionHolder.classList.add('cross-out');
  } else {
    nod.dataset.completed = false;
    _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((e) => {
      if (e.index === indexHolder) {
        e.completed = false;
      }
    });
    descriptionHolder.classList.remove('cross-out');
  }
  (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkCompleted);


/***/ }),

/***/ "./modules/create-task-node.js":
/*!*************************************!*\
  !*** ./modules/create-task-node.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _remove_task_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-task-node.js */ "./modules/remove-task-node.js");
/* harmony import */ var _edit_existing_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-existing-task.js */ "./modules/edit-existing-task.js");
/* harmony import */ var _check_completed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-completed.js */ "./modules/check-completed.js");




const taskNode = (obj) => {
  const newTask = document.createElement('div');
  const newTaskContainer = document.createElement('div');

  const checkMarkInput = document.createElement('input');
  const objDescription = document.createElement('span');
  const taskController = document.createElement('i');

  checkMarkInput.type = 'checkbox';
  objDescription.innerText = `${obj.description}`;
  taskController.classList.add(
    'fa-solid',
    'fa-ellipsis-vertical',
    'make-task-controller-accessible',
  );
  objDescription.classList.add('description');

  taskController.onmouseover = () => {
    taskController.classList.remove('fa-solid', 'fa-ellipsis-vertical');
    taskController.classList.add('fa-solid', 'fa-trash');
  };

  taskController.onmouseout = () => {
    taskController.classList.remove('fa-solid', 'fa-trash');
    taskController.classList.add('fa-solid', 'fa-ellipsis-vertical');
  };

  newTaskContainer.appendChild(checkMarkInput);
  newTaskContainer.appendChild(objDescription);

  newTask.appendChild(newTaskContainer);
  newTask.appendChild(taskController);

  newTask.dataset.index = obj.index;
  newTask.dataset.completed = obj.completed;
  newTask.classList.add('make-flex');

  taskController.addEventListener('click', () => {
    (0,_remove_task_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj.index, newTask);
  });

  objDescription.addEventListener('click', () => {
    (0,_edit_existing_task_js__WEBPACK_IMPORTED_MODULE_1__["default"])(objDescription, newTask.dataset.index);
  });

  checkMarkInput.addEventListener('change', () => {
    (0,_check_completed_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newTask);
  });

  if (obj.completed) {
    checkMarkInput.checked = true;
    objDescription.classList.add('cross-out');
  }

  return newTask;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskNode);


/***/ }),

/***/ "./modules/create-tasks-array.js":
/*!***************************************!*\
  !*** ./modules/create-tasks-array.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "populateTaskArray": () => (/* binding */ populateTaskArray)
/* harmony export */ });
/* harmony import */ var _task_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-template.js */ "./modules/task-template.js");
/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ "./modules/dynamic-storage-update.js");
/* harmony import */ var _re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./re-order-tasks.js */ "./modules/re-order-tasks.js");
/* harmony import */ var _display_task_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-task-node.js */ "./modules/display-task-node.js");
/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks-array-module.js */ "./modules/tasks-array-module.js");






const populateTaskArray = (describe) => {
  (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const newTaskObject = new _task_template_js__WEBPACK_IMPORTED_MODULE_0__["default"](describe);
  _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__["default"].push(newTaskObject);
  (0,_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
  (0,_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__["default"])(newTaskObject);
  (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateTaskArray);


/***/ }),

/***/ "./modules/display-task-node.js":
/*!**************************************!*\
  !*** ./modules/display-task-node.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "toDoList": () => (/* binding */ toDoList)
/* harmony export */ });
/* harmony import */ var _create_task_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task-node.js */ "./modules/create-task-node.js");


const toDoList = document.querySelector('#to-do-list');

const displayNode = (obj) => {
  const separator = document.createElement('hr');
  const taskReturn = (0,_create_task_node_js__WEBPACK_IMPORTED_MODULE_0__["default"])(obj);
  toDoList.appendChild(taskReturn);
  taskReturn.after(separator);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNode);


/***/ }),

/***/ "./modules/dynamic-storage-update.js":
/*!*******************************************!*\
  !*** ./modules/dynamic-storage-update.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dynamicStorageUpdate = (storeArr) => {
  localStorage.setItem('taskStorageArray', JSON.stringify(storeArr));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dynamicStorageUpdate);


/***/ }),

/***/ "./modules/edit-existing-task.js":
/*!***************************************!*\
  !*** ./modules/edit-existing-task.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-array-module.js */ "./modules/tasks-array-module.js");
/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ "./modules/dynamic-storage-update.js");



const editTask = (obj, indx) => {
  obj.contentEditable = 'true';
  obj.onkeydown = (event) => {
    if (event.key === 'Enter') {
      obj.contentEditable = 'false';
      _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((e) => {
        if (e.index === Number(indx)) {
          e.description = obj.innerText;
        }
      });
      (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);


/***/ }),

/***/ "./modules/re-order-tasks.js":
/*!***********************************!*\
  !*** ./modules/re-order-tasks.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reOrderTasks = (arr) => {
  let indexer = 1;
  arr.forEach((e) => {
    e.index = indexer;
    indexer += 1;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reOrderTasks);


/***/ }),

/***/ "./modules/remove-task-node.js":
/*!*************************************!*\
  !*** ./modules/remove-task-node.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-array-module.js */ "./modules/tasks-array-module.js");
/* harmony import */ var _dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-storage-update.js */ "./modules/dynamic-storage-update.js");
/* harmony import */ var _re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./re-order-tasks.js */ "./modules/re-order-tasks.js");




const removeNode = (obj, currNode) => {
  let flag = 0;
  _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((e) => {
    if (e.index === obj) {
      flag = _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__["default"].indexOf(e);
      currNode.parentNode.removeChild(currNode.nextSibling);
      currNode.parentNode.removeChild(currNode);
    }
  });
  _tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__["default"].splice(flag, 1);
  (0,_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  (0,_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeNode);


/***/ }),

/***/ "./modules/task-template.js":
/*!**********************************!*\
  !*** ./modules/task-template.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class NewTaskTemplate {
  constructor(str, boole = false, num = 0) {
    this.description = str;
    this.completed = boole;
    this.index = num;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTaskTemplate);


/***/ }),

/***/ "./modules/tasks-array-module.js":
/*!***************************************!*\
  !*** ./modules/tasks-array-module.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tasks = JSON.parse(localStorage.getItem('taskStorageArray')) || [];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: cursive;\r\n  transition: 0.5s;\r\n}\r\n\r\n.to-do-list-app-container {\r\n  border: 5px solid black;\r\n  width: 60vw;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 3rem;\r\n}\r\n\r\n.make-flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 3rem;\r\n  align-items: center;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n#add-new-task {\r\n  height: 3rem;\r\n  width: 100%;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n  border: none;\r\n  font-style: italic;\r\n}\r\n\r\n#app-label-tag {\r\n  height: 3rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.description {\r\n  margin-left: 1rem;\r\n  max-width: 40%;\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.cross-out {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n\r\n.make-task-controller-accessible {\r\n  width: 2rem;\r\n  height: 80%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#clear-all-completed {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 3rem;\r\n  background-color: rgba(128, 128, 128, 0.521);\r\n}\r\n\r\n#clr-completed-btn {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: rgba(128, 128, 128, 0);\r\n  border: none;\r\n  padding: 0.5rem;\r\n  font-weight: 550;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,4CAA4C;AAC9C;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,wCAAwC;EACxC,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB","sourcesContent":["* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: cursive;\r\n  transition: 0.5s;\r\n}\r\n\r\n.to-do-list-app-container {\r\n  border: 5px solid black;\r\n  width: 60vw;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 3rem;\r\n}\r\n\r\n.make-flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 3rem;\r\n  align-items: center;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n#add-new-task {\r\n  height: 3rem;\r\n  width: 100%;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n  border: none;\r\n  font-style: italic;\r\n}\r\n\r\n#app-label-tag {\r\n  height: 3rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.description {\r\n  margin-left: 1rem;\r\n  max-width: 40%;\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.cross-out {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n\r\n.make-task-controller-accessible {\r\n  width: 2rem;\r\n  height: 80%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n#clear-all-completed {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 3rem;\r\n  background-color: rgba(128, 128, 128, 0.521);\r\n}\r\n\r\n#clr-completed-btn {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: rgba(128, 128, 128, 0);\r\n  border: none;\r\n  padding: 0.5rem;\r\n  font-weight: 550;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/tasks-array-module.js */ "./modules/tasks-array-module.js");
/* harmony import */ var _modules_create_tasks_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/create-tasks-array.js */ "./modules/create-tasks-array.js");
/* harmony import */ var _modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/display-task-node.js */ "./modules/display-task-node.js");
/* harmony import */ var _modules_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/dynamic-storage-update.js */ "./modules/dynamic-storage-update.js");
/* harmony import */ var _modules_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/re-order-tasks.js */ "./modules/re-order-tasks.js");







const taskInput = document.querySelector('#add-new-task');
const resetBtn = document.querySelector('#reset-button');
const clearCompleted = document.querySelector('#clr-completed-btn');

_modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach((e) => {
  (0,_modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e);
});

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (taskInput.value.length <= 1) {
      return;
    }
    (0,_modules_create_tasks_array_js__WEBPACK_IMPORTED_MODULE_2__.populateTaskArray)(taskInput.value);
    taskInput.value = '';
  }
});

resetBtn.addEventListener('click', () => {
  localStorage.clear();
  _modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__["default"].splice(_modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__["default"][0]);
  while (_modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.firstChild) {
    _modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.removeChild(_modules_display_task_node_js__WEBPACK_IMPORTED_MODULE_3__.toDoList.lastChild);
  }
});

clearCompleted.addEventListener('click', () => {
  const filterComplete = _modules_tasks_array_module_js__WEBPACK_IMPORTED_MODULE_1__["default"].filter((e) => e.completed === false);
  (0,_modules_re_order_tasks_js__WEBPACK_IMPORTED_MODULE_5__["default"])(filterComplete);
  (0,_modules_dynamic_storage_update_js__WEBPACK_IMPORTED_MODULE_4__["default"])(filterComplete);

  window.location.reload();
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDbUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJLHNFQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRSxzRUFBb0IsQ0FBQyw4REFBSztBQUM1QjtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QmlCO0FBQ0E7QUFDRztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFVO0FBQ2QsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLGtFQUFRO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLCtEQUFjO0FBQ2xCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEeUI7QUFDYztBQUNoQjtBQUNFO0FBQ0w7QUFDNUM7QUFDTztBQUNQLEVBQUUsc0VBQW9CLENBQUMsOERBQUs7QUFDNUIsNEJBQTRCLHlEQUFlO0FBQzNDLEVBQUUsbUVBQVU7QUFDWixFQUFFLDhEQUFZLENBQUMsOERBQUs7QUFDcEIsRUFBRSxpRUFBVztBQUNiLEVBQUUsc0VBQW9CLENBQUMsOERBQUs7QUFDNUI7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZZOztBQUV0Qzs7QUFFUDtBQUNBO0FBQ0EscUJBQXFCLGdFQUFRO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1gzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLG9CQUFvQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pRO0FBQ21COztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRUFBYTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTSxzRUFBb0IsQ0FBQyw4REFBSztBQUNoQztBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZ0I7QUFDbUI7QUFDaEI7O0FBRS9DO0FBQ0E7QUFDQSxFQUFFLHNFQUFhO0FBQ2Y7QUFDQSxhQUFhLHNFQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLHFFQUFZO0FBQ2QsRUFBRSw4REFBWSxDQUFDLDhEQUFLO0FBQ3BCLEVBQUUsc0VBQW9CLENBQUMsOERBQUs7QUFDNUI7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDUi9COztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQjtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLGlCQUFpQixnQkFBZ0IsNkJBQTZCLDJCQUEyQix1QkFBdUIsS0FBSyxtQ0FBbUMsOEJBQThCLGtCQUFrQix3QkFBd0IseUJBQXlCLHVCQUF1QixLQUFLLG9CQUFvQixvQkFBb0IscUNBQXFDLG1CQUFtQiwwQkFBMEIseUJBQXlCLDBCQUEwQixLQUFLLHVCQUF1QixtQkFBbUIsa0JBQWtCLHlCQUF5QiwwQkFBMEIsbUJBQW1CLHlCQUF5QixLQUFLLHdCQUF3QixtQkFBbUIsb0JBQW9CLHFDQUFxQywwQkFBMEIseUJBQXlCLDBCQUEwQixLQUFLLHNCQUFzQix3QkFBd0IscUJBQXFCLDBCQUEwQiw2QkFBNkIsS0FBSyxvQkFBb0Isb0NBQW9DLGtCQUFrQixLQUFLLDBDQUEwQyxrQkFBa0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssOEJBQThCLG9CQUFvQiw4QkFBOEIsa0JBQWtCLG1CQUFtQixtREFBbUQsS0FBSyw0QkFBNEIsd0JBQXdCLHlCQUF5QiwrQ0FBK0MsbUJBQW1CLHNCQUFzQix1QkFBdUIsS0FBSyxXQUFXLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksNkJBQTZCLGlCQUFpQixnQkFBZ0IsNkJBQTZCLDJCQUEyQix1QkFBdUIsS0FBSyxtQ0FBbUMsOEJBQThCLGtCQUFrQix3QkFBd0IseUJBQXlCLHVCQUF1QixLQUFLLG9CQUFvQixvQkFBb0IscUNBQXFDLG1CQUFtQiwwQkFBMEIseUJBQXlCLDBCQUEwQixLQUFLLHVCQUF1QixtQkFBbUIsa0JBQWtCLHlCQUF5QiwwQkFBMEIsbUJBQW1CLHlCQUF5QixLQUFLLHdCQUF3QixtQkFBbUIsb0JBQW9CLHFDQUFxQywwQkFBMEIseUJBQXlCLDBCQUEwQixLQUFLLHNCQUFzQix3QkFBd0IscUJBQXFCLDBCQUEwQiw2QkFBNkIsS0FBSyxvQkFBb0Isb0NBQW9DLGtCQUFrQixLQUFLLDBDQUEwQyxrQkFBa0Isa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssOEJBQThCLG9CQUFvQiw4QkFBOEIsa0JBQWtCLG1CQUFtQixtREFBbUQsS0FBSyw0QkFBNEIsd0JBQXdCLHlCQUF5QiwrQ0FBK0MsbUJBQW1CLHNCQUFzQix1QkFBdUIsS0FBSyx1QkFBdUI7QUFDNTFIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ2dDO0FBQ2dCO0FBQ0c7QUFDQTtBQUNoQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQWE7QUFDYixFQUFFLHlFQUFXO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUZBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2RUFBWSxDQUFDLHlFQUFRO0FBQ3ZCLFNBQVMsOEVBQW1CO0FBQzVCLElBQUksK0VBQW9CLENBQUMsNkVBQWtCO0FBQzNDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSx5QkFBeUIsNkVBQVk7QUFDckMsRUFBRSxzRUFBWTtBQUNkLEVBQUUsOEVBQW9CO0FBQ3RCO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvY2hlY2stY29tcGxldGVkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL2NyZWF0ZS10YXNrLW5vZGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvY3JlYXRlLXRhc2tzLWFycmF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL2Rpc3BsYXktdGFzay1ub2RlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL2R5bmFtaWMtc3RvcmFnZS11cGRhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvZWRpdC1leGlzdGluZy10YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL3JlLW9yZGVyLXRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9tb2R1bGVzL3JlbW92ZS10YXNrLW5vZGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL21vZHVsZXMvdGFzay10ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbW9kdWxlcy90YXNrcy1hcnJheS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0YXNrcyBmcm9tICcuL3Rhc2tzLWFycmF5LW1vZHVsZS5qcyc7XHJcbmltcG9ydCBkeW5hbWljU3RvcmFnZVVwZGF0ZSBmcm9tICcuL2R5bmFtaWMtc3RvcmFnZS11cGRhdGUuanMnO1xyXG5cclxuY29uc3QgY2hlY2tDb21wbGV0ZWQgPSAobm9kKSA9PiB7XHJcbiAgY29uc3QgY2hlY2tlciA9IG5vZC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cclxuICBjb25zdCBpbmRleEhvbGRlciA9IE51bWJlcihub2QuZGF0YXNldC5pbmRleCk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25Ib2xkZXIgPSBub2QucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJyk7XHJcblxyXG4gIGlmIChjaGVja2VyLmNoZWNrZWQpIHtcclxuICAgIG5vZC5kYXRhc2V0LmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICB0YXNrcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmluZGV4ID09PSBpbmRleEhvbGRlcikge1xyXG4gICAgICAgIGUuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBkZXNjcmlwdGlvbkhvbGRlci5jbGFzc0xpc3QuYWRkKCdjcm9zcy1vdXQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbm9kLmRhdGFzZXQuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB0YXNrcy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmluZGV4ID09PSBpbmRleEhvbGRlcikge1xyXG4gICAgICAgIGUuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZGVzY3JpcHRpb25Ib2xkZXIuY2xhc3NMaXN0LnJlbW92ZSgnY3Jvc3Mtb3V0Jyk7XHJcbiAgfVxyXG4gIGR5bmFtaWNTdG9yYWdlVXBkYXRlKHRhc2tzKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrQ29tcGxldGVkO1xyXG4iLCJpbXBvcnQgcmVtb3ZlTm9kZSBmcm9tICcuL3JlbW92ZS10YXNrLW5vZGUuanMnO1xyXG5pbXBvcnQgZWRpdFRhc2sgZnJvbSAnLi9lZGl0LWV4aXN0aW5nLXRhc2suanMnO1xyXG5pbXBvcnQgY2hlY2tDb21wbGV0ZWQgZnJvbSAnLi9jaGVjay1jb21wbGV0ZWQuanMnO1xyXG5cclxuY29uc3QgdGFza05vZGUgPSAob2JqKSA9PiB7XHJcbiAgY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IG5ld1Rhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgY2hlY2tNYXJrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbnN0IG9iakRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNvbnN0IHRhc2tDb250cm9sbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG5cclxuICBjaGVja01hcmtJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcclxuICBvYmpEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBgJHtvYmouZGVzY3JpcHRpb259YDtcclxuICB0YXNrQ29udHJvbGxlci5jbGFzc0xpc3QuYWRkKFxyXG4gICAgJ2ZhLXNvbGlkJyxcclxuICAgICdmYS1lbGxpcHNpcy12ZXJ0aWNhbCcsXHJcbiAgICAnbWFrZS10YXNrLWNvbnRyb2xsZXItYWNjZXNzaWJsZScsXHJcbiAgKTtcclxuICBvYmpEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG5cclxuICB0YXNrQ29udHJvbGxlci5vbm1vdXNlb3ZlciA9ICgpID0+IHtcclxuICAgIHRhc2tDb250cm9sbGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXNvbGlkJywgJ2ZhLWVsbGlwc2lzLXZlcnRpY2FsJyk7XHJcbiAgICB0YXNrQ29udHJvbGxlci5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS10cmFzaCcpO1xyXG4gIH07XHJcblxyXG4gIHRhc2tDb250cm9sbGVyLm9ubW91c2VvdXQgPSAoKSA9PiB7XHJcbiAgICB0YXNrQ29udHJvbGxlci5jbGFzc0xpc3QucmVtb3ZlKCdmYS1zb2xpZCcsICdmYS10cmFzaCcpO1xyXG4gICAgdGFza0NvbnRyb2xsZXIuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtZWxsaXBzaXMtdmVydGljYWwnKTtcclxuICB9O1xyXG5cclxuICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrTWFya0lucHV0KTtcclxuICBuZXdUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKG9iakRlc2NyaXB0aW9uKTtcclxuXHJcbiAgbmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrQ29udGFpbmVyKTtcclxuICBuZXdUYXNrLmFwcGVuZENoaWxkKHRhc2tDb250cm9sbGVyKTtcclxuXHJcbiAgbmV3VGFzay5kYXRhc2V0LmluZGV4ID0gb2JqLmluZGV4O1xyXG4gIG5ld1Rhc2suZGF0YXNldC5jb21wbGV0ZWQgPSBvYmouY29tcGxldGVkO1xyXG4gIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnbWFrZS1mbGV4Jyk7XHJcblxyXG4gIHRhc2tDb250cm9sbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVtb3ZlTm9kZShvYmouaW5kZXgsIG5ld1Rhc2spO1xyXG4gIH0pO1xyXG5cclxuICBvYmpEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGVkaXRUYXNrKG9iakRlc2NyaXB0aW9uLCBuZXdUYXNrLmRhdGFzZXQuaW5kZXgpO1xyXG4gIH0pO1xyXG5cclxuICBjaGVja01hcmtJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICBjaGVja0NvbXBsZXRlZChuZXdUYXNrKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG9iai5jb21wbGV0ZWQpIHtcclxuICAgIGNoZWNrTWFya0lucHV0LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgb2JqRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY3Jvc3Mtb3V0Jyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3VGFzaztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tOb2RlO1xyXG4iLCJpbXBvcnQgTmV3VGFza1RlbXBsYXRlIGZyb20gJy4vdGFzay10ZW1wbGF0ZS5qcyc7XHJcbmltcG9ydCBkeW5hbWljU3RvcmFnZVVwZGF0ZSBmcm9tICcuL2R5bmFtaWMtc3RvcmFnZS11cGRhdGUuanMnO1xyXG5pbXBvcnQgcmVPcmRlclRhc2tzIGZyb20gJy4vcmUtb3JkZXItdGFza3MuanMnO1xyXG5pbXBvcnQgZGlzcGxheU5vZGUgZnJvbSAnLi9kaXNwbGF5LXRhc2stbm9kZS5qcyc7XHJcbmltcG9ydCB0YXNrcyBmcm9tICcuL3Rhc2tzLWFycmF5LW1vZHVsZS5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgcG9wdWxhdGVUYXNrQXJyYXkgPSAoZGVzY3JpYmUpID0+IHtcclxuICBkeW5hbWljU3RvcmFnZVVwZGF0ZSh0YXNrcyk7XHJcbiAgY29uc3QgbmV3VGFza09iamVjdCA9IG5ldyBOZXdUYXNrVGVtcGxhdGUoZGVzY3JpYmUpO1xyXG4gIHRhc2tzLnB1c2gobmV3VGFza09iamVjdCk7XHJcbiAgcmVPcmRlclRhc2tzKHRhc2tzKTtcclxuICBkaXNwbGF5Tm9kZShuZXdUYXNrT2JqZWN0KTtcclxuICBkeW5hbWljU3RvcmFnZVVwZGF0ZSh0YXNrcyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3B1bGF0ZVRhc2tBcnJheTtcclxuIiwiaW1wb3J0IHRhc2tOb2RlIGZyb20gJy4vY3JlYXRlLXRhc2stbm9kZS5qcyc7XG5cbmV4cG9ydCBjb25zdCB0b0RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0by1kby1saXN0Jyk7XG5cbmNvbnN0IGRpc3BsYXlOb2RlID0gKG9iaikgPT4ge1xuICBjb25zdCBzZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICBjb25zdCB0YXNrUmV0dXJuID0gdGFza05vZGUob2JqKTtcbiAgdG9Eb0xpc3QuYXBwZW5kQ2hpbGQodGFza1JldHVybik7XG4gIHRhc2tSZXR1cm4uYWZ0ZXIoc2VwYXJhdG9yKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlOb2RlO1xuIiwiY29uc3QgZHluYW1pY1N0b3JhZ2VVcGRhdGUgPSAoc3RvcmVBcnIpID0+IHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza1N0b3JhZ2VBcnJheScsIEpTT04uc3RyaW5naWZ5KHN0b3JlQXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkeW5hbWljU3RvcmFnZVVwZGF0ZTtcclxuIiwiaW1wb3J0IHRhc2tzIGZyb20gJy4vdGFza3MtYXJyYXktbW9kdWxlLmpzJztcbmltcG9ydCBkeW5hbWljU3RvcmFnZVVwZGF0ZSBmcm9tICcuL2R5bmFtaWMtc3RvcmFnZS11cGRhdGUuanMnO1xuXG5jb25zdCBlZGl0VGFzayA9IChvYmosIGluZHgpID0+IHtcbiAgb2JqLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgb2JqLm9ua2V5ZG93biA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIG9iai5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xuICAgICAgdGFza3MuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5pbmRleCA9PT0gTnVtYmVyKGluZHgpKSB7XG4gICAgICAgICAgZS5kZXNjcmlwdGlvbiA9IG9iai5pbm5lclRleHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZHluYW1pY1N0b3JhZ2VVcGRhdGUodGFza3MpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRUYXNrO1xuIiwiY29uc3QgcmVPcmRlclRhc2tzID0gKGFycikgPT4ge1xuICBsZXQgaW5kZXhlciA9IDE7XG4gIGFyci5mb3JFYWNoKChlKSA9PiB7XG4gICAgZS5pbmRleCA9IGluZGV4ZXI7XG4gICAgaW5kZXhlciArPSAxO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlT3JkZXJUYXNrcztcbiIsImltcG9ydCB0YXNrcyBmcm9tICcuL3Rhc2tzLWFycmF5LW1vZHVsZS5qcyc7XG5pbXBvcnQgZHluYW1pY1N0b3JhZ2VVcGRhdGUgZnJvbSAnLi9keW5hbWljLXN0b3JhZ2UtdXBkYXRlLmpzJztcbmltcG9ydCByZU9yZGVyVGFza3MgZnJvbSAnLi9yZS1vcmRlci10YXNrcy5qcyc7XG5cbmNvbnN0IHJlbW92ZU5vZGUgPSAob2JqLCBjdXJyTm9kZSkgPT4ge1xuICBsZXQgZmxhZyA9IDA7XG4gIHRhc2tzLmZvckVhY2goKGUpID0+IHtcbiAgICBpZiAoZS5pbmRleCA9PT0gb2JqKSB7XG4gICAgICBmbGFnID0gdGFza3MuaW5kZXhPZihlKTtcbiAgICAgIGN1cnJOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY3Vyck5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgY3Vyck5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjdXJyTm9kZSk7XG4gICAgfVxuICB9KTtcbiAgdGFza3Muc3BsaWNlKGZsYWcsIDEpO1xuICByZU9yZGVyVGFza3ModGFza3MpO1xuICBkeW5hbWljU3RvcmFnZVVwZGF0ZSh0YXNrcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVOb2RlO1xuIiwiY2xhc3MgTmV3VGFza1RlbXBsYXRlIHtcbiAgY29uc3RydWN0b3Ioc3RyLCBib29sZSA9IGZhbHNlLCBudW0gPSAwKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IHN0cjtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGJvb2xlO1xuICAgIHRoaXMuaW5kZXggPSBudW07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3VGFza1RlbXBsYXRlO1xuIiwiY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrU3RvcmFnZUFycmF5JykpIHx8IFtdO1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrcztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLnRvLWRvLWxpc3QtYXBwLWNvbnRhaW5lciB7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFrZS1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1uZXctdGFzayB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbiNhcHAtbGFiZWwtdGFnIHtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgbWF4LXdpZHRoOiA0MCU7XFxyXFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyb3NzLW91dCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFrZS10YXNrLWNvbnRyb2xsZXItYWNjZXNzaWJsZSB7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyLWFsbC1jb21wbGV0ZWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNTIxKTtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsci1jb21wbGV0ZWQtYnRuIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbi50by1kby1saXN0LWFwcC1jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1ha2UtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtbmV3LXRhc2sge1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4jYXBwLWxhYmVsLXRhZyB7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIG1heC13aWR0aDogNDAlO1xcclxcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jcm9zcy1vdXQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLm1ha2UtdGFzay1jb250cm9sbGVyLWFjY2Vzc2libGUge1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjbGVhci1hbGwtY29tcGxldGVkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUyMSk7XFxyXFxufVxcclxcblxcclxcbiNjbHItY29tcGxldGVkLWJ0biB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMCk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNTUwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgdGFza3MgZnJvbSAnLi4vbW9kdWxlcy90YXNrcy1hcnJheS1tb2R1bGUuanMnO1xyXG5pbXBvcnQgeyBwb3B1bGF0ZVRhc2tBcnJheSB9IGZyb20gJy4uL21vZHVsZXMvY3JlYXRlLXRhc2tzLWFycmF5LmpzJztcclxuaW1wb3J0IGRpc3BsYXlOb2RlLCB7IHRvRG9MaXN0IH0gZnJvbSAnLi4vbW9kdWxlcy9kaXNwbGF5LXRhc2stbm9kZS5qcyc7XHJcbmltcG9ydCBkeW5hbWljU3RvcmFnZVVwZGF0ZSBmcm9tICcuLi9tb2R1bGVzL2R5bmFtaWMtc3RvcmFnZS11cGRhdGUuanMnO1xyXG5pbXBvcnQgcmVPcmRlclRhc2tzIGZyb20gJy4uL21vZHVsZXMvcmUtb3JkZXItdGFza3MuanMnO1xyXG5cclxuY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1uZXctdGFzaycpO1xyXG5jb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldC1idXR0b24nKTtcclxuY29uc3QgY2xlYXJDb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xyLWNvbXBsZXRlZC1idG4nKTtcclxuXHJcbnRhc2tzLmZvckVhY2goKGUpID0+IHtcclxuICBkaXNwbGF5Tm9kZShlKTtcclxufSk7XHJcblxyXG50YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xyXG4gIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgIGlmICh0YXNrSW5wdXQudmFsdWUubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcG9wdWxhdGVUYXNrQXJyYXkodGFza0lucHV0LnZhbHVlKTtcclxuICAgIHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIH1cclxufSk7XHJcblxyXG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICB0YXNrcy5zcGxpY2UodGFza3NbMF0pO1xyXG4gIHdoaWxlICh0b0RvTGlzdC5maXJzdENoaWxkKSB7XHJcbiAgICB0b0RvTGlzdC5yZW1vdmVDaGlsZCh0b0RvTGlzdC5sYXN0Q2hpbGQpO1xyXG4gIH1cclxufSk7XHJcblxyXG5jbGVhckNvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zdCBmaWx0ZXJDb21wbGV0ZSA9IHRhc2tzLmZpbHRlcigoZSkgPT4gZS5jb21wbGV0ZWQgPT09IGZhbHNlKTtcclxuICByZU9yZGVyVGFza3MoZmlsdGVyQ29tcGxldGUpO1xyXG4gIGR5bmFtaWNTdG9yYWdlVXBkYXRlKGZpbHRlckNvbXBsZXRlKTtcclxuXHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9