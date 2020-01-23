(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _page_students_page_students_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/students-page/students-page.component */ "./src/app/page/students-page/students-page.component.ts");
/* harmony import */ var _service_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/can-activate-auth.guard */ "./src/app/service/can-activate-auth.guard.ts");
/* harmony import */ var _page_student_details_page_student_details_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/student-details-page/student-details-page.component */ "./src/app/page/student-details-page/student-details-page.component.ts");
/* harmony import */ var _page_exams_page_exams_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/exams-page/exams-page.component */ "./src/app/page/exams-page/exams-page.component.ts");
/* harmony import */ var _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/page-not-found/page-not-found.component */ "./src/app/page/page-not-found/page-not-found.component.ts");









var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'studenti', component: _page_students_page_students_page_component__WEBPACK_IMPORTED_MODULE_4__["StudentsPageComponent"], canActivate: [_service_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_5__["CanActivateAuthGuard"]] },
    { path: 'studenti/:id', component: _page_student_details_page_student_details_page_component__WEBPACK_IMPORTED_MODULE_6__["StudentDetailsPageComponent"], canActivate: [_service_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_5__["CanActivateAuthGuard"]] },
    { path: 'studenti/:id/predmeti', component: _page_exams_page_exams_page_component__WEBPACK_IMPORTED_MODULE_7__["ExamsPageComponent"], canActivate: [_service_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_5__["CanActivateAuthGuard"]] },
    { path: '', redirectTo: 'studenti', pathMatch: 'full' },
    { path: '**', component: _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Studentska služba\n</h1>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/student-list/student-list.component.ts");
/* harmony import */ var _page_student_details_page_student_details_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/student-details-page/student-details-page.component */ "./src/app/page/student-details-page/student-details-page.component.ts");
/* harmony import */ var _page_students_page_students_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/students-page/students-page.component */ "./src/app/page/students-page/students-page.component.ts");
/* harmony import */ var _student_list_item_student_list_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./student-list-item/student-list-item.component */ "./src/app/student-list-item/student-list-item.component.ts");
/* harmony import */ var _page_exams_page_exams_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/exams-page/exams-page.component */ "./src/app/page/exams-page/exams-page.component.ts");
/* harmony import */ var _form_add_student_form_add_student_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form/add-student-form/add-student-form.component */ "./src/app/form/add-student-form/add-student-form.component.ts");
/* harmony import */ var _form_edit_student_form_edit_student_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form/edit-student-form/edit-student-form.component */ "./src/app/form/edit-student-form/edit-student-form.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/filter/filter.component.ts");
/* harmony import */ var _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page/page-not-found/page-not-found.component */ "./src/app/page/page-not-found/page-not-found.component.ts");
/* harmony import */ var _form_add_exam_form_add_exam_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form/add-exam-form/add-exam-form.component */ "./src/app/form/add-exam-form/add-exam-form.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./service/token-interceptor.service */ "./src/app/service/token-interceptor.service.ts");
/* harmony import */ var _service_authentication_service_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/authentication-service.service */ "./src/app/service/authentication-service.service.ts");
/* harmony import */ var _service_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/can-activate-auth.guard */ "./src/app/service/can-activate-auth.guard.ts");
/* harmony import */ var _service_jwt_utils_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/jwt-utils.service */ "./src/app/service/jwt-utils.service.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_7__["StudentListComponent"],
                _page_student_details_page_student_details_page_component__WEBPACK_IMPORTED_MODULE_8__["StudentDetailsPageComponent"],
                _page_students_page_students_page_component__WEBPACK_IMPORTED_MODULE_9__["StudentsPageComponent"],
                _student_list_item_student_list_item_component__WEBPACK_IMPORTED_MODULE_10__["StudentListItemComponent"],
                _page_exams_page_exams_page_component__WEBPACK_IMPORTED_MODULE_11__["ExamsPageComponent"],
                _form_add_student_form_add_student_form_component__WEBPACK_IMPORTED_MODULE_12__["AddStudentFormComponent"],
                _form_edit_student_form_edit_student_form_component__WEBPACK_IMPORTED_MODULE_13__["EditStudentFormComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_14__["SearchComponent"],
                _filter_filter_component__WEBPACK_IMPORTED_MODULE_15__["FilterComponent"],
                _page_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                _form_add_exam_form_add_exam_form_component__WEBPACK_IMPORTED_MODULE_17__["AddExamFormComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["TokenInterceptorService"],
                    multi: true
                },
                _service_authentication_service_service__WEBPACK_IMPORTED_MODULE_20__["AuthenticationService"],
                _service_can_activate_auth_guard__WEBPACK_IMPORTED_MODULE_21__["CanActivateAuthGuard"],
                _service_jwt_utils_service__WEBPACK_IMPORTED_MODULE_22__["JwtUtilsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter/filter.component.css":
/*!*********************************************!*\
  !*** ./src/app/filter/filter.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/filter/filter.component.html":
/*!**********************************************!*\
  !*** ./src/app/filter/filter.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <label for=\"filter-grade\">Prosecna ocena:</label>\n  <input name=\"filter-grade\" type=\"text\" [(ngModel)] = \"averageGrade\"/>\n  <button type=\"button\" (click)=\"filterByAvgGradeGraterThan()\">Prikaži</button>\n  <br/>\n  <button type=\"button\" (click)=\"filterByMaxGrade()\">Student sa najvšom prosečnom ocenom</button>\n  <br/>\n  <button type=\"button\" (click)=\"sortByAvgGrade(orderTypes.asc)\">Sortiraj po prosečnoj oceni (asc)</button>\n  <br/>\n  <button type=\"button\" (click)=\"sortByAvgGrade(orderTypes.desc)\">Sortiraj po prosečnoj oceni (desc)</button>\n  <br/>\n  <button type=\"button\" (click)=\"filterByNextYearCondition()\">Pronadji za upis naredne godine</button>\n  <br/>\n  <button type=\"button\" (click)=\"reset()\">Poništi filtere</button>\n</div>\n"

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/*!********************************************!*\
  !*** ./src/app/filter/filter.component.ts ***!
  \********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/order.model */ "./src/app/model/order.model.ts");



var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.orderTypes = _model_order_model__WEBPACK_IMPORTED_MODULE_2__["Order"];
        this.filteredByAvgGrade = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filteredByMaxGrade = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sortedByAvgGrade = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filteredByNextYearCondition = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resetFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.averageGrade = 0;
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    FilterComponent.prototype.filterByAvgGradeGraterThan = function () {
        this.filteredByAvgGrade.next(this.averageGrade);
    };
    FilterComponent.prototype.filterByMaxGrade = function () {
        this.filteredByMaxGrade.next();
    };
    FilterComponent.prototype.sortByAvgGrade = function (order) {
        this.sortedByAvgGrade.next(order);
    };
    FilterComponent.prototype.filterByNextYearCondition = function () {
        this.filteredByNextYearCondition.next();
    };
    FilterComponent.prototype.reset = function () {
        this.resetFilter.next();
        this.averageGrade = 0;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FilterComponent.prototype, "filteredByAvgGrade", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FilterComponent.prototype, "filteredByMaxGrade", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FilterComponent.prototype, "sortedByAvgGrade", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FilterComponent.prototype, "filteredByNextYearCondition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FilterComponent.prototype, "resetFilter", void 0);
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/filter/filter.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/filter/filter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/form/add-exam-form/add-exam-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/form/add-exam-form/add-exam-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vYWRkLWV4YW0tZm9ybS9hZGQtZXhhbS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/form/add-exam-form/add-exam-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/form/add-exam-form/add-exam-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDataFetched\">\n  <form (ngSubmit)=\"addExam()\">\n    <label for=\"exam-subject\">Predmet:</label>\n    <select class=\"form-control\" id=\"exam-subject\" required [(ngModel)]=\"examToAdd.course.id\" name=\"exam-subject\">\n      <option *ngFor=\"let subject of subjects;\" [value]=\"subject.id\">{{subject.name}}</option>\n    </select>\n    <br/>\n    <label for=\"exam-grade\">Ocena:</label>\n    <input name=\"exam-grade\" type=\"text\" [(ngModel)]=\"examToAdd.grade\" />\n    <br/>\n    <input type=\"submit\" value=\"Dodaj\" />\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/form/add-exam-form/add-exam-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/form/add-exam-form/add-exam-form.component.ts ***!
  \***************************************************************/
/*! exports provided: AddExamFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExamFormComponent", function() { return AddExamFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_exam_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/exam.model */ "./src/app/model/exam.model.ts");
/* harmony import */ var _model_subject_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/subject.model */ "./src/app/model/subject.model.ts");




