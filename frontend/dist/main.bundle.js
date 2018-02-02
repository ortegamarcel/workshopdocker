webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__students_students_component__ = __webpack_require__("../../../../../src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rooms_rooms_component__ = __webpack_require__("../../../../../src/app/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lectures_lectures_component__ = __webpack_require__("../../../../../src/app/lectures/lectures.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'students', component: __WEBPACK_IMPORTED_MODULE_2__students_students_component__["a" /* StudentsComponent */] },
    { path: 'rooms', component: __WEBPACK_IMPORTED_MODULE_4__rooms_rooms_component__["a" /* RoomsComponent */] },
    { path: 'lectures', component: __WEBPACK_IMPORTED_MODULE_5__lectures_lectures_component__["a" /* LecturesComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__["a" /* SettingsComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <header class=\"header clearfix\">\r\n    <nav>\r\n      <ul class=\"nav nav-pills float-right\">\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/home\" routerLinkActive=\"active\" class=\"nav-link\">Startseite <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/students\" routerLinkActive=\"active\" class=\"nav-link\">Studenten</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/rooms\" routerLinkActive=\"active\" class=\"nav-link\">Räume</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/lectures\" routerLinkActive=\"active\" class=\"nav-link\">Vorlesungen</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a routerLink=\"/settings\" routerLinkActive=\"active\" class=\"nav-link\">Einstellungen</a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <h3 class=\"text-muted\">Microservices &amp; Docker</h3>\r\n  </header>\r\n\r\n  <main role=\"main\">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n\r\n  <footer class=\"footer\">\r\n\r\n  </footer>\r\n\r\n</div> <!-- /container -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(toastr, vcr) {
        this.toastr = toastr;
        this.title = 'Microservices & Docker';
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__students_students_component__ = __webpack_require__("../../../../../src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lectures_lectures_component__ = __webpack_require__("../../../../../src/app/lectures/lectures.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rooms_rooms_component__ = __webpack_require__("../../../../../src/app/rooms/rooms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings_settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__students_student_service__ = __webpack_require__("../../../../../src/app/students/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rooms_room_service__ = __webpack_require__("../../../../../src/app/rooms/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lectures_lecture_service__ = __webpack_require__("../../../../../src/app/lectures/lecture.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__students_students_component__["a" /* StudentsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__lectures_lectures_component__["a" /* LecturesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__rooms_rooms_component__["a" /* RoomsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__settings_settings_component__["a" /* SettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__settings_settings_service__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_13__students_student_service__["a" /* StudentService */],
                __WEBPACK_IMPORTED_MODULE_14__rooms_room_service__["a" /* RoomService */],
                __WEBPACK_IMPORTED_MODULE_15__lectures_lecture_service__["a" /* LectureService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1 class=\"display-4\">Herzlich Willkommen beim IWS-Workshop</h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lectures/lecture.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LectureService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LectureService = (function () {
    function LectureService(settingsService, http) {
        this.settingsService = settingsService;
        this.http = http;
    }
    LectureService.prototype.getAll = function () {
        return this.http.get(this.settingsService.lecturesUrl);
    };
    LectureService.prototype.delete = function (lecture) {
        return this.http.delete(this.settingsService.lecturesUrl + "/" + lecture.id);
    };
    LectureService.prototype.save = function (lecture) {
        return this.http.post(this.settingsService.lecturesUrl, lecture);
    };
    LectureService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LectureService);
    return LectureService;
}());



/***/ }),

/***/ "../../../../../src/app/lectures/lecture.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lecture; });
var Lecture = (function () {
    function Lecture() {
    }
    Lecture.prototype.toString = function () {
        return this.abbreviation;
    };
    return Lecture;
}());



/***/ }),