var AddExamFormComponent = /** @class */ (function () {
    function AddExamFormComponent() {
        this.examAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddExamFormComponent.prototype.ngOnInit = function () {
        this.resetExamToAdd();
    };
    AddExamFormComponent.prototype.addExam = function () {
        this.examAdded.next(this.examToAdd);
    };
    AddExamFormComponent.prototype.resetExamToAdd = function () {
        this.examToAdd = new _model_exam_model__WEBPACK_IMPORTED_MODULE_2__["Exam"]({
            grade: 0,
            course: new _model_subject_model__WEBPACK_IMPORTED_MODULE_3__["Subject"]({
                code: '',
                name: '',
                espb: 0
            })
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddExamFormComponent.prototype, "examAdded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AddExamFormComponent.prototype, "isDataFetched", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AddExamFormComponent.prototype, "subjects", void 0);
    AddExamFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-exam-form',
            template: __webpack_require__(/*! ./add-exam-form.component.html */ "./src/app/form/add-exam-form/add-exam-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./add-exam-form.component.css */ "./src/app/form/add-exam-form/add-exam-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddExamFormComponent);
    return AddExamFormComponent;
}());



/***/ }),

/***/ "./src/app/form/add-student-form/add-student-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/form/add-student-form/add-student-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vYWRkLXN0dWRlbnQtZm9ybS9hZGQtc3R1ZGVudC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/form/add-student-form/add-student-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/form/add-student-form/add-student-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form (ngSubmit) = \"addStudent()\">\n    <label for=\"student-number\">Indeks</label>\n    <input name=\"student-number\" type=\"text\" [(ngModel)] = \"studentToAdd.cardNumber\" placeholder=\"Indeks\"/>\n    <br/>\n    <label for=\"student-firstname\">Ime:</label>\n    <input name=\"student-firstname\" type=\"text\" [(ngModel)] = \"studentToAdd.firstName\" placeholder=\"Ime\"/>\n    <br/>\n    <label for=\"student-lastname\">Prezime:</label>\n    <input name=\"student-lastname\" type=\"text\" [(ngModel)] = \"studentToAdd.lastName\" placeholder=\"Prezime\"/>\n    <br/>\n    <input type=\"submit\" value=\"Dodaj\"/>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/form/add-student-form/add-student-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/form/add-student-form/add-student-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddStudentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentFormComponent", function() { return AddStudentFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_student_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/student.model */ "./src/app/model/student.model.ts");



var AddStudentFormComponent = /** @class */ (function () {
    function AddStudentFormComponent() {
        this.studentAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddStudentFormComponent.prototype.ngOnInit = function () {
        this.resetStudentToAdd();
    };
    AddStudentFormComponent.prototype.addStudent = function () {
        this.studentAdded.next(this.studentToAdd);
        this.resetStudentToAdd();
    };
    AddStudentFormComponent.prototype.resetStudentToAdd = function () {
        this.studentToAdd = new _model_student_model__WEBPACK_IMPORTED_MODULE_2__["Student"]({
            firstName: '',
            lastName: '',
            cardNumber: ''
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddStudentFormComponent.prototype, "studentAdded", void 0);
    AddStudentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-student-form',
            template: __webpack_require__(/*! ./add-student-form.component.html */ "./src/app/form/add-student-form/add-student-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./add-student-form.component.css */ "./src/app/form/add-student-form/add-student-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddStudentFormComponent);
    return AddStudentFormComponent;
}());



/***/ }),

/***/ "./src/app/form/edit-student-form/edit-student-form.component.css":
/*!************************************************************************!*\
  !*** ./src/app/form/edit-student-form/edit-student-form.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZWRpdC1zdHVkZW50LWZvcm0vZWRpdC1zdHVkZW50LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/form/edit-student-form/edit-student-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/form/edit-student-form/edit-student-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form (ngSubmit) = \"editStudent()\">\n    <label for=\"student-number\">Indeks</label>\n    <input name=\"student-number\" type=\"text\" [(ngModel)] = \"studentToEdit.cardNumber\" disabled placeholder=\"Indeks\"/>\n    <br/>\n    <label for=\"student-firstname\">Ime:</label>\n    <input name=\"student-firstname\" type=\"text\" [(ngModel)] = \"studentToEdit.firstName\" placeholder=\"Ime\"/>\n    <br/>\n    <label for=\"student-lastname\">Prezime:</label>\n    <input name=\"student-lastname\" type=\"text\" [(ngModel)] = \"studentToEdit.lastName\" placeholder=\"Prezime\"/>\n    <br/>\n    <input type=\"submit\" value=\"Izmeni\"/>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/form/edit-student-form/edit-student-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/form/edit-student-form/edit-student-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditStudentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudentFormComponent", function() { return EditStudentFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_student_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/student.model */ "./src/app/model/student.model.ts");



var EditStudentFormComponent = /** @class */ (function () {
    function EditStudentFormComponent() {
        this.studentEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EditStudentFormComponent.prototype.ngOnInit = function () {
    };
    EditStudentFormComponent.prototype.editStudent = function () {
        this.studentEdited.next(this.studentToEdit);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], EditStudentFormComponent.prototype, "studentEdited", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_student_model__WEBPACK_IMPORTED_MODULE_2__["Student"])
    ], EditStudentFormComponent.prototype, "studentToEdit", void 0);
    EditStudentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-student-form',
            template: __webpack_require__(/*! ./edit-student-form.component.html */ "./src/app/form/edit-student-form/edit-student-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./edit-student-form.component.css */ "./src/app/form/edit-student-form/edit-student-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditStudentFormComponent);
    return EditStudentFormComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"login()\">\n  <h2>Please sign in</h2>\n  <label for=\"username\">Username</label>\n  <input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required autofocus>\n  <label for=\"inputPassword\">Password</label>\n  <input type=\"password\" id=\"inputPassword\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required>\n  <button type=\"submit\">Sign in</button>\n</form>\n<div *ngIf=wrongUsernameOrPass role=\"alert\">\n  Wrong username or password.\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication-service.service */ "./src/app/service/authentication-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['/studenti']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/exam.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/exam.model.ts ***!
  \*************************************/
/*! exports provided: Exam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exam", function() { return Exam; });
var Exam = /** @class */ (function () {
    function Exam(exam) {
        this.course = exam.course;
        this.grade = exam.grade;
    }
    return Exam;
}());



/***/ }),

/***/ "./src/app/model/order.model.ts":
/*!**************************************!*\
  !*** ./src/app/model/order.model.ts ***!
  \**************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order;
(function (Order) {
    Order["asc"] = "ASC";
    Order["desc"] = "DESC";
})(Order || (Order = {}));


/***/ }),

/***/ "./src/app/model/student.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/student.model.ts ***!
  \****************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student(studentCfg) {
        this.id = studentCfg.id;
        this.firstName = studentCfg.firstName;
        this.lastName = studentCfg.lastName;
        this.cardNumber = studentCfg.cardNumber;
        this.exams = studentCfg.exams || [];
    }
    Student.prototype.indexOfExam = function (code) {
        for (var i = 0; i < this.exams.length; i++) {
            var exam = this.exams[i];
            if (exam.course.code === code) {
                return i;
            }
        }
        return -1;
    };
    Student.prototype.findExam = function (code) {
        var idx = this.indexOfExam(code);
        if (idx !== -1) {
            return this.exams[idx];
        }
    };
    Student.prototype.deleteExam = function (code) {
        var idx = this.indexOfExam(code);
        var examFound = idx !== -1;
        if (examFound) {
            this.exams.splice(idx, 1);
        }
        return examFound;
    };
    Student.prototype.updateExam = function (updated) {
        var exam = this.findExam(updated.course.code);
        if (exam) {
            exam.grade = updated.grade;
        }
    };
    Student.prototype.averageGrade = function () {
        if (!this.exams.length) {
            return 0;
        }
        var sum = 0;
        this.exams.forEach(function (exam) {
            sum += exam.grade;
        });
        return sum / this.exams.length;
    };
    Student.prototype.pointTotal = function () {
        return this.exams.reduce(function (total, exam) { return total + exam.course.espb; }, 0);
    };
    return Student;
}());