/***/ "../../../../../src/app/lectures/lectures.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lectures/lectures.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <form class=\"form col-lg-10\" (submit)=\"createLecture(newLecture)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input id=\"name\" type=\"text\" [(ngModel)]=\"newLecture.name\" name=\"name\" class=\"form-control\" placeholder=\"Name...\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"abbreviation\">Abkürzung</label>\r\n      <input id=\"abbreviation\" type=\"text\" [(ngModel)]=\"newLecture.abbreviation\" name=\"name\" class=\"form-control\" placeholder=\"Abkürzung...\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"room\">Raum</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"newLecture.room\" name=\"room\" id=\"room\">\r\n        <option *ngFor=\"let r of rooms\" [ngValue]=\"r\">{{r.name}}</option>\r\n      </select>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!newLecture.name || !newLecture.abbreviation || !newLecture.room\">Neue Vorlesung anlegen</button>\r\n  </form>\r\n</div>\r\n<table class=\"table\">\r\n  <tr>\r\n    <th>Id</th>\r\n    <th>Name</th>\r\n    <th>Abkürzung</th>\r\n    <th>Raum</th>\r\n    <th></th>\r\n  </tr>\r\n  <tr *ngFor=\"let lecture of lectures\">\r\n    <td>{{lecture.id}}</td>\r\n    <td>{{lecture.name}}</td>\r\n    <td>{{lecture.abbreviation}}</td>\r\n    <td *ngIf=\"lecture.room\">{{lecture.room.name}}</td>\r\n    <td><a href=\"#\" class=\"badge badge-danger\" (click)=\"deleteLecture(lecture, $event)\">Löschen</a></td>\r\n  </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/lectures/lectures.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LecturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lectures_lecture__ = __webpack_require__("../../../../../src/app/lectures/lecture.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lecture_service__ = __webpack_require__("../../../../../src/app/lectures/lecture.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rooms_room_service__ = __webpack_require__("../../../../../src/app/rooms/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LecturesComponent = (function () {
    function LecturesComponent(lectureService, roomService, toastr) {
        this.lectureService = lectureService;
        this.roomService = roomService;
        this.toastr = toastr;
    }
    LecturesComponent.prototype.ngOnInit = function () {
        this.newLecture = new __WEBPACK_IMPORTED_MODULE_1__lectures_lecture__["a" /* Lecture */]();
        this.reloadRooms();
        this.reloadLectures();
    };
    LecturesComponent.prototype.reloadRooms = function () {
        var _this = this;
        this.roomService.getAll().subscribe(function (rooms) {
            _this.rooms = rooms;
        });
    };
    LecturesComponent.prototype.reloadLectures = function () {
        var _this = this;
        this.lectureService.getAll().subscribe(function (lectures) {
            _this.lectures = lectures;
        });
    };
    LecturesComponent.prototype.createLecture = function (lecture) {
        var _this = this;
        if (!lecture.name || !lecture.abbreviation || !lecture.room) {
            alert('Bitte alle Felder ausfüllen');
        }
        this.lectureService.save(lecture).subscribe(function (v) {
            _this.reloadLectures();
            _this.reloadRooms();
            _this.toastr.success("Erfolgreich gespeichert!");
        });
        this.newLecture = new __WEBPACK_IMPORTED_MODULE_1__lectures_lecture__["a" /* Lecture */]();
    };
    LecturesComponent.prototype.deleteLecture = function (lecture, event) {
        var _this = this;
        event.preventDefault();
        this.lectureService.delete(lecture).subscribe(function (v) {
            _this.reloadLectures();
            _this.toastr.success("Erfolgreich gelöscht!");
        }, function (e) {
            _this.toastr.error("Konnte nicht gelöscht werden!");
        });
    };
    LecturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lectures',
            template: __webpack_require__("../../../../../src/app/lectures/lectures.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lectures/lectures.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__lecture_service__["a" /* LectureService */], __WEBPACK_IMPORTED_MODULE_3__rooms_room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"]])
    ], LecturesComponent);
    return LecturesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rooms/room.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoomService = (function () {
    function RoomService(settingsService, http) {
        this.settingsService = settingsService;
        this.http = http;
    }
    RoomService.prototype.getAll = function () {
        return this.http.get(this.settingsService.roomsUrl);
    };
    RoomService.prototype.delete = function (room) {
        return this.http.delete(this.settingsService.roomsUrl + "/" + room.id);
    };
    RoomService.prototype.save = function (room) {
        return this.http.post(this.settingsService.roomsUrl, room);
    };
    RoomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], RoomService);
    return RoomService;
}());