/***/ }),

/***/ "./src/app/model/subject.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/subject.model.ts ***!
  \****************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
var Subject = /** @class */ (function () {
    function Subject(subjectCfg) {
        this.id = subjectCfg.id;
        this.code = subjectCfg.code;
        this.name = subjectCfg.name;
        this.espb = subjectCfg.espb;
    }
    return Subject;
}());



/***/ }),

/***/ "./src/app/page/exams-page/exams-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/page/exams-page/exams-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvZXhhbXMtcGFnZS9leGFtcy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page/exams-page/exams-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/page/exams-page/exams-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul>\n    <li *ngFor=\"let exam of exams\">\n      <div>Predmet:{{exam.course.name}}</div>\n      <div>Espb:{{exam.course.espb}}</div>\n      <div>Ocena: {{exam.grade}}</div>\n    </li>\n  </ul>\n  <app-add-exam-form \n    [isDataFetched]=\"isDataFetched\"\n    [subjects]=\"subjects\"\n    (examAdded)=\"addExam($event)\">\n  </app-add-exam-form>\n</div>"

/***/ }),

/***/ "./src/app/page/exams-page/exams-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/exams-page/exams-page.component.ts ***!
  \*********************************************************/
/*! exports provided: ExamsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsPageComponent", function() { return ExamsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ExamsPageComponent = /** @class */ (function () {
    function ExamsPageComponent(route, http) {
        this.route = route;
        this.http = http;
        this.isDataFetched = false;
    }
    ExamsPageComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ExamsPageComponent.prototype.filterNonPassedSubjects = function (allSubjects) {
        var passedSubjects = this.exams.map(function (e) { return e.course.id; });
        this.subjects = allSubjects.filter(function (s) { return !passedSubjects.includes(s.id); });
    };
    ExamsPageComponent.prototype.addExam = function (exam) {
        var _this = this;
        this.http.post("api/students/" + this.id + "/exams", exam).subscribe(function (res) {
            _this.loadData();
        });
    };
    ExamsPageComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.id = +param['id'];
            _this.http.get("api/students/" + _this.id).subscribe(function (res) {
                var student = res;
                _this.exams = student.exams;
                _this.http.get("api/courses").subscribe(function (res) {
                    _this.filterNonPassedSubjects(res);
                    _this.isDataFetched = true;
                });
            });
        });
    };
    ExamsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exams-page',
            template: __webpack_require__(/*! ./exams-page.component.html */ "./src/app/page/exams-page/exams-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./exams-page.component.css */ "./src/app/page/exams-page/exams-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ExamsPageComponent);
    return ExamsPageComponent;
}());



/***/ }),

/***/ "./src/app/page/page-not-found/page-not-found.component.css":
/*!******************************************************************!*\
  !*** ./src/app/page/page-not-found/page-not-found.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/page/page-not-found/page-not-found.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/page/page-not-found/page-not-found.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  Wrong page buddy :)\n</h1>\n"

/***/ }),

/***/ "./src/app/page/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/page/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page/page-not-found/page-not-found.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/page/student-details-page/student-details-page.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/page/student-details-page/student-details-page.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvc3R1ZGVudC1kZXRhaWxzLXBhZ2Uvc3R1ZGVudC1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/page/student-details-page/student-details-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/page/student-details-page/student-details-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Informacije o studentu</h1>\n  <div>Indeks: {{student.cardNumber}}</div>\n  <div>Ime: {{student.firstName}}</div>\n  <div>Prezime: {{student.lastName}}</div>\n  <a [routerLink]=\"['./predmeti']\">Spisak položenih ispita</a>\n</div>\n"

/***/ }),

/***/ "./src/app/page/student-details-page/student-details-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/page/student-details-page/student-details-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StudentDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsPageComponent", function() { return StudentDetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_student_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/student.model */ "./src/app/model/student.model.ts");





var StudentDetailsPageComponent = /** @class */ (function () {
    function StudentDetailsPageComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    StudentDetailsPageComponent.prototype.ngOnInit = function () {
        this.resetStudent();
        this.loadData();
    };
    StudentDetailsPageComponent.prototype.loadData = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            _this.id = +param['id'];
            _this.http.get("api/students/" + _this.id).subscribe(function (res) {
                _this.student = res;
            });
        });
    };
    StudentDetailsPageComponent.prototype.resetStudent = function () {
        this.student = new _model_student_model__WEBPACK_IMPORTED_MODULE_4__["Student"]({
            firstName: '',
            lastName: '',
            cardNumber: ''
        });
    };
    StudentDetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-details',
            template: __webpack_require__(/*! ./student-details-page.component.html */ "./src/app/page/student-details-page/student-details-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./student-details-page.component.css */ "./src/app/page/student-details-page/student-details-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StudentDetailsPageComponent);
    return StudentDetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/page/students-page/students-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/page/students-page/students-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvc3R1ZGVudHMtcGFnZS9zdHVkZW50cy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page/students-page/students-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/page/students-page/students-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Studenti</h1>\n\n<span>\n    <app-search (setSearchTerm)=\"search($event)\"></app-search>\n    <br/>\n    <app-filter \n        (filteredByAvgGrade)=\"filterByAvgGrade($event)\"\n        (filteredByMaxGrade)=\"filterByMaxGrade()\"\n        (filteredByNextYearCondition)=\"filterByNextYearCondition()\"\n        (sortedByAvgGrade)=\"sortByGrade($event)\"\n        (resetFilter)=\"loadData()\">\n    </app-filter>\n</span>\n<br/>\n<app-student-list [students]=\"students\" [isAdministrator]=\"isAdministrator\" (studentDeleted)=\"deleteStudent($event)\" (markStudentForEditing)=\"setActiveStudent($event)\"></app-student-list>\n<br/>\n<app-add-student-form *ngIf=\"isAdministrator\" (studentAdded)=\"addStudent($event)\"></app-add-student-form>\n<br/>\n<app-edit-student-form *ngIf=\"isAdministrator\" (studentEdited)=\"editStudent($event)\" [studentToEdit]=\"activeStudent\"></app-edit-student-form>"