/***/ }),

/***/ "../../../../../src/app/rooms/room.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
var Room = (function () {
    function Room() {
    }
    return Room;
}());



/***/ }),

/***/ "../../../../../src/app/rooms/rooms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rooms/rooms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <form class=\"form col-lg-10\" (submit)=\"createRoom(newRoom)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Raumname</label>\r\n      <input id=\"name\" type=\"text\" [(ngModel)]=\"newRoom.name\" name=\"name\" class=\"form-control\"\r\n             placeholder=\"Raumname...\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!newRoom.name\">Neuen Raum anlegen</button>\r\n  </form>\r\n</div>\r\n<table class=\"table\">\r\n  <tr>\r\n    <th>Id</th>\r\n    <th>Raumname</th>\r\n    <th></th>\r\n  </tr>\r\n  <tr *ngFor=\"let room of rooms\">\r\n    <td>{{room.id}}</td>\r\n    <td>{{room.name}}</td>\r\n    <td><a href=\"#\" class=\"badge badge-danger\" (click)=\"deleteRoom(room, $event)\">Löschen</a></td>\r\n  </tr>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/rooms/rooms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__room__ = __webpack_require__("../../../../../src/app/rooms/room.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_service__ = __webpack_require__("../../../../../src/app/rooms/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomsComponent = (function () {
    function RoomsComponent(roomService, toastr) {
        this.roomService = roomService;
        this.toastr = toastr;
    }
    RoomsComponent.prototype.ngOnInit = function () {
        this.newRoom = new __WEBPACK_IMPORTED_MODULE_1__room__["a" /* Room */]();
        this.reloadRooms();
    };
    RoomsComponent.prototype.reloadRooms = function () {
        var _this = this;
        this.roomService.getAll().subscribe(function (rooms) {
            _this.rooms = rooms;
        });
    };
    RoomsComponent.prototype.createRoom = function (room) {
        var _this = this;
        if (!room.name) {
            alert('Bitte alle Felder ausfüllen');
        }
        this.roomService.save(room).subscribe(function (s) {
            _this.reloadRooms();
            _this.toastr.success("Erfolgreich gespeichert!");
        });
        this.newRoom = new __WEBPACK_IMPORTED_MODULE_1__room__["a" /* Room */]();
    };
    RoomsComponent.prototype.deleteRoom = function (room, event) {
        var _this = this;
        event.preventDefault();
        this.roomService.delete(room).subscribe(function (v) {
            _this.reloadRooms();
            _this.toastr.success("Erfolgreich gelöscht!");
        }, function (error) {
            _this.toastr.error("Konnte nicht gelöscht werden!");
        });
    };
    RoomsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rooms',
            template: __webpack_require__("../../../../../src/app/rooms/rooms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rooms/rooms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__room_service__["a" /* RoomService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"]])
    ], RoomsComponent);
    return RoomsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <form class=\"form col-lg-10\" (submit)=\"saveSettings(newSettings)\">\r\n    <p>\r\n      <ngb-alert [dismissible]=\"false\" type=\"success\" *ngIf=\"savedSuccessfully\">\r\n        <strong>Gespeichert!</strong> Neue Einstellungen wurden gespeichert.\r\n      </ngb-alert>\r\n    </p>\r\n    <div class=\"form-group\">\r\n      <label for=\"rooms\">Räume</label>\r\n      <input id=\"rooms\" type=\"text\" [(ngModel)]=\"newSettings.rooms\" name=\"rooms\" class=\"form-control\" placeholder=\"Räume-URL...\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"lectures\">Vorlesungen</label>\r\n      <input id=\"lectures\" type=\"text\" [(ngModel)]=\"newSettings.lectures\" name=\"lectures\" class=\"form-control\" placeholder=\"Vorlesungen-URL...\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"students\">Studenten</label>\r\n      <input id=\"students\" type=\"text\" [(ngModel)]=\"newSettings.students\" name=\"students\" class=\"form-control\" placeholder=\"Studenten-URL...\">\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!newSettings.rooms || !newSettings.lectures || !newSettings.students\">Einstellungen speichern</button>\r\n    <button type=\"reset\" class=\"btn btn-error\" (click)=\"reset()\">Default-Einstellungen laden</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lectures_lecture_service__ = __webpack_require__("../../../../../src/app/lectures/lecture.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__students_student_service__ = __webpack_require__("../../../../../src/app/students/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rooms_room_service__ = __webpack_require__("../../../../../src/app/rooms/room.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsComponent = (function () {
    function SettingsComponent(settingsService, lectureService, roomService, studentService, toastr) {
        var _this = this;
        this.settingsService = settingsService;
        this.lectureService = lectureService;
        this.roomService = roomService;
        this.studentService = studentService;
        this.toastr = toastr;
        this._successAlertCloser = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.newSettings = {};
        this.savedSuccessfully = false;
        this._successAlertCloser.debounceTime(3000).subscribe(function () {
            _this.savedSuccessfully = false;
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.newSettings.rooms = this.settingsService.roomsUrl;
        this.newSettings.students = this.settingsService.studentsUrl;
        this.newSettings.lectures = this.settingsService.lecturesUrl;
        this.testUrls();
    };
    SettingsComponent.prototype.saveSettings = function (settings) {
        this.settingsService.roomsUrl = settings.rooms;
        this.settingsService.studentsUrl = settings.students;
        this.settingsService.lecturesUrl = settings.lectures;
        this.savedSuccessfully = true;
        this._successAlertCloser.next(true);
        this.settingsService.persistSettings();
        this.testUrls();
    };
    SettingsComponent.prototype.reset = function () {
        this.settingsService.setDefaultUrls();
        location.reload(true);
    };
    SettingsComponent.prototype.testUrls = function () {
        var _this = this;
        this.toastr.clearAllToasts();
        this.roomService.getAll().subscribe(function (rooms) {
            _this.toastr.success("URL für RoomService erreichbar!");
        }, function (error) {
            _this.toastr.error("URL für RoomService nicht erreichbar!");
        });
        this.studentService.getAll().subscribe(function (rooms) {
            _this.toastr.success("URL für StudentService erreichbar!");
        }, function (error) {
            _this.toastr.error("URL für StudentService nicht erreichbar!");
        });
        this.lectureService.getAll().subscribe(function (rooms) {
            _this.toastr.success("URL für LectureService erreichbar!");
        }, function (error) {
            _this.toastr.error("URL für LectureService nicht erreichbar!");
        });
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_4__lectures_lecture_service__["a" /* LectureService */],
            __WEBPACK_IMPORTED_MODULE_6__rooms_room_service__["a" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_5__students_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__["ToastsManager"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = (function () {
    function SettingsService() {
        var storedSettings = localStorage.getItem('settings');
        if (storedSettings) {
            var storedSettingsJson = JSON.parse(storedSettings);
            Object.assign(this, storedSettingsJson);
        }
        else {
            this.setDefaultUrls();
        }
    }
    SettingsService.prototype.setDefaultUrls = function () {
        this.lecturesUrl = "http://localhost:8070/lectures";
        this.roomsUrl = "http://localhost:8080/rooms";
        this.studentsUrl = "http://localhost:8090/students";
        this.persistSettings();
    };
    SettingsService.prototype.persistSettings = function () {
        localStorage.setItem('settings', JSON.stringify(this));
    };
    SettingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../../../../src/app/students/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__ = __webpack_require__("../../../../../src/app/settings/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentService = (function () {
    function StudentService(settingsService, http) {
        this.settingsService = settingsService;
        this.http = http;
    }
    StudentService.prototype.getAll = function () {
        return this.http.get(this.settingsService.studentsUrl);
    };
    StudentService.prototype.delete = function (student) {
        return this.http.delete(this.settingsService.studentsUrl + "/" + student.id);
    };
    StudentService.prototype.save = function (student) {
        return this.http.post(this.settingsService.studentsUrl, student);
    };
    StudentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__settings_settings_service__["a" /* SettingsService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "../../../../../src/app/students/student.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
var Student = (function () {
    function Student() {
    }
    return Student;
}());



/***/ }),

/***/ "../../../../../src/app/students/students.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <form class=\"form col-lg-10\" (submit)=\"createStudent(newStudent)\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input id=\"name\" type=\"text\" [(ngModel)]=\"newStudent.name\" name=\"name\" class=\"form-control\" placeholder=\"Name...\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"room\">Vorlesungen</label>\r\n      <select class=\"form-control\" [(ngModel)]=\"newStudent.lectures\" name=\"room\" id=\"room\" multiple>\r\n        <option *ngFor=\"let l of lectures\" [ngValue]=\"l\">{{l.abbreviation}} - {{l.name}}</option>\r\n      </select>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!newStudent.name\">Neuen Studenten anlegen</button>\r\n  </form>\r\n</div>\r\n<table class=\"table\">\r\n  <tr>\r\n    <th>Id</th>\r\n    <th>Name</th>\r\n    <th>Vorlesungen</th>\r\n    <th></th>\r\n  </tr>\r\n  <tr *ngFor=\"let student of students\">\r\n    <td>{{student.id}}</td>\r\n    <td>{{student.name}}</td>\r\n    <td>{{getLectures(student)}}</td>\r\n    <td><a href=\"#\" class=\"badge badge-danger\" (click)=\"deleteStudent(student, $event)\">Löschen</a></td>\r\n  </tr>\r\n</table>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student__ = __webpack_require__("../../../../../src/app/students/student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__student_service__ = __webpack_require__("../../../../../src/app/students/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lectures_lecture_service__ = __webpack_require__("../../../../../src/app/lectures/lecture.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentsComponent = (function () {
    function StudentsComponent(studentService, lectureService, toastr) {
        this.studentService = studentService;
        this.lectureService = lectureService;
        this.toastr = toastr;
    }
    StudentsComponent.prototype.ngOnInit = function () {
        this.newStudent = new __WEBPACK_IMPORTED_MODULE_1__student__["a" /* Student */]();
        this.reloadStudents();
        this.reloadLectures();
    };
    StudentsComponent.prototype.reloadStudents = function () {
        var _this = this;
        this.studentService.getAll().subscribe(function (students) {
            _this.students = students;
        });
    };
    StudentsComponent.prototype.reloadLectures = function () {
        var _this = this;
        this.lectureService.getAll().subscribe(function (lectures) {
            _this.lectures = lectures;
        });
    };
    StudentsComponent.prototype.createStudent = function (student) {
        var _this = this;
        if (!student.name) {
            alert('Bitte alle Felder ausfüllen');
        }
        this.studentService.save(student).subscribe(function (v) {
            _this.reloadStudents();
            _this.reloadLectures();
            _this.toastr.success("Erfolgreich gespeichert!");
        });
        this.newStudent = new __WEBPACK_IMPORTED_MODULE_1__student__["a" /* Student */]();
    };
    StudentsComponent.prototype.getLectures = function (student) {
        var lecturesToString = [];
        student.lectures.forEach(function (lecture) {
            lecturesToString.push(lecture.name + " (" + lecture.abbreviation + ")");
        });
        return lecturesToString.join(", ");
    };
    StudentsComponent.prototype.deleteStudent = function (student, event) {
        var _this = this;
        event.preventDefault();
        this.studentService.delete(student).subscribe(function (v) {
            _this.reloadStudents();
            _this.toastr.success("Erfolgreich gelöscht!");
        }, function (error) {
            _this.toastr.error("Konnte nicht gelöscht werden!");
        });
    };
    StudentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-students',
            template: __webpack_require__("../../../../../src/app/students/students.component.html"),
            styles: [__webpack_require__("../../../../../src/app/students/students.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__student_service__["a" /* StudentService */], __WEBPACK_IMPORTED_MODULE_3__lectures_lecture_service__["a" /* LectureService */], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr__["ToastsManager"]])
    ], StudentsComponent);
    return StudentsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map