/***/ }),

/***/ "./src/app/page/students-page/students-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/page/students-page/students-page.component.ts ***!
  \***************************************************************/
/*! exports provided: StudentsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPageComponent", function() { return StudentsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_student_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/student.model */ "./src/app/model/student.model.ts");
/* harmony import */ var _service_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/authentication-service.service */ "./src/app/service/authentication-service.service.ts");





var StudentsPageComponent = /** @class */ (function () {
    function StudentsPageComponent(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    StudentsPageComponent.prototype.ngOnInit = function () {
        this.isAdministrator = this.authenticationService.getCurrentUser().roles.indexOf('ADMINISTRATOR') !== -1;
        this.resetActiveStudent();
        this.loadData();
    };
    StudentsPageComponent.prototype.loadData = function () {
        var _this = this;
        this.http.get('api/students').subscribe(function (res) {
            _this.students = res;
        });
    };
    StudentsPageComponent.prototype.addStudent = function (student) {
        var _this = this;
        this.http.post('api/students', student).subscribe(function (res) {
            _this.loadData();
        });
    };
    StudentsPageComponent.prototype.deleteStudent = function (id) {
        var _this = this;
        this.http.delete("api/students/" + id).subscribe(function (res) {
            _this.loadData();
        });
    };
    StudentsPageComponent.prototype.editStudent = function (student) {
        var _this = this;
        this.http.put("api/students/" + student.id, student).subscribe(function (res) {
            _this.resetActiveStudent();
            _this.loadData();
        });
    };
    StudentsPageComponent.prototype.setActiveStudent = function (student) {
        this.activeStudent = new _model_student_model__WEBPACK_IMPORTED_MODULE_3__["Student"](student);
    };
    StudentsPageComponent.prototype.search = function (cardNumber) {
        var _this = this;
        this.http.get("api/students?cardNumber=" + cardNumber).subscribe(function (res) {
            _this.students = res;
        });
    };
    StudentsPageComponent.prototype.resetActiveStudent = function () {
        this.activeStudent = new _model_student_model__WEBPACK_IMPORTED_MODULE_3__["Student"]({
            cardNumber: '',
            firstName: '',
            lastName: '',
        });
    };
    StudentsPageComponent.prototype.filterByAvgGrade = function (grade) {
        var _this = this;
        this.http.get("api/students?averageGreaterThan=" + grade).subscribe(function (res) {
            _this.students = res;
        });
    };
    StudentsPageComponent.prototype.filterByMaxGrade = function () {
        var _this = this;
        this.http.get("api/students/maxAverage").subscribe(function (res) {
            _this.students = res;
        });
    };
    StudentsPageComponent.prototype.filterByNextYearCondition = function () {
        var _this = this;
        this.http.get("api/students/forNextYear").subscribe(function (res) {
            _this.students = res;
        });
    };
    StudentsPageComponent.prototype.sortByGrade = function (order) {
        var _this = this;
        this.http.get("api/students?sortBy=" + order).subscribe(function (res) {
            _this.students = res;
        });
    };
    StudentsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-students-page',
            template: __webpack_require__(/*! ./students-page.component.html */ "./src/app/page/students-page/students-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./students-page.component.css */ "./src/app/page/students-page/students-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], StudentsPageComponent);
    return StudentsPageComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <span>\n    <form (ngSubmit)=\"search()\">\n      <label for=\"search-by-card-number\">Broj indeksa:</label>\n      <input name=\"search-by-card-number\" type=\"text\" [(ngModel)]=\"searchTerm\" />\n      <input type=\"submit\" value=\"Traži\" />\n    </form>\n    <button type=\"button\" (click)=\"reset()\">Poništi pretragu</button>\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.setSearchTerm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchTerm = "";
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function () {
        this.setSearchTerm.next(this.searchTerm);
    };
    SearchComponent.prototype.reset = function () {
        this.searchTerm = "";
        this.setSearchTerm.next(this.searchTerm);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SearchComponent.prototype, "setSearchTerm", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/service/authentication-service.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/service/authentication-service.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _jwt_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt-utils.service */ "./src/app/service/jwt-utils.service.ts");





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username: username, password: password }), { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            var token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    roles: _this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        }));
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() != '')
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _jwt_utils_service__WEBPACK_IMPORTED_MODULE_4__["JwtUtilsService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/can-activate-auth.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/service/can-activate-auth.guard.ts ***!
  \****************************************************/
/*! exports provided: CanActivateAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateAuthGuard", function() { return CanActivateAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-service.service */ "./src/app/service/authentication-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CanActivateAuthGuard = /** @class */ (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    CanActivateAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "./src/app/service/jwt-utils.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/jwt-utils.service.ts ***!
  \**********************************************/
/*! exports provided: JwtUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUtilsService", function() { return JwtUtilsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtUtilsService = /** @class */ (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    JwtUtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JwtUtilsService);
    return JwtUtilsService;
}());



/***/ }),

/***/ "./src/app/service/token-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/token-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-service.service */ "./src/app/service/authentication-service.service.ts");




var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/student-list-item/student-list-item.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/student-list-item/student-list-item.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC1pdGVtL3N0dWRlbnQtbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/student-list-item/student-list-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/student-list-item/student-list-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>{{student.firstName}} {{student.lastName}} {{student.cardNumber}}</div>\n  <button *ngIf=\"isAdministrator\" [disabled]=\"!isDeletingAllowed()\" (click) = \"deleteStudent()\" title=\"Moguće je obrisati studenta koji nema ispite\">Obriši</button>\n  <button *ngIf=\"isAdministrator\" (click) = \"editStudent()\">Izmeni</button>\n  <a [routerLink]=\"['/studenti',student.id]\">Info</a>\n</div>\n"

/***/ }),

/***/ "./src/app/student-list-item/student-list-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/student-list-item/student-list-item.component.ts ***!
  \******************************************************************/
/*! exports provided: StudentListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListItemComponent", function() { return StudentListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_student_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/student.model */ "./src/app/model/student.model.ts");



var StudentListItemComponent = /** @class */ (function () {
    function StudentListItemComponent() {
        this.studentDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.markStudentForEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    StudentListItemComponent.prototype.ngOnInit = function () {
    };
    StudentListItemComponent.prototype.deleteStudent = function () {
        this.studentDeleted.next(this.student.id);
    };
    StudentListItemComponent.prototype.editStudent = function () {
        this.markStudentForEditing.next(this.student);
    };
    StudentListItemComponent.prototype.isDeletingAllowed = function () {
        return !this.student.exams.length;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _model_student_model__WEBPACK_IMPORTED_MODULE_2__["Student"])
    ], StudentListItemComponent.prototype, "student", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StudentListItemComponent.prototype, "isAdministrator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StudentListItemComponent.prototype, "studentDeleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StudentListItemComponent.prototype, "markStudentForEditing", void 0);
    StudentListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list-item',
            template: __webpack_require__(/*! ./student-list-item.component.html */ "./src/app/student-list-item/student-list-item.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./student-list-item.component.css */ "./src/app/student-list-item/student-list-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentListItemComponent);
    return StudentListItemComponent;
}());



/***/ }),

/***/ "./src/app/student-list/student-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-list/student-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQtbGlzdC9zdHVkZW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/student-list/student-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/student-list/student-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul>\n    <li *ngFor=\"let student of students; let i = index\">\n      <app-student-list-item [student]=\"student\" [isAdministrator]=\"isAdministrator\"  (studentDeleted) = \"deleteStudent($event)\" (markStudentForEditing)=\"editStudent($event)\"></app-student-list-item>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/student-list/student-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-list/student-list.component.ts ***!
  \********************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentListComponent = /** @class */ (function () {
    function StudentListComponent() {
        this.studentDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.markStudentForEditing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    StudentListComponent.prototype.ngOnInit = function () {
    };
    StudentListComponent.prototype.deleteStudent = function (id) {
        this.studentDeleted.next(id);
    };
    StudentListComponent.prototype.editStudent = function (student) {
        this.markStudentForEditing.next(student);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], StudentListComponent.prototype, "students", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StudentListComponent.prototype, "isAdministrator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StudentListComponent.prototype, "studentDeleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], StudentListComponent.prototype, "markStudentForEditing", void 0);
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student-list/student-list.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./student-list.component.css */ "./src/app/student-list/student-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentListComponent);
    return StudentListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nikolalukic/workspace/predavanja/VP04_2018/55_Angular_prava_pristupa/resenja/ssluzba/studentska-sluzba/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map