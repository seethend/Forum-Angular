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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-header/app-header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app-header/app-header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-search {\n  display: inline;\n  width: 500px;\n  height: 50px;\n  left: 15px;\n  padding: 6px 20px;\n  font-size: 20px;\n  line-height: 1.42857143;\n  color: white;\n  background: transparent none;\n  border: none;\n  /*border-bottom: 1px solid grey;*/\n  outline: none;\n}\n\n#home-search:focus {\n  box-shadow: none;\n}\n\n.my-navbar {\n    background-color: #1e2642;\n    border: none;\n}\n\n.icon-bar {\n  border: 1px solid white;\n}\n\n.right-nav-icons {\n  color: white;\n}\n\n.nav>li>a:focus, .nav>li>a:hover {\n  text-decoration: none;\n  background-color: transparent;\n  color: #d8d8d8;\n}\n\n.glyphicon-search{\n  color: white;\n  top: 3px;\n  left: 15px;\n  font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/app-header/app-header.component.html":
/*!******************************************************!*\
  !*** ./src/app/app-header/app-header.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar my-navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <span class=\"glyphicon glyphicon-search\"></span>\n      <input id=\"home-search\" type=\"text\" value=\"\" placeholder=\"Search....\" (keydown)=\"searchForum($event)\" [(ngModel)]=\"searchString\">\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"!isUserLogged\">\n        <li>\n            <a href=\"#\" [routerLink] = \"['/', 'auth', 'signup']\" class=\"right-nav-icons\">\n                <span class=\"glyphicon glyphicon-user\"></span> Sign Up\n            </a>\n        </li>\n        <li>\n            <a href=\"#\" [routerLink] = \"['/', 'auth', 'login']\" class=\"right-nav-icons\">\n                <span class=\"glyphicon glyphicon-log-in\"></span> Login\n            </a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"isUserLogged\">\n        <li>\n            <a href=\"#\" [routerLink] = \"['/']\" class=\"right-nav-icons\">\n                <span class=\"glyphicon glyphicon-user\"></span> {{ userLoggedIn.lastName }} {{ userLoggedIn.firstName }}\n            </a>\n        </li>\n        <li>\n            <a (click)=\"logout()\" class=\"right-nav-icons\">\n                <span class=\"glyphicon glyphicon-log-in\"></span> Logout\n            </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/app-header/app-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-header/app-header.component.ts ***!
  \****************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authenticate/authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AppHeaderComponent = class AppHeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.searchString = '';
        this.isUserLogged = false; // flag for user logged in
        this.waitForUserCheck();
    }
    ngOnInit() {
        this.waitForUserCheck();
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(5000);
        this.subscription = source.subscribe(() => {
            this.isUserLogged = this.authService.isUserLoggedIn;
            this.userLoggedIn = this.authService.loggedInUser;
        });
    }
    // This method is responsible for changing the header if user is logged in or logged out
    waitForUserCheck() {
        this.authService.appHeaderUserSubject.subscribe((isUserLogged) => {
            if (isUserLogged) {
                this.isUserLogged = isUserLogged;
                this.userLoggedIn = this.authService.loggedInUser;
            }
        });
    }
    logout() {
        this.authService.logout();
    }
    searchForum(event) {
        if (event.key.toLowerCase() === 'enter' && event.keyCode === 13) {
            const localString = this.searchString;
            this.searchString = '';
            this.router.navigate(['/', 'search', localString]);
        }
    }
    ngOnDestroy() {
        console.log('Unsubscribe');
        this.subscription.unsubscribe();
    }
};
AppHeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/app-header/app-header.component.html"),
        styles: [__webpack_require__(/*! ./app-header.component.css */ "./src/app/app-header/app-header.component.css")]
    }),
    __metadata("design:paramtypes", [_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
], AppHeaderComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _docker_docker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docker/docker.component */ "./src/app/docker/docker.component.ts");
/* harmony import */ var _docker_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docker/post-details/post-details.component */ "./src/app/docker/post-details/post-details.component.ts");
/* harmony import */ var _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticate/authenticate.component */ "./src/app/authenticate/authenticate.component.ts");
/* harmony import */ var _authenticate_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authenticate/login/login.component */ "./src/app/authenticate/login/login.component.ts");
/* harmony import */ var _authenticate_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authenticate/signup/signup.component */ "./src/app/authenticate/signup/signup.component.ts");
/* harmony import */ var _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./discussions/discussions.component */ "./src/app/discussions/discussions.component.ts");
/* harmony import */ var _discussions_topic_show_topic_show_topic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./discussions/topic/show-topic/show-topic.component */ "./src/app/discussions/topic/show-topic/show-topic.component.ts");
/* harmony import */ var _discussions_topic_write_topic_write_topic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./discussions/topic/write-topic/write-topic.component */ "./src/app/discussions/topic/write-topic/write-topic.component.ts");
/* harmony import */ var _discussions_topic_topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./discussions/topic/topic-details/topic-details.component */ "./src/app/discussions/topic/topic-details/topic-details.component.ts");
/* harmony import */ var _discussions_topic_topic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./discussions/topic/topic.component */ "./src/app/discussions/topic/topic.component.ts");
/* harmony import */ var _discussions_topic_show_topic_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./discussions/topic/show-topic/topic-list/topic-list.component */ "./src/app/discussions/topic/show-topic/topic-list/topic-list.component.ts");
/* harmony import */ var _guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/authenticate.guard */ "./src/app/guards/authenticate.guard.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var _profile_profile_posts_profile_posts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile-posts/profile-posts.component */ "./src/app/profile/profile-posts/profile-posts.component.ts");
/* harmony import */ var _profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/friends/friends.component */ "./src/app/profile/friends/friends.component.ts");
/* harmony import */ var _profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/photos/photos.component */ "./src/app/profile/photos/photos.component.ts");
/* harmony import */ var _docker_posts_write_post_write_post_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./docker/posts/write-post/write-post.component */ "./src/app/docker/posts/write-post/write-post.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















const appRoutes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'auth/login'
    },
    { path: 'posts', component: _docker_docker_component__WEBPACK_IMPORTED_MODULE_2__["DockerComponent"], children: [
            { path: 'createpost', component: _docker_posts_write_post_write_post_component__WEBPACK_IMPORTED_MODULE_19__["WritePostComponent"] },
            { path: ':id', component: _docker_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_3__["PostDetailsComponent"] }
        ], canActivate: [_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_13__["AuthenticateGuard"]], canActivateChild: [_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_13__["AuthenticateGuard"]]
    },
    { path: 'discussions', component: _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_7__["DiscussionsComponent"], children: [
            { path: '', component: _discussions_topic_topic_component__WEBPACK_IMPORTED_MODULE_11__["TopicComponent"], children: [
                    { path: 'newtopic', component: _discussions_topic_write_topic_write_topic_component__WEBPACK_IMPORTED_MODULE_9__["WriteTopicComponent"] },
                    { path: 'topic/:id', component: _discussions_topic_topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_10__["TopicDetailsComponent"] },
                    { path: 'topics', component: _discussions_topic_show_topic_show_topic_component__WEBPACK_IMPORTED_MODULE_8__["ShowTopicComponent"], children: [
                            { path: ':topic', component: _discussions_topic_show_topic_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_12__["TopicListComponent"] }
                        ] }
                ] }
        ], canActivate: [_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_13__["AuthenticateGuard"]], canActivateChild: [_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_13__["AuthenticateGuard"]]
    },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"], children: [
            { path: 'posts', component: _profile_profile_posts_profile_posts_component__WEBPACK_IMPORTED_MODULE_16__["ProfilePostsComponent"] },
            { path: 'about', component: _profile_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"] },
            { path: 'friends', component: _profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_17__["FriendsComponent"] },
            { path: 'photos', component: _profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_18__["PhotosComponent"] }
        ], canActivate: [_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_13__["AuthenticateGuard"]], canActivateChild: [_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_13__["AuthenticateGuard"]]
    },
    {
        path: 'search/:searchString', component: _search_search_component__WEBPACK_IMPORTED_MODULE_20__["SearchComponent"], canActivate: [_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_13__["AuthenticateGuard"]], canActivateChild: [_guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_13__["AuthenticateGuard"]]
    },
    { path: 'auth', component: _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_4__["AuthenticateComponent"], children: [
            { path: 'login', component: _authenticate_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: 'signup', component: _authenticate_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-header{\n    position: fixed;\n    height: 100%;\n}\n\n.top-header{\n    position: fixed;\n    z-index: 1000;\n    padding-right: 0;\n    padding-left: 0;\n}\n\n.dynamic-window{\n    background: #1a2036;\n    position: relative;\n    height: 550px;\n    margin-top: 5%;\n    margin-left: 200px;\n    border-radius: 20px;\n    overflow: auto;\n    width: 85%;\n}\n\n@media only screen and (max-width: 1050px) {\n    .top-header {\n      width: 100%;\n    }\n\n    .dynamic-window{\n        width: 85%;\n        margin-left: 10px;\n    }\n\n    .col-md-offset-2 {\n        margin-left: 0;\n        width: 100%;\n    }\n  }\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-2 side-header\">\n        <app-side-header></app-side-header>\n    </div>\n    <div class=\"col-md-10 col-md-offset-2 top-header\">\n      <app-header></app-header>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-2 dynamic-window\">\n      <!-- <app-docker></app-docker> -->\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _search_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search/search.service */ "./src/app/search/search.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-header/app-header.component */ "./src/app/app-header/app-header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _side_header_side_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./side-header/side-header.component */ "./src/app/side-header/side-header.component.ts");
/* harmony import */ var _docker_docker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./docker/docker.component */ "./src/app/docker/docker.component.ts");
/* harmony import */ var _docker_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./docker/posts/posts.component */ "./src/app/docker/posts/posts.component.ts");
/* harmony import */ var _docker_posts_write_post_write_post_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./docker/posts/write-post/write-post.component */ "./src/app/docker/posts/write-post/write-post.component.ts");
/* harmony import */ var _docker_posts_show_post_show_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./docker/posts/show-post/show-post.component */ "./src/app/docker/posts/show-post/show-post.component.ts");
/* harmony import */ var _docker_posts_show_post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./docker/posts/show-post/post-list/post-list.component */ "./src/app/docker/posts/show-post/post-list/post-list.component.ts");
/* harmony import */ var _docker_posts_show_post_post_list_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./docker/posts/show-post/post-list/post-item/post-item.component */ "./src/app/docker/posts/show-post/post-list/post-item/post-item.component.ts");
/* harmony import */ var _docker_posts_posts_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./docker/posts/posts.service */ "./src/app/docker/posts/posts.service.ts");
/* harmony import */ var _docker_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./docker/post-details/post-details.component */ "./src/app/docker/post-details/post-details.component.ts");
/* harmony import */ var _pipes_shorten_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/shorten.pipe */ "./src/app/pipes/shorten.pipe.ts");
/* harmony import */ var _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authenticate/authenticate.component */ "./src/app/authenticate/authenticate.component.ts");
/* harmony import */ var _authenticate_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./authenticate/signup/signup.component */ "./src/app/authenticate/signup/signup.component.ts");
/* harmony import */ var _authenticate_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./authenticate/login/login.component */ "./src/app/authenticate/login/login.component.ts");
/* harmony import */ var _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./discussions/discussions.component */ "./src/app/discussions/discussions.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _discussions_topic_topic_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./discussions/topic/topic.component */ "./src/app/discussions/topic/topic.component.ts");
/* harmony import */ var _discussions_topic_topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./discussions/topic/topic-details/topic-details.component */ "./src/app/discussions/topic/topic-details/topic-details.component.ts");
/* harmony import */ var _discussions_topic_show_topic_show_topic_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./discussions/topic/show-topic/show-topic.component */ "./src/app/discussions/topic/show-topic/show-topic.component.ts");
/* harmony import */ var _discussions_topic_write_topic_write_topic_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./discussions/topic/write-topic/write-topic.component */ "./src/app/discussions/topic/write-topic/write-topic.component.ts");
/* harmony import */ var _discussions_topic_show_topic_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./discussions/topic/show-topic/topic-list/topic-list.component */ "./src/app/discussions/topic/show-topic/topic-list/topic-list.component.ts");
/* harmony import */ var _discussions_topic_show_topic_topic_list_topic_item_topic_item_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./discussions/topic/show-topic/topic-list/topic-item/topic-item.component */ "./src/app/discussions/topic/show-topic/topic-list/topic-item/topic-item.component.ts");
/* harmony import */ var _discussions_topic_topic_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./discussions/topic/topic.service */ "./src/app/discussions/topic/topic.service.ts");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./authenticate/authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./guards/authenticate.guard */ "./src/app/guards/authenticate.guard.ts");
/* harmony import */ var _profile_about_about_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./profile/about/about.component */ "./src/app/profile/about/about.component.ts");
/* harmony import */ var _profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./profile/friends/friends.component */ "./src/app/profile/friends/friends.component.ts");
/* harmony import */ var _profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./profile/photos/photos.component */ "./src/app/profile/photos/photos.component.ts");
/* harmony import */ var _profile_profile_posts_profile_posts_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./profile/profile-posts/profile-posts.component */ "./src/app/profile/profile-posts/profile-posts.component.ts");
/* harmony import */ var _profile_profile_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./profile/profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeaderComponent"],
            _side_header_side_header_component__WEBPACK_IMPORTED_MODULE_7__["SideHeaderComponent"],
            _docker_docker_component__WEBPACK_IMPORTED_MODULE_8__["DockerComponent"],
            _docker_posts_posts_component__WEBPACK_IMPORTED_MODULE_9__["PostsComponent"],
            _docker_posts_write_post_write_post_component__WEBPACK_IMPORTED_MODULE_10__["WritePostComponent"],
            _docker_posts_show_post_show_post_component__WEBPACK_IMPORTED_MODULE_11__["ShowPostComponent"],
            _docker_posts_show_post_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_12__["PostListComponent"],
            _docker_posts_show_post_post_list_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_13__["PostItemComponent"],
            _docker_post_details_post_details_component__WEBPACK_IMPORTED_MODULE_15__["PostDetailsComponent"],
            _pipes_shorten_pipe__WEBPACK_IMPORTED_MODULE_16__["ShortenPipe"],
            _authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_17__["AuthenticateComponent"],
            _authenticate_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
            _authenticate_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
            _discussions_discussions_component__WEBPACK_IMPORTED_MODULE_20__["DiscussionsComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
            _groups_groups_component__WEBPACK_IMPORTED_MODULE_22__["GroupsComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_23__["ProjectsComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"],
            _discussions_topic_topic_component__WEBPACK_IMPORTED_MODULE_25__["TopicComponent"],
            _discussions_topic_topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_26__["TopicDetailsComponent"],
            _discussions_topic_show_topic_show_topic_component__WEBPACK_IMPORTED_MODULE_27__["ShowTopicComponent"],
            _discussions_topic_write_topic_write_topic_component__WEBPACK_IMPORTED_MODULE_28__["WriteTopicComponent"],
            _discussions_topic_show_topic_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_29__["TopicListComponent"],
            _discussions_topic_show_topic_topic_list_topic_item_topic_item_component__WEBPACK_IMPORTED_MODULE_30__["TopicItemComponent"],
            _profile_about_about_component__WEBPACK_IMPORTED_MODULE_35__["AboutComponent"],
            _profile_friends_friends_component__WEBPACK_IMPORTED_MODULE_36__["FriendsComponent"],
            _profile_photos_photos_component__WEBPACK_IMPORTED_MODULE_37__["PhotosComponent"],
            _profile_profile_posts_profile_posts_component__WEBPACK_IMPORTED_MODULE_38__["ProfilePostsComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_40__["SearchComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_33__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ],
        providers: [_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_32__["AuthenticateService"], _guards_authenticate_guard__WEBPACK_IMPORTED_MODULE_34__["AuthenticateGuard"], _docker_posts_posts_service__WEBPACK_IMPORTED_MODULE_14__["PostServices"], _discussions_topic_topic_service__WEBPACK_IMPORTED_MODULE_31__["TopicService"], _profile_profile_service__WEBPACK_IMPORTED_MODULE_39__["ProfileService"], _search_search_service__WEBPACK_IMPORTED_MODULE_0__["SearchService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authenticate/authenticate.component.css":
/*!*********************************************************!*\
  !*** ./src/app/authenticate/authenticate.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/authenticate/authenticate.component.html":
/*!**********************************************************!*\
  !*** ./src/app/authenticate/authenticate.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/authenticate/authenticate.component.ts":
/*!********************************************************!*\
  !*** ./src/app/authenticate/authenticate.component.ts ***!
  \********************************************************/
/*! exports provided: AuthenticateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateComponent", function() { return AuthenticateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AuthenticateComponent = class AuthenticateComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthenticateComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-authenticate',
        template: __webpack_require__(/*! ./authenticate.component.html */ "./src/app/authenticate/authenticate.component.html"),
        styles: [__webpack_require__(/*! ./authenticate.component.css */ "./src/app/authenticate/authenticate.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AuthenticateComponent);



/***/ }),

/***/ "./src/app/authenticate/authenticate.service.ts":
/*!******************************************************!*\
  !*** ./src/app/authenticate/authenticate.service.ts ***!
  \******************************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AuthenticateService = class AuthenticateService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.token = null; // Stores valid JWT token from response on successfull login
        this.loginUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // emits for login component
        this.appHeaderUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // emits for app header component
    }
    // Posts credentials object to API
    login(credentials) {
        return this.http.post('login', credentials, { responseType: 'text' });
    }
    saveUser(user_signup_details) {
        return this.http.post('v1/jsonsignup', user_signup_details, { responseType: 'text' });
    }
    // Checks whether user is logged in by accessing secured resource API URL
    checkUser(fire) {
        if (this.token != null) {
            const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': this.token });
            this.http.get('v1/secured/user', { headers: httpHeaders }).subscribe((response) => {
                if (fire) {
                    this.loginUserSubject.next(true);
                }
                this.isUserLoggedIn = true;
                this.loggedInUser = response;
                this.appHeaderUserSubject.next(true);
                console.log('response while checking user logged in ', response);
            }, error => {
                this.logout();
                console.log('error while checking user logged in ', error);
            });
        }
        else {
            this.logout();
            console.log('first request or login token expired');
        }
    }
    // Returns current logged in User details
    getLoggeduser() {
        return this.loggedInUser;
    }
    // Sets all values to default and notifies application that user is logged out when something unexpected happends
    logout() {
        this.loginUserSubject.next(false);
        // this.appHeaderUserSubject.next(false);
        this.isUserLoggedIn = false;
        this.token = null;
        this.router.navigate(['auth', 'login']);
    }
};
AuthenticateService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthenticateService);



/***/ }),

/***/ "./src/app/authenticate/login/login.component.css":
/*!********************************************************!*\
  !*** ./src/app/authenticate/login/login.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-details{\n  color: red;\n  font-size: 11px;\n  font-family: \"Trebuchet MS\", \"Verdana\", \"sans-serif\";\n  font-style: italic;\n}\n\n.modal-body {\n  padding: 15px 150px;\n}\n\n.modal-dialog{\n  margin-top: 50px;\n}\n\n.btn--login {\n  box-shadow: 2px 2px 10px #464646;\n  margin-left: 110px;\n}\n\n.btn:focus {\n  outline: none;\n}\n\n.signup__link{\n    font-size: 1rem;\n    font-weight: 900;\n    text-decoration: underline;\n    color: #337ab7;\n}\n\n.error-div{\n  margin-top: 5px;\n  font-size: 12px;\n  color: red;\n}\n\n.fa-red {\n  color: red;\n  margin-right: 5px;\n}\n\n.error-msg {\n  display: inline-block;\n  font: 400 12px Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n  font-weight: bold;\n  margin-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/authenticate/login/login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/authenticate/login/login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button>-->\n\n<!-- Modal -->\n<!--<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">-->\n<div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" [routerLink] = \"['/']\">&times;</button>\n        <h2 class=\"modal-title\">Login</h2>\n        <div class=\"error-div\" *ngIf=\"responseText\">\n          <i class=\"fa fa-warning fa-red\"></i>\n          <p class=\"error-msg\">{{responseText}}</p>\n        </div>\n    </div>\n    <div class=\"modal-body\">\n        <form (submit)=\"login()\">\n            <div class=\"form-group\">\n                <!--<label class=\"label\">UserName:</label>-->\n                <div class=\"error-div\" *ngIf=\"isUsernameNull\">\n                  <i class=\"fa fa-warning fa-red\"></i>\n                  <p class=\"error-msg\">Username should not be empty</p>\n                </div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"username\" name=\"username\" [(ngModel)]=\"credentials.username\">\n            </div>\n            <div class=\"form-group\">\n                <!--<label class=\"label\">Password:</label>-->\n                <div class=\"error-div\" *ngIf=\"isPasswordNull\">\n                  <i class=\"fa fa-warning fa-red\"></i>\n                  <p class=\"error-msg\">Password should not be empty</p>\n                </div>\n                <input type=\"password\" class=\"form-control\" placeholder=\"password\" name=\"password\" [(ngModel)]=\"credentials.password\">\n            </div>\n            <div class=\"m-t-lg\">\n                <ul class=\"list-inline\">\n                    <li>\n                        <button type=\"submit\" class=\"btn btn-success btn--login\">Login</button>\n                    </li>\n                    <li>\n                        <a class=\"signup__link\" [routerLink] = \"['/', 'auth', 'signup']\">Register here..!!!</a>\n                    </li>\n                </ul>\n            </div>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal-dialog\" [routerLink] = \"['/']\">Close</button>\n    </div>\n    </div>\n\n</div>\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/authenticate/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/authenticate/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isUsernameNull = false; // false if username field is null or else true
        this.isPasswordNull = false; // false if password field is null or else true
        this.credentials = { username: 'seeth', password: 'seeth' }; // Credential Object used for sending to login
        this.responseText = ''; // Stores response text from API
    }
    ngOnInit() {
        this.responseText = '';
        /**
         * This works on login component initialization to check if user already logged in
         * If user logged in then he will be redirect to /posts
         */
        this.authService.loginUserSubject.subscribe((isUserLogged) => {
            if (isUserLogged) {
                this.router.navigate(['posts'])
                    .then(() => console.log('successfully redirected to posts'))
                    .catch(() => console.log('something wrong with url'));
            }
            else {
                console.log('first request or login token expired');
            }
        });
        // called to fire loginUserSubject
        this.authService.checkUser(true);
    }
    /**
     * User explicitly call this function by pressing login button
     */
    login() {
        const username = this.credentials.username.trim();
        const password = this.credentials.password.trim();
        this.responseText = '';
        /**
         * Validates fields and calls login in auth service and handles the response
         * If response is valid user will be redirect to /posts else calls logout() and clears the fields
         */
        if (username != null && username.length > 0) {
            this.isUsernameNull = false;
            if (password != null && password.length > 0) {
                this.isPasswordNull = false;
                this.authService.login(this.credentials).subscribe((response) => {
                    this.authService.token = response;
                    this.authService.isUserLoggedIn = true;
                    this.authService.checkUser(false);
                    this.responseText = '';
                    console.log('User Logged in with ', this.credentials, 'api returned token ', this.authService.token);
                    this.router.navigate(['posts'])
                        .then(() => console.log('successfully redirected to posts'))
                        .catch(() => console.log('something wrong with url'));
                }, error => {
                    console.log('something wrong with credentials ', this.credentials, error);
                    this.authService.logout();
                    this.responseText = 'Login failed';
                    this.credentials = { username: '', password: '' };
                });
            }
            else {
                this.isPasswordNull = true;
            }
        }
        else {
            this.isUsernameNull = true;
        }
    }
};
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! ./login.component.html */ "./src/app/authenticate/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authenticate/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/authenticate/signup/signup.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authenticate/signup/signup.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body {\n    padding: 5px 120px;\n}\n\n.modal-dialog{\n    margin-top: 10px;\n}\n\n.modal-header {\n    padding: 10px 20px;\n}\n\n.form-group{\n  margin-bottom: 10px;\n}\n\nlabel {\n    margin-bottom: 0;\n    font-size: 13px;\n    text-transform: uppercase;\n    color: #404040;\n}\n\n.my-form-control {\n    display: block;\n    width: 100%;\n    height: 35px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid transparent;\n    border-bottom: 1px solid #8a8686;\n    border-radius: 4px;\n    /* -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s; */\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n    /* transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s; */\n}\n\n[type=\"text\"] {\n    color: #111;\n}\n\n[type=\"password\"] {\n    color: #111;\n}\n\n.btn--form {\n    padding: 0.7rem 2.8rem;\n    font-size: .95rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    color: #fff;\n    background: #111;\n    box-shadow: 5px 5px 10px #676767;\n    border-radius: 5px;\n}\n\n.signin__link {\n    font-size: 10px;\n    font-weight: 900;\n    text-decoration: underline;\n    color: #337ab7;\n}\n\n.my-form-control:focus,\n.my-form-control:active,\n.btn--form:active,\n.btn--form:focus{\n    outline: none;\n}\n\n.modal-footer{\n    padding: 5px 25px;\n}\n\n.error-div{\n  margin-top: 5px;\n  font-size: 12px;\n  color: red;\n}\n\n.fa-red {\n  color: red;\n  margin-right: 5px;\n}\n\n.fa-green {\n  color: limegreen;\n  margin-right: 5px;\n}\n\n.error-msg {\n  display: inline-block;\n  font: 400 12px Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n  font-weight: bold;\n  margin-bottom: 0;\n}\n\n.error-green{\n  color: limegreen;\n}\n"

/***/ }),

/***/ "./src/app/authenticate/signup/signup.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authenticate/signup/signup.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!--<button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button>-->\n\n    <!-- Modal -->\n\n    <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" [routerLink] = \"['/']\">&times;</button>\n          <h4 class=\"modal-title\">Signup</h4>\n          <div class=\"error-div\" *ngIf=\"responseText\">\n            <i *ngIf=\"USER_SUCCESSFULLY_REGISTERED\" class=\"fa fa-warning fa-green\"></i>\n            <i *ngIf=\"USER_NOT_REGISTERED || USER_ALREADY_REGISTERED\" class=\"fa fa-warning fa-red\"></i>\n            <p class=\"error-msg\" *ngIf=\"USER_NOT_REGISTERED\" >{{USER_NOT_REGISTERED}}</p>\n            <p class=\"error-msg error-green\" *ngIf=\"USER_SUCCESSFULLY_REGISTERED\" >{{USER_SUCCESSFULLY_REGISTERED}}</p>\n            <p class=\"error-msg\" *ngIf=\"USER_ALREADY_REGISTERED\" >{{USER_ALREADY_REGISTERED}}</p>\n          </div>\n        </div>\n        <div class=\"modal-body\">\n\n\n        <div class=\"signup__container\">\n            <div class=\"container__child signup__form\">\n                <form method=\"post\" (submit)=\"submitForm()\">\n                    <div class=\"form-group\">\n                        <label for=\"username\">Username*</label>\n                        <input class=\"my-form-control\" type=\"text\" name=\"username\" id=\"username\" placeholder=\"jamesbond007\" [(ngModel)]=\"user_signup_details.username\" requifa-red />\n                        <div class=\"error-div\" *ngIf=\"usernameFail\">\n                          <i class=\"fa fa-warning fa-red\"></i>\n                          <p class=\"error-msg\">Enter username </p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email*</label>\n                        <input class=\"my-form-control\" type=\"text\" name=\"email\" id=\"email\" placeholder=\"james.bond007@gmail.com\" [(ngModel)]=\"user_signup_details.email\" requifa-red />\n                        <div class=\"error-div\" *ngIf=\"emailFail\">\n                            <i class=\"fa fa-warning fa-red\"></i>\n                            <p class=\"error-msg\">Enter email address</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"lastname\">Last Name*</label>\n                        <input class=\"my-form-control\" type=\"text\" name=\"lastname\" id=\"lastname\" placeholder=\"Bond\" [(ngModel)]=\"user_signup_details.lastName\" requifa-red />\n                        <div class=\"error-div\" *ngIf=\"lastName_fail\">\n                            <i class=\"fa fa-warning fa-red\"></i>\n                            <p class=\"error-msg\">Enter last name</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"firstname\">First Name*</label>\n                        <input class=\"my-form-control\" type=\"text\" name=\"firstname\" id=\"firstname\" placeholder=\"James\" [(ngModel)]=\"user_signup_details.firstName\" requifa-red />\n                        <div class=\"error-div\" *ngIf=\"firstName_fail\">\n                            <i class=\"fa fa-warning fa-red\"></i>\n                            <p class=\"error-msg\">Enter first name</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password*</label>\n                        <input class=\"my-form-control\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"********\" [(ngModel)]=\"user_signup_details.password\" requifa-red />\n                        <div class=\"error-div\" *ngIf=\"passwordFail || passwordValidFail\">\n                            <i class=\"fa fa-warning fa-red\"></i>\n                            <p class=\"error-msg\" *ngIf=\"passwordFail\">Enter password</p>\n                            <p class=\"error-msg\" *ngIf=\"passwordValidFail\">Password should be atleast 8 letters</p>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"passwordRepeat\">Confirm Password*</label>\n                        <input class=\"my-form-control\" type=\"password\" name=\"passwordRepeat\" id=\"passwordRepeat\" placeholder=\"********\" [(ngModel)]=\"user_signup_details.passwordrepeat\" requifa-red />\n                        <div class=\"error-div\" *ngIf=\"passwordrepeatFail\">\n                            <i class=\"fa fa-warning fa-red\"></i>\n                            <p class=\"error-msg\" *ngIf=\"passwordrepeatFail\">Passwords didn't match</p>\n                        </div>\n                    </div>\n                    <div class=\"m-t-lg\">\n                        <ul class=\"list-inline\">\n                            <li>\n                                <input class=\"btn btn--form\" type=\"submit\" value=\"Register\" />\n                            </li>\n                            <li>\n                                <a class=\"signin__link\" [routerLink] = \"['/', 'auth', 'login']\">I am already a member</a>\n                            </li>\n                        </ul>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n\n\n\n\n\n\n        </div>\n        <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" [routerLink] = \"['/']\">Close</button>\n        </div>\n    </div>\n\n    </div>\n"

/***/ }),

/***/ "./src/app/authenticate/signup/signup.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authenticate/signup/signup.component.ts ***!
  \*********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SignupComponent = class SignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user_signup_details = { username: '', email: '', lastName: '', firstName: '', password: '', passwordrepeat: '' };
        // Booleans to check field validations
        this.usernameFail = false;
        this.emailFail = false;
        this.lastName_fail = false;
        this.firstName_fail = false;
        this.passwordFail = false;
        this.passwordValidFail = false;
        this.passwordrepeatFail = false;
        this.responseText = ''; // Stores response text from API
        // Template variables to show signup response from API
        this.USER_NOT_REGISTERED = '';
        this.USER_SUCCESSFULLY_REGISTERED = '';
        this.USER_ALREADY_REGISTERED = '';
    }
    ngOnInit() {
        this.resetResponseText();
    }
    /**
     * User call by pressing submit button, does the following
     * 1. Validates the fields
     * 2. Assigns the response text to related template variable for displaying respective messages
     */
    submitForm() {
        console.log(this.user_signup_details);
        this.resetResponseText();
        if (this.checkForm()) {
            this.authService.saveUser(this.user_signup_details).subscribe((response) => {
                console.log(response);
                this.responseText = response;
                // Assigns response text to related template variable
                if (this.responseText === 'U_N_R') {
                    this.USER_NOT_REGISTERED = 'User not registered';
                    this.USER_SUCCESSFULLY_REGISTERED = '';
                    this.USER_ALREADY_REGISTERED = '';
                }
                else if (this.responseText === 'U_S_R') {
                    this.USER_NOT_REGISTERED = '';
                    this.USER_SUCCESSFULLY_REGISTERED = 'User successfully registered';
                    this.USER_ALREADY_REGISTERED = '';
                }
                else if (this.responseText === 'U_A_R') {
                    this.USER_NOT_REGISTERED = '';
                    this.USER_SUCCESSFULLY_REGISTERED = '';
                    this.USER_ALREADY_REGISTERED = 'User already registered';
                }
                this.clearFields();
            }, error => {
                console.log('Something went wrong while registering user', error);
                this.clearFields();
            });
        }
        else {
            console.log('fields still empty');
        }
    }
    /**
     * Resets all variables to empty
     */
    resetResponseText() {
        this.responseText = '';
        this.USER_NOT_REGISTERED = '';
        this.USER_SUCCESSFULLY_REGISTERED = '';
        this.USER_ALREADY_REGISTERED = '';
    }
    /**
     * Validates the fields
     */
    checkForm() {
        if (this.user_signup_details.username == null || this.user_signup_details.username.trim() === '') {
            this.usernameFail = true;
        }
        else {
            this.usernameFail = false;
        }
        if (this.user_signup_details.email == null || this.user_signup_details.email.trim() === '') {
            this.emailFail = true;
        }
        else {
            this.emailFail = false;
        }
        if (this.user_signup_details.lastName == null || this.user_signup_details.lastName.trim() === '') {
            this.lastName_fail = true;
        }
        else {
            this.lastName_fail = false;
        }
        if (this.user_signup_details.firstName == null || this.user_signup_details.firstName.trim() === '') {
            this.firstName_fail = true;
        }
        else {
            this.firstName_fail = false;
        }
        if (this.user_signup_details.password == null || this.user_signup_details.password.trim() === '') {
            this.passwordFail = true;
            this.passwordValidFail = false;
            this.passwordrepeatFail = false;
        }
        else if (this.user_signup_details.password.length < 8) {
            this.passwordFail = false;
            this.passwordValidFail = true;
            this.passwordrepeatFail = false;
        }
        else if (this.user_signup_details.passwordrepeat !== this.user_signup_details.password) {
            this.passwordFail = false;
            this.passwordValidFail = false;
            this.passwordrepeatFail = true;
        }
        else {
            this.passwordFail = false;
            this.passwordValidFail = false;
            this.passwordrepeatFail = false;
        }
        if (this.usernameFail || this.emailFail || this.lastName_fail ||
            this.firstName_fail || this.passwordFail || this.passwordrepeatFail ||
            this.passwordValidFail) {
            return false;
        }
        return true;
    }
    /**
     * Clears the fields after every request
     */
    clearFields() {
        this.user_signup_details.username = '';
        this.user_signup_details.email = '';
        this.user_signup_details.lastName = '';
        this.user_signup_details.firstName = '';
        this.user_signup_details.password = '';
        this.user_signup_details.passwordrepeat = '';
    }
};
SignupComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! ./signup.component.html */ "./src/app/authenticate/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/authenticate/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/discussions/discussions.component.css":
/*!*******************************************************!*\
  !*** ./src/app/discussions/discussions.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/discussions/discussions.component.html":
/*!********************************************************!*\
  !*** ./src/app/discussions/discussions.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/discussions/discussions.component.ts":
/*!******************************************************!*\
  !*** ./src/app/discussions/discussions.component.ts ***!
  \******************************************************/
/*! exports provided: DiscussionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionsComponent", function() { return DiscussionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let DiscussionsComponent = class DiscussionsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DiscussionsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-discussions',
        template: __webpack_require__(/*! ./discussions.component.html */ "./src/app/discussions/discussions.component.html"),
        styles: [__webpack_require__(/*! ./discussions.component.css */ "./src/app/discussions/discussions.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DiscussionsComponent);



/***/ }),

/***/ "./src/app/discussions/topic/show-topic/show-topic.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/discussions/topic/show-topic/show-topic.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-div{\n    background: #101219b0;\n    color: #adadad;\n    margin-top: 15px;\n    border-radius: 10px;\n    padding: 10px 40px;\n    border: 1px solid white;\n}\n\n.pull-right{\n    margin-top: 35px;\n}\n\n@media only screen and (max-width: 1000px) {\n    .post-div {\n        margin: 20px;\n        height: 130px;\n    }\n}\n\n@media only screen and (max-width: 700px) {\n    .post-div {\n        display: none;\n    }\n}\n"

/***/ }),

/***/ "./src/app/discussions/topic/show-topic/show-topic.component.html":
/*!************************************************************************!*\
  !*** ./src/app/discussions/topic/show-topic/show-topic.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"row\">\n        <div class=\"col-md-10 col-md-offset-1 post-div\">\n            <div class=\"pull-left\">\n                <h1>General Discussions</h1>\n                <h4>Post your topics here..!!</h4>\n            </div>\n            <div class=\"pull-right\">\n                <button class=\"btn btn-primary\" [routerLink]=\"['/discussions', 'newtopic']\">Post</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n            <!--<app-topic-list></app-topic-list>-->\n          <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/discussions/topic/show-topic/show-topic.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/discussions/topic/show-topic/show-topic.component.ts ***!
  \**********************************************************************/
/*! exports provided: ShowTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowTopicComponent", function() { return ShowTopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _topic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../topic.service */ "./src/app/discussions/topic/topic.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ShowTopicComponent = class ShowTopicComponent {
    constructor(topicService) {
        this.topicService = topicService;
    }
    ngOnInit() {
        this.topicService.getAllTopics();
    }
};
ShowTopicComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-show-topic',
        template: __webpack_require__(/*! ./show-topic.component.html */ "./src/app/discussions/topic/show-topic/show-topic.component.html"),
        styles: [__webpack_require__(/*! ./show-topic.component.css */ "./src/app/discussions/topic/show-topic/show-topic.component.css")]
    }),
    __metadata("design:paramtypes", [_topic_service__WEBPACK_IMPORTED_MODULE_1__["TopicService"]])
], ShowTopicComponent);



/***/ }),

/***/ "./src/app/discussions/topic/show-topic/topic-list/topic-item/topic-item.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/discussions/topic/show-topic/topic-list/topic-item/topic-item.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\n    margin-top: 20px;\n    color: #adadad;\n    background: #1e2642;\n    height: 100px;\n    cursor: pointer;\n    border: 1px groove #1e2642;\n    box-shadow: 5px 5px 70px black;\n    outline: none;\n}\n\nli:last-child hr{\n    display: none;\n}\n\nli:hover {\n  background: #28355f;\n}\n\nli:active {\n  background: #1c233c;\n  border: 1px groove #666567;\n}\n\n.topic-heading {\n    color: #cecece;\n    font-size: 25px;\n}\n\n.topic {\n    float: left;\n}\n\n.topic-views {\n    float: right;\n    margin-top: -30px;\n    margin-right: 70px;\n}\n\n.topic-comments {\n    float: right;\n    margin-top: -30px;\n    margin-right: 40px;\n}\n\n/* Done a lot before now just added float: right */\n\n/* @media only screen and (max-width: 1200px) {\n    .topic-views {\n        margin-left: 400px;\n    }\n\n    .topic-comments {\n        margin-left: 50px;\n    }\n}\n\n@media only screen and (max-width: 1000px) {\n    .topic-views {\n        margin-left: 350px;\n    }\n\n    .topic-comments {\n        margin-left: 30px;\n    }\n}\n\n@media only screen and (max-width: 800px) {\n    .topic-views {\n        display: none;\n    }\n\n    .topic-comments {\n        display: none;\n    }\n} */\n"

/***/ }),

/***/ "./src/app/discussions/topic/show-topic/topic-list/topic-item/topic-item.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/discussions/topic/show-topic/topic-list/topic-item/topic-item.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item list-group-striped\"\n    [routerLink] = \"['/', 'discussions', 'topic', topic.topicId]\"\n    routerLinkActive=\"active\">\n  <p class=\"topic-heading\"><strong>{{ topic.topicHeading}}</strong></p>\n  <div class=\"topic topic-main\">\n    <p>13 minutes ago by {{topic.topicByUserId}}</p>\n  </div>\n  <div class=\"topic topic-views\">\n    <p>1300</p>\n    <p>views</p>\n  </div>\n  <div class=\"topic topic-comments\">\n    <p>63</p>\n    <p>Replies</p>\n  </div>\n</li>\n"

/***/ }),

/***/ "./src/app/discussions/topic/show-topic/topic-list/topic-item/topic-item.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/discussions/topic/show-topic/topic-list/topic-item/topic-item.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TopicItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicItemComponent", function() { return TopicItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _topic_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../topic.model */ "./src/app/discussions/topic/topic.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TopicItemComponent = class TopicItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('topic'),
    __metadata("design:type", _topic_model__WEBPACK_IMPORTED_MODULE_1__["Topic"])
], TopicItemComponent.prototype, "topic", void 0);
TopicItemComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-topic-item',
        template: __webpack_require__(/*! ./topic-item.component.html */ "./src/app/discussions/topic/show-topic/topic-list/topic-item/topic-item.component.html"),
        styles: [__webpack_require__(/*! ./topic-item.component.css */ "./src/app/discussions/topic/show-topic/topic-list/topic-item/topic-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TopicItemComponent);



/***/ }),

/***/ "./src/app/discussions/topic/show-topic/topic-list/topic-list.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/discussions/topic/show-topic/topic-list/topic-list.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 10px;\n}\n\n.topic-list {\n    padding: 10px 20px;\n}\n\n@media only screen and (max-width: 1300px){\n    .container {\n        width: 1100px;\n    }\n}\n\n@media only screen and (max-width: 1200px){\n    .container {\n        width: 1000px;\n    }\n}\n\n.topic-headings {\n    display: inline;\n  cursor: pointer;\n}\n\n.topic-headings:hover {\n  color: #888888;\n}\n\n.topic-headings:active {\n  color: #9e9e9e;\n}\n\n.topic-info{\n  color: white;\n  padding: 10px 20px;\n}\n\n.topic-sort {\n  color: white;\n  padding: 10px 20px;\n}\n\n.topic-select {\n  border-radius: 10px;\n  background: transparent;\n  border: 1px solid #8e8e8e;\n  color: white;\n  padding: 5px 25px;\n  outline: none;\n}\n\noption{\n  background: #1a2036;\n}\n\n.topic-list-rows {\n  border: 1px solid #8e8e8e;\n  width: 97%;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.topic-list-rows:last-child{\n  border-top: transparent;\n  border-radius: 0px 0px 10px 10px;\n}\n"

/***/ }),

/***/ "./src/app/discussions/topic/show-topic/topic-list/topic-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/discussions/topic/show-topic/topic-list/topic-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row topic-list-rows\">\n        <div class=\"col-md-11 topic-list\">\n            <div class=\"col-md-12\">\n                <div class=\"pull-left\">\n                    <p class=\"topic-headings topic-info\">Forum</p>\n                    <!--<p class=\"topic-headings topic-sort\">General Discussion</p>-->\n                    <select class=\"topic-select\" (change)=\"showSelectedTopics(selectedValue.value)\" #selectedValue>\n                      <option *ngFor=\"let tag of topicTags\" [value]=\"tag\">{{ getTagNameToDisplay(tag) }}</option>\n                    </select>\n                </div>\n                <div class=\"pull-right\">\n                    <p class=\"topic-headings topic-sort\">Most Recent</p>\n                    <p class=\"topic-headings topic-sort\">Popular</p>\n                    <p class=\"topic-headings topic-sort\">Top</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"isTopicsLoaded\" class=\"row topic-list-rows\">\n        <div class=\"col-md-10 col-md-offset-1 topic-list\">\n            <div class=\"col-md-12\">\n                <app-topic-item *ngFor=\"let topic of topics\" [topic]=\"topic\"></app-topic-item>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"!isTopicsLoaded\">\n        <p>No topics to load</p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/discussions/topic/show-topic/topic-list/topic-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/discussions/topic/show-topic/topic-list/topic-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TopicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicListComponent", function() { return TopicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _topic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../topic.service */ "./src/app/discussions/topic/topic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let TopicListComponent = class TopicListComponent {
    constructor(topicService, route, router) {
        this.topicService = topicService;
        this.route = route;
        this.router = router;
        this.topics = [];
        this.isTopicsLoaded = false;
        this.topicTags = new Set();
        this.selectedTopicType = 'general';
    }
    ngOnInit() {
        // Gets all topics based on topic tag in url
        this.route.params.subscribe((params) => {
            this.selectedTopicType = params['topic'];
            this.topicService.topicsFetched.subscribe((topicsLoaded) => {
                if (topicsLoaded) {
                    this.isTopicsLoaded = true;
                    this.topics = this.topicService.getAllTopicsByType(this.selectedTopicType);
                    this.topicTags = this.topicService.getAllTags(); // gets all tags to populate dropdown
                }
                else {
                    this.isTopicsLoaded = true;
                    this.topics = [];
                }
            });
            this.topics = this.topicService.getAllTopicsByType(this.selectedTopicType); // By default general is selected on first visit to page
            this.topicTags = this.topicService.getAllTags(); // gets all tags to populate dropdown
        });
        // this.topics = this.topicService.getAllTopicsByType(this.selectedTopicType); // By default general is selected on first visit to page
        // this.topicTags = this.topicService.getAllTags(); // gets all tags to populate dropdown
    }
    // redirect the application when user clicks on topic by appending topic id
    showSelectedTopics(selectedValue) {
        console.log('Selected Option ' + selectedValue);
        this.router.navigate(['../', selectedValue], { relativeTo: this.route });
    }
    // Return tag name capitalizing first letter for dropdown
    getTagNameToDisplay(tag) {
        return tag.substring(0, 1).toUpperCase() + tag.substring(1, tag.length);
    }
};
TopicListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-topic-list',
        template: __webpack_require__(/*! ./topic-list.component.html */ "./src/app/discussions/topic/show-topic/topic-list/topic-list.component.html"),
        styles: [__webpack_require__(/*! ./topic-list.component.css */ "./src/app/discussions/topic/show-topic/topic-list/topic-list.component.css")]
    }),
    __metadata("design:paramtypes", [_topic_service__WEBPACK_IMPORTED_MODULE_1__["TopicService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], TopicListComponent);



/***/ }),

/***/ "./src/app/discussions/topic/topic-details/topic-details.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/discussions/topic/topic-details/topic-details.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topic-detail-container{\n  margin: 20px;\n  box-shadow: 25px 10px 25px black;\n}\n\n.topic-heading{\n  background: #1e2746;\n  color: #adadad;\n  border: 1px solid #464646;\n  border-radius: 10px 10px 0px 0px;\n}\n\n.topic-heading p{\n  line-height: 10px;\n}\n\n.topic-summary{\n  background: #1e2746;\n  color: #adadad;\n  border: 1px solid #464646;\n  height: 350px;\n  overflow: hidden;\n  border-top: none;\n  border-bottom: none;\n}\n\n.topic-summary p{\n  margin-top: 20px;\n  line-height: 40px;\n  font-size: 25px;\n}\n\n.topic-summary:hover{\n  overflow-y: scroll;\n}\n\n.topic-comments{\n  background: #1e2746;\n  color: #adadad;\n  border: 1px solid #464646;\n  border-radius: 0px 0px 10px 10px;\n  padding: 10px;\n}\n\n.topic-comments li{\n  display: inline;\n  color: #9e9e9e;\n  margin-right: 80px;\n  cursor: pointer;\n  padding: 10px 40px;\n  border-radius: 5px;\n}\n\n.topic-comments li:hover{\n    background: #dcdcdc0a;\n}\n\n.like-icon {\n    margin-right: 5px;\n    margin-bottom: 7px;\n}\n\n.comment-icon {\n    margin-right: 5px;\n}\n"

/***/ }),

/***/ "./src/app/discussions/topic/topic-details/topic-details.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/discussions/topic/topic-details/topic-details.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topic-detail-container\" *ngIf=\"isTopicLoaded\">\n  <div class=\"row topic-heading\">\n    <div class=\"col-md-12\">\n      <h2>{{ topic.topicHeading }}</h2>\n      <p>Posted by {{ topic.topicByUserId }}</p>\n    </div>\n  </div>\n  <div class=\"row topic-summary\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <p>{{ topic.topicSummary }}</p>\n    </div>\n  </div>\n  <div class=\"row topic-comments\">\n    <div class=\"col-md-12\">\n      <ul>\n        <li><img class=\"like-icon\" src=\"https://png.icons8.com/ios/24/B9B9B9/facebook-like.png\">Up Vote</li>\n        <li><img class=\"comment-icon\" src=\"https://png.icons8.com/windows/24/B9B9B9/topic.png\">Comment</li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/discussions/topic/topic-details/topic-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/discussions/topic/topic-details/topic-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: TopicDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDetailsComponent", function() { return TopicDetailsComponent; });
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../authenticate/authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _topic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topic.service */ "./src/app/discussions/topic/topic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let TopicDetailsComponent = class TopicDetailsComponent {
    constructor(topicService, route, authService) {
        this.topicService = topicService;
        this.route = route;
        this.authService = authService;
        this.isTopicLoaded = false;
    }
    ngOnInit() {
        // Fires everytime id changes in url and gets new topic based on Id from topicService
        this.route.params.subscribe((params) => {
            this.isTopicLoaded = false;
            this.topicId = params['id'];
            this.topic = this.topicService.getTopicById(this.topicId);
            if (this.topic == null) {
                this.topicService.getTopicFromAPI(this.topicId).subscribe((localTopic) => {
                    this.topic = localTopic;
                    this.isTopicLoaded = true;
                }, error => {
                    this.isTopicLoaded = false;
                    this.authService.logout();
                });
            }
            else {
                this.isTopicLoaded = true;
            }
        });
    }
};
TopicDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topic-details',
        template: __webpack_require__(/*! ./topic-details.component.html */ "./src/app/discussions/topic/topic-details/topic-details.component.html"),
        styles: [__webpack_require__(/*! ./topic-details.component.css */ "./src/app/discussions/topic/topic-details/topic-details.component.css")]
    }),
    __metadata("design:paramtypes", [_topic_service__WEBPACK_IMPORTED_MODULE_2__["TopicService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticateService"]])
], TopicDetailsComponent);



/***/ }),

/***/ "./src/app/discussions/topic/topic.component.css":
/*!*******************************************************!*\
  !*** ./src/app/discussions/topic/topic.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/discussions/topic/topic.component.html":
/*!********************************************************!*\
  !*** ./src/app/discussions/topic/topic.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/discussions/topic/topic.component.ts":
/*!******************************************************!*\
  !*** ./src/app/discussions/topic/topic.component.ts ***!
  \******************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let TopicComponent = class TopicComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopicComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-topic',
        template: __webpack_require__(/*! ./topic.component.html */ "./src/app/discussions/topic/topic.component.html"),
        styles: [__webpack_require__(/*! ./topic.component.css */ "./src/app/discussions/topic/topic.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TopicComponent);



/***/ }),

/***/ "./src/app/discussions/topic/topic.model.ts":
/*!**************************************************!*\
  !*** ./src/app/discussions/topic/topic.model.ts ***!
  \**************************************************/
/*! exports provided: Topic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function() { return Topic; });
class Topic {
    constructor(topicId, topicHeading, topicType, topicPostedTime, topicByUserId, topicSummary) {
        this.topicId = topicId;
        this.topicHeading = topicHeading;
        this.topicType = topicType;
        this.topicPostedTime = topicPostedTime;
        this.topicByUserId = topicByUserId;
        this.topicSummary = topicSummary;
    }
}


/***/ }),

/***/ "./src/app/discussions/topic/topic.service.ts":
/*!****************************************************!*\
  !*** ./src/app/discussions/topic/topic.service.ts ***!
  \****************************************************/
/*! exports provided: TopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return TopicService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../authenticate/authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let TopicService = class TopicService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.topicsAPI = 'v1/secured/topics/';
        this.topics = [];
        this.topicsByType = []; // Stores topic by type
        this.topicsFetched = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.singleTopicFetched = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.isTopicsLoaded = false;
    }
    // Gets all the topics
    getAllTopics() {
        // return this.topics.slice();
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': this.authService.token });
        this.http.get(this.topicsAPI + 'all', { headers: httpHeaders }).subscribe((topics) => {
            this.topics = topics;
            this.topicsFetched.next(true);
            this.isTopicsLoaded = true;
        }, error => {
            console.log(error);
            this.topicsFetched.next(false);
            this.isTopicsLoaded = true;
            this.authService.logout();
        });
    }
    // Adds new topic to all topics list
    addTopic(topic) {
        // this.topics.push(topic);
        topic.topicByUserId = this.authService.getLoggeduser().username;
        console.log(topic);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': this.authService.token });
        this.http.post(this.topicsAPI + 'save', topic, { headers: httpHeaders }).subscribe((gotTopic) => {
            alert('posted topic with id ' + gotTopic.topicId);
            this.isTopicsLoaded = false;
            this.getAllTopics();
        }, error => {
            console.log(error);
            this.authService.logout();
        });
    }
    // Returns single topic based on Id
    getTopicById(topicId) {
        for (const topic of this.topics) {
            if (topic.topicId.toString() === topicId) {
                this.singleTopic = topic;
            }
        }
        return this.singleTopic;
    }
    getTopicFromAPI(topicId) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Authorization': this.authService.token });
        return this.http.get(this.topicsAPI + 'topic/' + topicId, { headers: httpHeaders });
    }
    // Returns all topics based on type
    getAllTopicsByType(topicType) {
        this.topicsByType = [];
        for (const topic of this.topics) {
            for (const type of topic.topicType) {
                if (type.typeName === topicType) {
                    this.topicsByType.push(topic);
                }
            }
        }
        return this.topicsByType.slice();
    }
    // Returns all topics types
    getAllTags() {
        const tagsList = new Set();
        for (const topic of this.topics) {
            for (const type of topic.topicType) {
                tagsList.add(type.typeName);
            }
        }
        return tagsList;
    }
};
TopicService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
], TopicService);



/***/ }),

/***/ "./src/app/discussions/topic/write-topic/write-topic.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/discussions/topic/write-topic/write-topic.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topic-main-header{\r\n    color: #ececec;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.topic-sub-headers{\r\n    color: #c1c1c1;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n#topic-title{\r\n    height: 35px;\r\n    width: 800px;\r\n}\r\n\r\n#topic-body{\r\n    height: 250px;\r\n    width: 800px;\r\n    max-width: 800px;\r\n    min-width: 800px;\r\n    min-height: 250px;\r\n    overflow: scroll;\r\n}\r\n\r\n#topic-tags{\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n    height: 35px;\r\n    width: 760px;\r\n    margin-bottom: 35px;\r\n}\r\n\r\n#btn-post-topic{\r\n    position: absolute;\r\n    right: 100px;\r\n    bottom: 60px;\r\n}\r\n\r\n.selected-topic-tags-list{\r\n    position: absolute;\r\n    left: 20px;\r\n    bottom: 82px;\r\n}\r\n\r\n.selected-topic-tags-item{\r\n    display: inline;\r\n    background: green;\r\n    border-radius: 5px;\r\n    color: white;\r\n    padding: 3px 15px;\r\n    margin: 8px;\r\n}\r\n\r\n.delete-selected-topic-tags{\r\n    color: white;\r\n    font-weight: 900;\r\n    margin-left: 10px;\r\n    margin-right: -5px;\r\n    text-decoration: none;\r\n}\r\n\r\n.delete-selected-topic-tags:hover{\r\n    cursor: pointer;\r\n    color: blue;\r\n}\r\n\r\n.topic-tags-list-group{\r\n    display: none;\r\n    width: 800px;\r\n    margin-top: -34px;\r\n}\r\n\r\n.topic-tags-list-group-item{\r\n    font-size: 16px;\r\n    font-weight: 800;\r\n}\r\n\r\n.topic-tags-list-group-item:hover{\r\n    cursor: pointer;\r\n    color: #c1c1c1;\r\n    background:#0066ff;\r\n}\r\n\r\n.empty-field{\r\n    color: red;\r\n    font-style: italic;\r\n}\r\n\r\n.error-div{\r\n  margin-top: 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n.error-div-red{\r\n  color: red;\r\n}\r\n\r\n.error-div-yellow{\r\n  color: yellow;\r\n}\r\n\r\n.fa-warning{\r\n  margin-right: 5px;\r\n}\r\n\r\n.fa-red {\r\n  color: red;\r\n}\r\n\r\n.fa-yellow{\r\n  color: yellow;\r\n}\r\n\r\n.error-msg {\r\n  display: inline-block;\r\n  font: 400 12px Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\r\n  font-weight: bold;\r\n  margin-bottom: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/discussions/topic/write-topic/write-topic.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/discussions/topic/write-topic/write-topic.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"topic-main-header\">Start a Topic !!!</h2>\n\n<h4 class=\"topic-sub-headers\">Title</h4>\n<div class=\"error-div error-div-red\" *ngIf=\"isTopicTitleInputNull\">\n  <i class=\"fa fa-warning fa-red\"></i>\n  <p class=\"error-msg\">Add a title to the topic</p>\n</div>\n<!-- <p class=\"empty-field\" *ngIf=\"isTopicTitleInputNull\">Should not be null</p> -->\n<input id=\"topic-title\" class=\"form-control\" type=\"text\" [(ngModel)]=\"topicTitleInput\">\n\n<h4 class=\"topic-sub-headers\">Body</h4>\n<div class=\"error-div error-div-red\" *ngIf=\"isTopicBodyInputNull\">\n  <i class=\"fa fa-warning fa-red\"></i>\n  <p class=\"error-msg\">write something in the body</p>\n</div>\n<!-- <p class=\"empty-field\" *ngIf=\"isTopicBodyInputNull\">Should not be null</p> -->\n<textarea id=\"topic-body\" class=\"form-control\" [(ngModel)]=\"topicBodyInput\"></textarea>\n\n<h4 class=\"topic-sub-headers\">Tags</h4>\n<ul class=\"selected-topic-tags-list\">\n    <li *ngFor=\"let selectedCurrentTag of selectedTopicTags\"\n        class=\"selected-topic-tags-item\">\n            {{selectedCurrentTag.typeName}}\n        <a class=\"delete-selected-topic-tags\" (click)=\"deleteSelectedTag(selectedCurrentTag)\">&times;</a>\n    </li>\n</ul>\n<div class=\"error-div error-div-red\" *ngIf=\"isTopicTagInputNull\">\n  <i class=\"fa fa-warning fa-red\"></i>\n  <p class=\"error-msg\">Select tags or Add a new tag</p>\n</div>\n<div class=\"error-div error-div-yellow\" *ngIf=\"isTagAlreadyPresent\">\n  <i class=\"fa fa-warning fa-yellow\"></i>\n  <p class=\"error-msg\">Tag is already selected</p>\n</div>\n<div class=\"error-div error-div-yellow\" *ngIf=\"isAddingTagEmpty\">\n  <i class=\"fa fa-warning fa-yellow\"></i>\n  <p class=\"error-msg\">Tag name should be atleast 4 letters</p>\n</div>\n<!-- <p class=\"empty-field\" *ngIf=\"isTopicTagInputNull\">Should not be null</p> -->\n<input  id=\"topic-tags\" class=\"form-control\"\n        type=\"text\"\n        (keydown)=\"showAllTopicTagsMatches()\"\n        [(ngModel)]=\"topicTagInput\" >\n<button class=\"btn btn-primary add-topic\" (click)=\"addTopicTag()\">+</button>\n\n<ul class=\"list-group topic-tags-list-group\" #topicTagsList>\n    <li *ngFor=\"let topicTag of allTopicTagOptions\"\n        class=\"list-group-item topic-tags-list-group-item\"\n        (click)=\"selectCurrentTag(topicTag)\">{{topicTag}}</li>\n</ul>\n\n<button id=\"btn-post-topic\" class=\"btn btn-primary\" (click)=\"saveTopic()\">Post your Topic</button>\n"

/***/ }),

/***/ "./src/app/discussions/topic/write-topic/write-topic.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/discussions/topic/write-topic/write-topic.component.ts ***!
  \************************************************************************/
/*! exports provided: WriteTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteTopicComponent", function() { return WriteTopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _topic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../topic.service */ "./src/app/discussions/topic/topic.service.ts");
/* harmony import */ var _topic_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topic.model */ "./src/app/discussions/topic/topic.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let WriteTopicComponent = class WriteTopicComponent {
    constructor(topicService, router) {
        this.topicService = topicService;
        this.router = router;
        this.topicTitleInput = ''; // topic title field two way binding
        this.topicBodyInput = ''; // topic body field two way binding
        this.topicTagInput = ''; // topic tag field two way binding
        this.isTopicTitleInputNull = false; // Check if topic title field is empty
        this.isTopicBodyInputNull = false; // Check if topic body field is empty
        this.isTopicTagInputNull = false; // Check if topic tag field is empty
        this.allTopicTagOptions = []; // stores all matched tags
        this.selectedTopicTags = []; // stores all selected tags
        this.isTagAlreadyPresent = false; // Check if topic tags are selected twice
        this.isAddingTagEmpty = false; // Check if topic tag input field is empty before adding new topic
    }
    ngOnInit() {
    }
    // Method to get all matched tags
    showAllTopicTagsMatches() {
        this.allTopicTagOptions = [];
        if (this.topicTagInput.length > 2) {
            this.topicTagsList.nativeElement.style.display = 'block'; // shows the matched list
            const topicTags = this.topicService.getAllTags();
            // console.log(topicTags, this.topicTag);
            for (const tag of topicTags) {
                let tagMatches = [];
                tagMatches = tag.toLowerCase().match(this.topicTagInput.toLowerCase());
                if (tagMatches != null && tagMatches.length > 0) {
                    this.allTopicTagOptions.push(tag); // Making list to show matched list
                    break;
                }
            }
            // console.log(this.allTopicTagOptions);
        }
        else {
            this.topicTagsList.nativeElement.style.display = 'none'; // hides the matched list
        }
        this.resetTagInputWarnings(); // Resets other warnings signs
    }
    /**
     * Resets empty tag input field signal signs
     */
    resetTagInputWarnings() {
        this.isAddingTagEmpty = false;
        this.isTopicTagInputNull = false;
    }
    /**
     * Adds new topic tag from topic tag input field after validating conditions
     * 1. Checks if field is empty
     * 2. Checks if tag is already added
     */
    addTopicTag() {
        // Reseting before checking others
        this.isTagAlreadyPresent = false;
        this.isAddingTagEmpty = false;
        this.isTopicTagInputNull = false;
        if (this.topicTagInput != null && this.topicTagInput.trim().length > 3) {
            for (const topicType of this.selectedTopicTags) {
                if (topicType.typeName.toLowerCase() === this.topicTagInput.toLowerCase()) {
                    this.isTagAlreadyPresent = true; // Iterates and finds if tag user wants to add is already added
                    break;
                }
            }
        }
        else {
            if (this.topicTagInput.trim().length === 0) {
                this.isTopicTagInputNull = true; // Checks if tag input field is already empty
            }
            this.isAddingTagEmpty = true; // Checks if tag field value length is less than 3
        }
        // If validation passed add the tag to selected topics list
        if (!this.isTagAlreadyPresent && !this.isTopicTagInputNull && !this.isAddingTagEmpty) {
            this.selectedTopicTags.push({ typeId: null, typeName: this.topicTagInput.toLowerCase() });
            // After adding reset all signals for next tag checks
            this.isAddingTagEmpty = false;
            this.isTagAlreadyPresent = false;
            this.isTopicTagInputNull = false;
        }
        this.topicTagInput = '';
        document.getElementById('topic-tags').focus();
    }
    /**
     * Triggers when user selects a particular tag from dropdown matched tags list and adds to selectedTopicTags list
     *
     * @param topicTag
     */
    selectCurrentTag(topicTag) {
        this.isTagAlreadyPresent = false;
        for (const topicType of this.selectedTopicTags) {
            if (topicType.typeName.toLowerCase() === topicTag.toLowerCase()) {
                this.isTagAlreadyPresent = true; // Iterates and finds if tag user wants to add is already added
                break;
            }
        }
        if (!this.isTagAlreadyPresent) {
            this.selectedTopicTags.push({ typeId: null, typeName: topicTag.toLowerCase() });
        }
        this.isTopicTagInputNull = false;
        this.topicTagInput = '';
        document.getElementById('topic-tags').focus();
        this.showAllTopicTagsMatches(); // Just to hide the dropdown of matched topic tags
    }
    /**
     * delete the tag from selectedTopicTags list
     * @param selectedCurrentTag
     */
    deleteSelectedTag(selectedCurrentTag) {
        const index = this.selectedTopicTags.indexOf(selectedCurrentTag, 0);
        if (index > -1) {
            this.selectedTopicTags.splice(index, 1);
        }
    }
    /**
     * Saves new topic after checking all the feilds are not empty
     */
    saveTopic() {
        if (this.topicTitleInput.length != null && this.topicTitleInput.length > 0) {
            this.isTopicTitleInputNull = false;
            if (this.topicBodyInput.length != null && this.topicBodyInput.length > 0) {
                this.isTopicBodyInputNull = false;
                if (this.selectedTopicTags.length > 0) {
                    this.isTopicTagInputNull = false;
                    const topic = new _topic_model__WEBPACK_IMPORTED_MODULE_2__["Topic"](null, this.topicTitleInput, this.selectedTopicTags, new Date(), '1', this.topicBodyInput);
                    console.log(topic);
                    this.topicService.addTopic(topic);
                    this.topicService.topicsFetched.subscribe((areTopicsLoaded) => {
                        if (areTopicsLoaded) {
                            this.router.navigate(['/', 'discussions', 'topics', 'general']);
                        }
                        else {
                            console.log('something went wrong while saving topic');
                        }
                    }, error => {
                        console.log('something went wrong while saving topic ', error);
                    });
                    // console.log(this.topicTitleInput, this.topicBodyInput, this.selectedTopicTags);
                }
                else {
                    this.isTopicTagInputNull = true;
                }
            }
            else {
                this.isTopicBodyInputNull = true;
            }
        }
        else {
            this.isTopicTitleInputNull = true;
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('topicTagsList'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], WriteTopicComponent.prototype, "topicTagsList", void 0);
WriteTopicComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-write-topic',
        template: __webpack_require__(/*! ./write-topic.component.html */ "./src/app/discussions/topic/write-topic/write-topic.component.html"),
        styles: [__webpack_require__(/*! ./write-topic.component.css */ "./src/app/discussions/topic/write-topic/write-topic.component.css")]
    }),
    __metadata("design:paramtypes", [_topic_service__WEBPACK_IMPORTED_MODULE_1__["TopicService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], WriteTopicComponent);



/***/ }),

/***/ "./src/app/docker/docker.component.css":
/*!*********************************************!*\
  !*** ./src/app/docker/docker.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/docker/docker.component.html":
/*!**********************************************!*\
  !*** ./src/app/docker/docker.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row\">\n    <div class=\"col-md-6\">\n        <app-posts></app-posts>\n    </div>\n    <div class=\"col-md-6\">\n        <!-- <app-post-details></app-post-details> -->\n        <router-outlet></router-outlet>\n    </div>\n</div>\n\n\n  \n"

/***/ }),

/***/ "./src/app/docker/docker.component.ts":
/*!********************************************!*\
  !*** ./src/app/docker/docker.component.ts ***!
  \********************************************/
/*! exports provided: DockerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DockerComponent", function() { return DockerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let DockerComponent = class DockerComponent {
    constructor() { }
    ngOnInit() {
    }
};
DockerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-docker',
        template: __webpack_require__(/*! ./docker.component.html */ "./src/app/docker/docker.component.html"),
        styles: [__webpack_require__(/*! ./docker.component.css */ "./src/app/docker/docker.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DockerComponent);



/***/ }),

/***/ "./src/app/docker/post-details/post-details.component.css":
/*!****************************************************************!*\
  !*** ./src/app/docker/post-details/post-details.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-details-tab{\n    background: #1e2642;\n    border-radius: 10px;\n    padding: 20px 40px;\n    height: auto;\n    max-height: 515px;\n    margin-bottom: 0px;\n    box-shadow: 5px 5px 20px black;\n    overflow: hidden;\n}\n\nh3 {\n    color: #adadad;\n}\n\np.lead {\n  color: #adadad;\n  padding: 10px 20px;\n}\n\n.post-details-user-img{\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  margin-right: 10px;\n}\n\n.post-details-tab:hover {\n  overflow-y: scroll;\n}\n\n#post-img{\n    margin-left: 20px;\n    margin-bottom: 20px;\n    width: 430px;\n    height: 250px;\n    box-shadow: 6px 5px 20px black;\n}\n\nli{\n  display: inline;\n  color: #9e9e9e;\n  margin-right: 80px;\n  cursor: pointer;\n  padding: 10px 40px;\n  border-radius: 5px;\n}\n\nli:hover{\n    background: #dcdcdc0a;\n}\n\n.like-icon {\n    margin-right: 5px;\n    margin-bottom: 7px;\n}\n\n.comment-icon {\n    margin-right: 5px;\n}\n"

/***/ }),

/***/ "./src/app/docker/post-details/post-details.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/docker/post-details/post-details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"postLoaded\" class=\"jumbotron post-details-tab\">\n  <div class=\"pull-left\">\n    <img class=\"post-details-user-img\" src=\"assets/images/seeth.jpg\">\n  </div>\n  <h3 class=\"display-4\">{{ post.postedByUserId }}</h3>\n  <hr class=\"my-4\">\n  <p class=\"lead\">\n    {{ post.postDetails }}\n  </p>\n  <div *ngIf=\"post.hasImages\">\n    <img *ngIf=\"post.hasImages\" [src]=\"getImagePath()\" id=\"post-img\" width=\"200px\" height=\"200px\">\n  </div>\n  <p>\n    <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a>\n  </p>\n  <hr>\n  <ul>\n    <li><img class=\"like-icon\" src=\"https://png.icons8.com/ios/24/B9B9B9/facebook-like.png\">Like</li>\n    <li><img class=\"comment-icon\" src=\"https://png.icons8.com/windows/24/B9B9B9/topic.png\">Comment</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/docker/post-details/post-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/docker/post-details/post-details.component.ts ***!
  \***************************************************************/
/*! exports provided: PostDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailsComponent", function() { return PostDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posts_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/posts.service */ "./src/app/docker/posts/posts.service.ts");
/* harmony import */ var src_app_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authenticate/authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PostDetailsComponent = class PostDetailsComponent {
    constructor(postServices, authServices, route, router) {
        this.postServices = postServices;
        this.authServices = authServices;
        this.route = route;
        this.router = router;
        this.postLoaded = false; // flag to avoid null exception for post in template
    }
    ngOnInit() {
        // Gets post id from URL and calls postService.getPostById(id) for post object response
        // If anything goes wrong authService.logout() is called
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.postServices.getPostById(this.id).subscribe((post) => {
                console.log(post);
                this.postLoaded = true;
                this.post = post;
            }, error => {
                this.postLoaded = false;
                console.log('There is some error while fetching post by id ', error);
                this.authServices.logout();
                this.router.navigate(['/', 'auth', 'login']);
            });
        });
    }
    getImagePath() {
        console.log('forum-bucket/posts/post_' + this.post.postId + '.png');
        return 'forum-bucket/posts/post_' + this.post.postId + '.png';
    }
};
PostDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-post-details',
        template: __webpack_require__(/*! ./post-details.component.html */ "./src/app/docker/post-details/post-details.component.html"),
        styles: [__webpack_require__(/*! ./post-details.component.css */ "./src/app/docker/post-details/post-details.component.css")]
    }),
    __metadata("design:paramtypes", [_posts_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostServices"],
        src_app_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], PostDetailsComponent);



/***/ }),

/***/ "./src/app/docker/posts/posts.component.css":
/*!**************************************************!*\
  !*** ./src/app/docker/posts/posts.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/docker/posts/posts.component.html":
/*!***************************************************!*\
  !*** ./src/app/docker/posts/posts.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" > <!-- (click)=\"popup()\" -->\n  <!-- <div class=\"col-md-12\">\n    <textarea disabled placeholder=\"Write something....!!!\" class=\"display-post-textarea\"></textarea>\n    <div class=\"display-post-send\">\n      <ul>\n        <li><span class=\"glyphicon glyphicon-picture\"></span>&nbsp;&nbsp;\n          <label for=\"display-post-img\">Add Photo</label>\n        </li>\n        <li><span class=\"glyphicon glyphicon-link\"></span>&nbsp;&nbsp;Link Address</li>\n        <li><img src=\"assets/images/post-send2.png\" class=\"display-post-send-img\"></li>\n      </ul>\n    </div>\n  </div> -->\n  <div class=\"col-md-12\">\n    <app-write-post></app-write-post>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-show-post></app-show-post>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/docker/posts/posts.component.ts":
/*!*************************************************!*\
  !*** ./src/app/docker/posts/posts.component.ts ***!
  \*************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let PostsComponent = class PostsComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
    popup() {
        this.router.navigate(['createpost'], { relativeTo: this.route });
    }
};
PostsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-posts',
        template: __webpack_require__(/*! ./posts.component.html */ "./src/app/docker/posts/posts.component.html"),
        styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/docker/posts/posts.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], PostsComponent);



/***/ }),

/***/ "./src/app/docker/posts/posts.model.ts":
/*!*********************************************!*\
  !*** ./src/app/docker/posts/posts.model.ts ***!
  \*********************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
class Post {
    constructor(postId, postedByUserId, postDetails, postCreatedOn, postUpdatedOn, hasImages) {
        this.postId = postId;
        this.postedByUserId = postedByUserId;
        this.postDetails = postDetails;
        this.postCreatedOn = postCreatedOn;
        this.postUpdatedOn = postUpdatedOn;
        this.hasImages = hasImages;
    }
}


/***/ }),

/***/ "./src/app/docker/posts/posts.service.ts":
/*!***********************************************!*\
  !*** ./src/app/docker/posts/posts.service.ts ***!
  \***********************************************/
/*! exports provided: PostServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostServices", function() { return PostServices; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authenticate/authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PostServices = class PostServices {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.postsAPI = 'v1/secured/posts/'; // Posts module API URL
        // Stores all posts from API in an array to use for future references
        this.posts = [];
        this.postAdded = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); // arms to fire when a new post is added
        this.postsFetched = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); // arms to fire when all posts are fetched
    }
    // Saves the post received through parameter
    // On save success calls fetchPosts()
    // If anything goes wrong authService.logout() is called
    savePost(post, fileName, fileString) {
        console.log(post);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authService.token });
        this.http.post(this.postsAPI + 'save', post, { headers: httpHeaders }).subscribe((localpost) => {
            this.fetchPosts('NEW_POST_ADDED');
            if (localpost.hasImages && fileString != null && fileString.length > 0) {
                this.savePostImage(localpost.postId, fileName, fileString);
            }
            else {
                console.error('Post Image Failed to upload');
            }
        }, error => {
            console.log('error occured while saving post', error);
            this.authService.logout();
        });
    }
    savePostImage(postId, fileName, fileString) {
        // console.log("Image string data ", fileString)
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authService.token });
        this.http.post(this.postsAPI + 'imageUpload', { 'postId': postId, 'fileName': fileName, 'imageStringData': fileString }, { headers: httpHeaders, responseType: 'text' }).subscribe((imagePath) => {
            console.log('Image Path: ', imagePath);
        }, error => {
            console.error('Something went wrong while storing image');
            this.authService.logout();
        });
    }
    // fetches all posts from API and saves in posts array locally
    // If anything goes wrong authService.logout() is called
    fetchPosts(fire) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authService.token });
        this.http.get(this.postsAPI + 'all', { headers: httpHeaders }).subscribe((posts) => {
            this.posts = posts;
            if (fire === 'GET_ALL_POSTS') {
                this.postsFetched.next(true);
            }
            else if (fire === 'NEW_POST_ADDED') {
                this.postAdded.next(this.posts.slice());
            }
        }, error => {
            console.log('error occurred while fetching posts', error);
            if (fire === 'GET_ALL_POSTS') {
                this.postsFetched.next(false);
            }
            this.authService.logout();
        });
    }
    // Returns all posts slice
    getAllPosts() {
        return this.posts.slice();
    }
    // Fetches single posts based on its postId from API server
    getPostById(id) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authService.token });
        return this.http.get(this.postsAPI + 'post/' + id, { headers: httpHeaders });
    }
    // Returns total number of posts count
    getTotalPostCount() {
        return this.posts.length;
    }
};
PostServices = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]])
], PostServices);



/***/ }),

/***/ "./src/app/docker/posts/show-post/post-list/post-item/post-item.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/docker/posts/show-post/post-list/post-item/post-item.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item{\n    height: 130px;\n    background: transparent;\n    color: #adadad;\n    padding: 10px 60px 40px 40px;\n    border: 1px solid #464646;\n    cursor: pointer;\n    border-radius: 5px;\n    box-shadow: 4px 4px 10px black;\n    outline: none;\n}\n\n.list-group-item hr{\n    border: 1px solid #464646;\n    margin-top: 45px;\n    margin-bottom: 10px;\n}\n\n.user-name{\n    display: inline;\n}\n\n.user-img {\n    width: 30px;\n    height: 30px;\n    border-radius: 25px;\n}\n\n.post-teaser{\n    padding: 5px 35px;\n}\n\n.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n.list-group-item:hover{\n  background: #1a2036;\n}\n"

/***/ }),

/***/ "./src/app/docker/posts/show-post/post-list/post-item/post-item.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/docker/posts/show-post/post-list/post-item/post-item.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li class=\"list-group-item\" [routerLink] = \"['/posts', post.postId]\"\nrouterLinkActive=\"active\">\n  <div class=\"pull-left\">\n      <img class=\"user-img\" src=\"assets/images/seeth.jpg\">\n      &nbsp;&nbsp;\n      <h4 class=\"user-name\">{{ post.postedByUserId }}</h4>\n      <br>\n      <h6>{{ post.postCreatedOn }}</h6>\n  </div>\n  <br>\n  <hr>\n  <div class=\"post-teaser\">\n    <p>{{ post.postDetails  | shorten:50 }}</p>\n  </div>\n</li><br>\n"

/***/ }),

/***/ "./src/app/docker/posts/show-post/post-list/post-item/post-item.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/docker/posts/show-post/post-list/post-item/post-item.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PostItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostItemComponent", function() { return PostItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _posts_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../posts.model */ "./src/app/docker/posts/posts.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let PostItemComponent = class PostItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('postItem'),
    __metadata("design:type", _posts_model__WEBPACK_IMPORTED_MODULE_1__["Post"])
], PostItemComponent.prototype, "post", void 0);
PostItemComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-post-item',
        template: __webpack_require__(/*! ./post-item.component.html */ "./src/app/docker/posts/show-post/post-list/post-item/post-item.component.html"),
        styles: [__webpack_require__(/*! ./post-item.component.css */ "./src/app/docker/posts/show-post/post-list/post-item/post-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PostItemComponent);



/***/ }),

/***/ "./src/app/docker/posts/show-post/post-list/post-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/docker/posts/show-post/post-list/post-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/docker/posts/show-post/post-list/post-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/docker/posts/show-post/post-list/post-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <app-post-item *ngFor=\"let post of posts\" [postItem]=\"post\"></app-post-item>\n</ul>"

/***/ }),

/***/ "./src/app/docker/posts/show-post/post-list/post-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/docker/posts/show-post/post-list/post-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../posts.service */ "./src/app/docker/posts/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let PostListComponent = class PostListComponent {
    constructor(postServices) {
        this.postServices = postServices;
        this.posts = []; // Stores all Posts fetched from post service
    }
    ngOnInit() {
        // Works when postFetched is fired when all posts are loaded from API
        this.postFetchedSubscription = this.postServices.postsFetched.subscribe((postsFetched) => {
            if (postsFetched) {
                this.posts = this.postServices.getAllPosts();
            }
            else {
                this.posts = [];
            }
        });
        // Works when a new post added to API. Refresh the posts array locally
        this.postAddedSubscription = this.postServices.postAdded.subscribe((posts) => {
            // console.log("Its fired");
            this.posts = posts;
        });
        // Call service to fetch posts from API
        this.postServices.fetchPosts('GET_ALL_POSTS');
    }
};
PostListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-post-list',
        template: __webpack_require__(/*! ./post-list.component.html */ "./src/app/docker/posts/show-post/post-list/post-list.component.html"),
        styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/docker/posts/show-post/post-list/post-list.component.css")]
    }),
    __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostServices"]])
], PostListComponent);



/***/ }),

/***/ "./src/app/docker/posts/show-post/show-post.component.css":
/*!****************************************************************!*\
  !*** ./src/app/docker/posts/show-post/show-post.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".show-posts{\n    background: #101833;\n    height: 390px;\n    width: 100%;\n    border-radius: 10px;\n    overflow: hidden;\n    margin-bottom: 0;\n}\n\n.posts-container{\n    padding-top: 20px;\n}\n\n.show-posts:hover {\n    overflow-y: scroll;\n}\n"

/***/ }),

/***/ "./src/app/docker/posts/show-post/show-post.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/docker/posts/show-post/show-post.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container show-posts\">\n  <div class=\"row\">\n    <div class=\"col-md-12 posts-container\">\n      <app-post-list></app-post-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/docker/posts/show-post/show-post.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/docker/posts/show-post/show-post.component.ts ***!
  \***************************************************************/
/*! exports provided: ShowPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPostComponent", function() { return ShowPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ShowPostComponent = class ShowPostComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShowPostComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-show-post',
        template: __webpack_require__(/*! ./show-post.component.html */ "./src/app/docker/posts/show-post/show-post.component.html"),
        styles: [__webpack_require__(/*! ./show-post.component.css */ "./src/app/docker/posts/show-post/show-post.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ShowPostComponent);



/***/ }),

/***/ "./src/app/docker/posts/write-post/write-post.component.css":
/*!******************************************************************!*\
  !*** ./src/app/docker/posts/write-post/write-post.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#write-post-div{\n  outline: none;\n}\n\n.post-textarea{\n  width: 100%;\n  height: 70px;\n  background: #1e2642;\n  border-radius: 10px 10px 0px 0px;\n  padding: 15px 0 30px 25px;\n  font-size: 15px;\n  color: white;\n  border: none;\n  resize: none;\n  outline: none;\n  overflow: hidden;\n}\n\n.post-textarea-popup{\n  height: 200px;\n  padding: 50px 50px;\n  font-size: 24px;\n  overflow: auto;\n}\n\n#loaded-img-name{\n  color: white;\n  background: green;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 5px 0px 5px 25px;\n  border-radius: 20px;\n}\n\n#del-post-img{\n  cursor: pointer;\n  color: black;\n  background: white;\n  font-size: 15px;\n  padding: 0px 3px;\n  margin-left: 30px;\n  margin-right: 15px;\n  border-radius: 20px;\n}\n\n.post-send {\n  width: 100%;\n  height: 35px;\n  background: #1e2746;\n  border-radius: 0px 0px 10px 10px;\n  padding: 8px 1px;\n  margin-bottom: 20px;\n}\n\n.post-send-popup{\n  height: 55px;\n  padding: 20px 1px;\n}\n\ninput[type=file] {\n  display: none;\n}\n\nlabel{\n  cursor: pointer;\n}\n\nul{\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nli{\n  float: left;\n  color: #adadad;\n  margin-left: 90px;\n  cursor: pointer;\n}\n\nli:hover {\n  color: white;\n}\n\n.post-send-img{\n  width: 30px;\n  height: 30px;\n  margin-top: 10px;\n}\n\n.post-send-img-popup{\n  width: 50px;\n  height: 50px;\n  margin-top: 0;\n}\n"

/***/ }),

/***/ "./src/app/docker/posts/write-post/write-post.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/docker/posts/write-post/write-post.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div tabindex=\"0\" id=\"write-post-div\" (click)=\"popup()\">\n  <textarea\n    cols=\"30\"\n    maxlength=\"100\"\n    rows=\"10\"\n    placeholder=\"Write something....!!!\"\n    class=\"post-textarea\"\n    [(ngModel)]=\"postMessage\"\n    [ngClass]=\"{'post-textarea-popup':popupCheck}\"\n    (blur)=\"popdown()\"\n    (input)=\"checkAllowPost()\"\n  >\n  </textarea>\n  <p id=\"loaded-img-name\" *ngIf=\"fileName\">\n      {{fileName}}\n      <span id=\"del-post-img\" (click)=\"deleteFiles()\">\n        &times;\n      </span>\n  </p>\n  <div class=\"post-send\" [ngClass]=\"{'post-send-popup':popupCheck}\">\n    <ul>\n      <li><span class=\"glyphicon glyphicon-picture\"></span>&nbsp;&nbsp;\n        <label for=\"post-img\" (click)=\"popup()\">Add Photo</label>\n        <input type=\"file\" id=\"post-img\" name=\"file\" (change)=\"getFiles($event)\">\n      </li>\n      <li><span class=\"glyphicon glyphicon-link\"></span>&nbsp;&nbsp;Link Address</li>\n      <li>\n        <img  src=\"assets/images/post-send2.png\"\n              class=\"post-send-img\"\n              *ngIf=\"allowPost\"\n              [ngClass]=\"{'post-send-img-popup':popupCheck}\"\n              (click)=\"addPost()\">\n      </li>\n    </ul>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/docker/posts/write-post/write-post.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/docker/posts/write-post/write-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: WritePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritePostComponent", function() { return WritePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts.service */ "./src/app/docker/posts/posts.service.ts");
/* harmony import */ var _posts_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.model */ "./src/app/docker/posts/posts.model.ts");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../authenticate/authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let WritePostComponent = class WritePostComponent {
    constructor(postServices, authService) {
        this.postServices = postServices;
        this.authService = authService;
        this.fileName = ''; // Stores file name
        this.hasImage = false; // Check if any file uploaded
        this.popupCheck = false; // Expands the write post
        this.allowPost = false; // Colapse the write post
    }
    ngOnInit() { }
    /**
     * Checks if textarea is not empty to allows user to post
     */
    checkAllowPost() {
        if (this.postMessage.trim().length > 0) {
            this.allowPost = true;
        }
        else {
            this.allowPost = false;
        }
    }
    /**
     * Expands the write post div
    */
    popup() {
        console.log('check up');
        this.popupCheck = true;
    }
    /**
     * colapse the write post div
    */
    popdown() {
        console.log('check down');
        this.popupCheck = false;
    }
    /**
     * Adds post by creating and sending a post object to postService
     */
    addPost() {
        this.loggedInUser = this.authService.loggedInUser.username;
        if (this.loggedInUser != null &&
            this.loggedInUser.trim() !== '' &&
            this.checkPostValid(this.postMessage, this.hasImage, this.filestring, this.fileName)) {
            console.log(this.postServices.getTotalPostCount() + 1);
            this.postServices.savePost(new _posts_model__WEBPACK_IMPORTED_MODULE_2__["Post"](null, this.loggedInUser, this.postMessage, new Date().getTime(), new Date().getTime(), this.hasImage), this.fileName, this.filestring);
        }
        this.popdown();
        this.postMessage = '';
        this.deleteFiles();
    }
    /**
     * Check if its valid to send a post to API
     */
    checkPostValid(postMessage, hasImage, filestring, fileName) {
        if (postMessage != null && postMessage.trim() !== '') {
            if (hasImage) {
                if (filestring != null && filestring.trim() !== '' && fileName != null && fileName.trim() !== '') {
                    // If uploaded checks if there is any data
                    return true; // If there is data its safe to post
                }
                return false; // Else something wrong
            }
            return true; // No files are uploaded and text area is not null its safe
        }
        return false; // Else not safe
    }
    /**
     * Reads file uploaded
     */
    getFiles(event) {
        console.log(event);
        this.files = event.target.files;
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        if (this.files[0] != null) {
            reader.readAsBinaryString(this.files[0]); // Taking only one file for now
            this.fileName = this.files[0].name;
            this.hasImage = true;
            this.allowPost = true;
        }
        else {
            console.log('No file selected');
            this.hasImage = false;
            this.allowPost = false;
        }
        // console.log(this.files[0].name);
    }
    /**
     * Converting file from binary to string
     * @param readerEvt
     */
    _handleReaderLoaded(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.filestring = btoa(binaryString); // Converting binary string data.
        // console.log(this.filestring);
    }
    /**
     * Empty all variables for next post
     */
    deleteFiles() {
        this.files = null;
        this.filestring = null;
        this.fileName = null;
        this.hasImage = false;
        this.allowPost = false;
    }
};
WritePostComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-write-post',
        template: __webpack_require__(/*! ./write-post.component.html */ "./src/app/docker/posts/write-post/write-post.component.html"),
        styles: [__webpack_require__(/*! ./write-post.component.css */ "./src/app/docker/posts/write-post/write-post.component.css")]
    }),
    __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostServices"], _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]])
], WritePostComponent);



/***/ }),

/***/ "./src/app/groups/groups.component.css":
/*!*********************************************!*\
  !*** ./src/app/groups/groups.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/groups/groups.component.html":
/*!**********************************************!*\
  !*** ./src/app/groups/groups.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  groups works!\n</p>\n"

/***/ }),

/***/ "./src/app/groups/groups.component.ts":
/*!********************************************!*\
  !*** ./src/app/groups/groups.component.ts ***!
  \********************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let GroupsComponent = class GroupsComponent {
    constructor() { }
    ngOnInit() {
    }
};
GroupsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-groups',
        template: __webpack_require__(/*! ./groups.component.html */ "./src/app/groups/groups.component.html"),
        styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GroupsComponent);



/***/ }),

/***/ "./src/app/guards/authenticate.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/guards/authenticate.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthenticateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateGuard", function() { return AuthenticateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authenticate/authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthenticateGuard = class AuthenticateGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // check whether user is logged in then redirects to request url or else redirects to login
    canActivate(route, state) {
        console.log('checking is user logged in before going to ', state.url, route.parent);
        if (this.authService.isUserLoggedIn) {
            return true;
        }
        else {
            this.router.navigate(['/', 'auth', 'login']);
            return false;
        }
        // return true;
    }
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
};
AuthenticateGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AuthenticateGuard);



/***/ }),

/***/ "./src/app/pipes/shorten.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/shorten.pipe.ts ***!
  \***************************************/
/*! exports provided: ShortenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ShortenPipe = class ShortenPipe {
    transform(value, limit) {
        if (value.length > limit) {
            return value.substr(0, limit) + '...';
        }
        return value;
    }
};
ShortenPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: "shorten",
    })
], ShortenPipe);



/***/ }),

/***/ "./src/app/profile/about/about.component.css":
/*!***************************************************!*\
  !*** ./src/app/profile/about/about.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".all-names{\r\n    font-size: 14px;\r\n    line-height: 18px;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: grey;\r\n}"

/***/ }),

/***/ "./src/app/profile/about/about.component.html":
/*!****************************************************!*\
  !*** ./src/app/profile/about/about.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loggedUser != null\" class=\"user-details-div\">\r\n\r\n    <table class=\"table table-hover\">\r\n        <tbody>\r\n            <tr>\r\n                <td class=\"all-names\">Name</td>\r\n                <td class=\"all-names\">{{ loggedUser.lastName }}  {{ loggedUser.firstName }}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"all-names\">Email</td>\r\n                <td class=\"all-names\">{{ loggedUser.email }}</td>\r\n            </tr>\r\n            <tr>\r\n                <td class=\"all-names\">Active</td>\r\n                <td class=\"all-names\">{{ loggedUser.active }}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"loggedUser == null\">\r\n    <p>No User Logged In</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/about/about.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/about/about.component.ts ***!
  \**************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AboutComponent = class AboutComponent {
    constructor(profileService) {
        this.profileService = profileService;
        this.loggedUser = null;
    }
    ngOnInit() {
        this.loggedUser = this.profileService.getAllUserDetails(); // Gets loggedIn user details to display
    }
};
AboutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! ./about.component.html */ "./src/app/profile/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/profile/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
], AboutComponent);



/***/ }),

/***/ "./src/app/profile/friends/friends.component.css":
/*!*******************************************************!*\
  !*** ./src/app/profile/friends/friends.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/friends/friends.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile/friends/friends.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  friends works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/friends/friends.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/friends/friends.component.ts ***!
  \******************************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FriendsComponent = class FriendsComponent {
    constructor() { }
    ngOnInit() {
    }
};
FriendsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-friends',
        template: __webpack_require__(/*! ./friends.component.html */ "./src/app/profile/friends/friends.component.html"),
        styles: [__webpack_require__(/*! ./friends.component.css */ "./src/app/profile/friends/friends.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FriendsComponent);



/***/ }),

/***/ "./src/app/profile/photos/photos.component.css":
/*!*****************************************************!*\
  !*** ./src/app/profile/photos/photos.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/photos/photos.component.html":
/*!******************************************************!*\
  !*** ./src/app/profile/photos/photos.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  photos works!\n</p>\n"

/***/ }),

/***/ "./src/app/profile/photos/photos.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/photos/photos.component.ts ***!
  \****************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PhotosComponent = class PhotosComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhotosComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-photos',
        template: __webpack_require__(/*! ./photos.component.html */ "./src/app/profile/photos/photos.component.html"),
        styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/profile/photos/photos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PhotosComponent);



/***/ }),

/***/ "./src/app/profile/profile-posts/profile-posts.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/profile/profile-posts/profile-posts.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-posts-container{\r\n    margin-top: 20px;\r\n}\r\n\r\n.posts-div{\r\n    width: 90%;\r\n    background: white;\r\n    padding: 20px 50px;\r\n    margin-bottom: 10px;\r\n    border-radius: 15px;\r\n    box-shadow: 5px 5px 15px grey;\r\n}\r\n\r\n.post-user{\r\n    font-size: 20px;\r\n    font-weight: 900;\r\n    color: #365899;\r\n    margin: 0px;\r\n}\r\n\r\n.post-time{\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    font-family: monospace;\r\n    margin-left: 1px;\r\n    color: slategrey;\r\n}\r\n\r\n.post-hr{\r\n    margin-bottom: 30px;\r\n    border-top: 1px #cacaca solid;\r\n    margin-left: -50px;\r\n    margin-right: -50px;\r\n}\r\n\r\n.post-msg{\r\nfont-size: 20px;\r\n    padding: 5px 15px;\r\n    font-weight: 500;\r\n    color: black;\r\n}\r\n\r\n.post-img{\r\n  width: 100%;\r\n  height: auto;\r\n  border: 1px groove #ffffff;\r\n  border-radius: 10px;\r\n  box-shadow: 5px 5px 5px grey;\r\n}\r\n"

/***/ }),

/***/ "./src/app/profile/profile-posts/profile-posts.component.html":
/*!********************************************************************!*\
  !*** ./src/app/profile/profile-posts/profile-posts.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isPostsLoaded\" class=\"user-posts-container\">\n    <div *ngFor=\"let post of usersPosts\" class=\"posts-div\">\n        <p class=\"post-user\">{{post.postedByUserId}}</p>\n        <p class=\"post-time\">{{post.postCreatedOn}}</p>\n        <hr class=\"post-hr\">\n        <p class=\"post-msg\">{{post.postDetails}}</p>\n        <div *ngIf=\"post.hasImages\">\n          <img class=\"post-img\" [src]=\"getImagePath(post)\" width=\"200px\" height=\"200px\">\n        </div>\n    </div>\n</div>\n<div *ngIf=\"!isPostsLoaded\">\n    <p>No Posts to Load</p>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile-posts/profile-posts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/profile/profile-posts/profile-posts.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfilePostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePostsComponent", function() { return ProfilePostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let ProfilePostsComponent = class ProfilePostsComponent {
    constructor(profileService) {
        this.profileService = profileService;
        this.usersPosts = []; // Stores posts models made by loggedIn user
        this.isPostsLoaded = false;
    }
    ngOnInit() {
        // Fires when user posts are loaded
        this.profileService.isUserPostsLoaded.subscribe((postsLoaded) => {
            if (postsLoaded) {
                this.isPostsLoaded = true;
                this.usersPosts = this.profileService.userPosts.slice();
            }
            else {
                this.isPostsLoaded = false;
                this.usersPosts = [];
            }
        });
        this.profileService.getAllUserPosts(); // Call API using profileService for user posts
    }
    getImagePath(post) {
        return 'forum-bucket/posts/post_' + post.postId + '.png';
    }
};
ProfilePostsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-profile-posts',
        template: __webpack_require__(/*! ./profile-posts.component.html */ "./src/app/profile/profile-posts/profile-posts.component.html"),
        styles: [__webpack_require__(/*! ./profile-posts.component.css */ "./src/app/profile/profile-posts/profile-posts.component.css")]
    }),
    __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
], ProfilePostsComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wall-paper {\r\n    height: 450px;\r\n    background-image: url('http://wallpapere.org/wp-content/uploads/2012/02/black-and-white-city-night.png');\r\n    background-size: cover;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#profile-div{\r\n    position: absolute;\r\n    width: 90%;\r\n    height: auto;\r\n    left: 5%;\r\n    top: 50%;\r\n    background: white;\r\n    border-radius: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#profile-img-div #profile-img {\r\n    width: 150px;\r\n    height: 150px;\r\n    margin-top: -80px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    border-radius: 80px;\r\n}\r\n\r\n#profile-div #user-name{\r\n    text-align: center;\r\n    font-size: xx-large;\r\n    font-family: cursive;\r\n    font-weight: bolder;\r\n}\r\n\r\n#profile-div #user-bio{\r\n    text-align: center;\r\n    font-size: medium;\r\n    font-family: sans-serif;\r\n    font-weight: 700;\r\n}\r\n\r\n#profile-div #profile-sub-div{\r\n    width: 90%;\r\n    height: 450px;\r\n    border: 1px grey solid;\r\n    border-radius: 10px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 15px;\r\n    padding-left: 100px;\r\n    padding-top: 50px;\r\n    overflow: scroll;\r\n}\r\n\r\n.profile-blocks{\r\n    width: 100px;\r\n    height: 150px;\r\n    padding: 40px 0px;\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: 15px;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    outline: none;\r\n}\r\n\r\n.selected-block{\r\n    background: #00caaf;\r\n    color: white;\r\n    box-shadow: -2px 5px 10px 2px #d6d6d6;\r\n}\r\n\r\n#profile-posts{\r\n    margin-left: 30%;\r\n}\r\n\r\n.profile-blocks-img{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#profile-posts:hover, #profile-about:hover, #profile-friends:hover, #profile-photos:hover{\r\n    cursor: pointer;\r\n    background: #d27805;\r\n    color: white;\r\n    box-shadow: -5px 3px 10px 2px #777777;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contianer\">\n    <div id=\"wall-paper\"></div>\n    <div id=\"profile-div\">\n        <div id=\"profile-img-div\">\n            <img id=\"profile-img\" [src]=\"getProfileImagePath()\">\n            <input type=\"file\" id=\"post-img\" name=\"file\" (change)=\"getFiles($event)\">\n            <button (click)=\"uploadProfilePic()\">Upload</button>\n        </div>\n        <p id=\"user-name\">{{ loggedUser.lastName }}  {{ loggedUser.firstName }}</p>\n        <p id=\"user-bio\">Any Bio</p>\n        <div class=\"profile-blocks\" [ngClass]=\"{'selected-block' : selectedBlockName === 'posts'}\" id=\"profile-posts\" [routerLink]=\"['posts']\" (click)=\"selectedBlock('posts')\">\n            <img class=\"profile-blocks-img\" src=\"assets/images/logo2.jpg\">\n            <p class=\"profile-block-name\">Posts</p>\n        </div>\n        <div class=\"profile-blocks\" [ngClass]=\"{'selected-block' : selectedBlockName === 'about'}\" id=\"profile-about\" [routerLink]=\"['about']\" (click)=\"selectedBlock('about')\">\n            <img class=\"profile-blocks-img\" src=\"assets/images/logo2.jpg\">\n            <p class=\"profile-block-name\">About</p>\n        </div>\n        <div class=\"profile-blocks\" [ngClass]=\"{'selected-block' : selectedBlockName === 'friends'}\" id=\"profile-friends\" [routerLink]=\"['friends']\" (click)=\"selectedBlock('friends')\">\n            <img class=\"profile-blocks-img\" src=\"assets/images/logo2.jpg\">\n            <p class=\"profile-block-name\">Friends</p>\n        </div>\n        <div class=\"profile-blocks\" [ngClass]=\"{'selected-block' : selectedBlockName === 'photos'}\" id=\"profile-photos\" [routerLink]=\"['photos']\" (click)=\"selectedBlock('photos')\">\n            <img class=\"profile-blocks-img\" src=\"assets/images/logo2.jpg\">\n            <p class=\"profile-block-name\">Photos</p>\n        </div>\n\n        <div id=\"profile-sub-div\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ProfileComponent = class ProfileComponent {
    constructor(profileService, router) {
        this.profileService = profileService;
        this.router = router;
        this.selectedBlockName = '';
        this.userProfilePath = '';
        this.fileName = ''; // Stores file name
        this.hasImage = false; // Check if any file uploaded
    }
    ngOnInit() {
        this.loggedUser = this.profileService.getAllUserDetails();
        this.userProfilePath = this.loggedUser.userProfilePath;
        document.getElementById('profile-sub-div').style.display = 'none';
    }
    /**
     *
     * Apply .selected-block CSS for the selected block
     *
     */
    selectedBlock(block) {
        document.getElementById('profile-sub-div').style.display = 'block';
        this.selectedBlockName = block;
        console.log(this.selectedBlockName);
    }
    /**
     *
     * Returns profile picture path of logged in user
     *
     */
    getProfileImagePath() {
        return this.userProfilePath;
    }
    /**
     * Reads file uploaded
     */
    getFiles(event) {
        console.log(event);
        this.files = event.target.files;
        const reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        if (this.files[0] != null) {
            reader.readAsBinaryString(this.files[0]); // Taking only one file for now
            this.fileName = this.files[0].name;
            this.hasImage = true;
        }
        else {
            console.log('No file selected');
            this.hasImage = false;
        }
        console.log(this.files[0].name);
    }
    /**
     * Converting file from binary to string
     * @param readerEvt
     */
    _handleReaderLoaded(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.filestring = btoa(binaryString); // Converting binary string data.
        console.log(this.filestring.substring(0, 100));
    }
    /**
     *
     * Upload the profile pic to the server
     *
     */
    uploadProfilePic() {
        if (this.hasImage) {
            this.profileService.saveProfilePic(this.filestring, this.fileName).subscribe((profilePicformat) => {
                this.userProfilePath = '/forum-bucket/profile/' + this.loggedUser.username + '.' + profilePicformat;
                console.log('new profile pic changed ' + this.userProfilePath);
                this.router.navigate(['/', 'profile']);
            }, error => {
                console.log(error);
                this.profileService.sayLogout();
            });
        }
        else {
            console.log('select an image first');
        }
    }
};
ProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _user_details_user_image_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../user-details/user-image.model */ "./src/app/user-details/user-image.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authenticate/authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ProfileService = class ProfileService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.usersProfilePicApi = 'v1/secured/profilepic'; // Users API URL
        this.postsApi = 'v1/secured/posts/'; // Posts API URL
        this.userPosts = []; // Stores all posts by user
        this.isUserPostsLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](); // To fire when posts are loaded
        this.loggedInUser = null;
    }
    /**
     *
     * API call to get all users posts
     *
     */
    getAllUserPosts() {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authService.token });
        this.http.get(this.postsApi + 'allusers', { headers: httpHeaders }).subscribe((posts) => {
            this.userPosts = posts;
            this.isUserPostsLoaded.next(true);
        }, error => {
            console.log(error);
            this.userPosts = [];
            this.isUserPostsLoaded.next(false);
            this.authService.logout();
        });
    }
    /**
     *
     * Gets user model from authServices
     *
     */
    getAllUserDetails() {
        this.loggedInUser = this.authService.getLoggeduser();
        return this.loggedInUser;
    }
    /**
     *
     * Post the file to server
     *
     * @param filestring
     * @param fileName
     */
    saveProfilePic(filestring, fileName) {
        const fileNameAndFormat = fileName.split('.');
        const fileFormat = fileNameAndFormat[1];
        // console.log(fileNameAndFormat[1]);
        const userImage = new _user_details_user_image_model__WEBPACK_IMPORTED_MODULE_0__["UserImage"](null, this.loggedInUser.id, filestring, null, new Date().getTime(), null, null, null, fileNameAndFormat[1]);
        // console.log(userImage.imageFormat);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': this.authService.token });
        return this.http.post(this.usersProfilePicApi, userImage, { headers: httpHeaders, responseType: 'text' });
    }
    /**
     *
     * Says logout to user :)
     *
     */
    sayLogout() {
        this.authService.logout();
    }
};
ProfileService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"]])
], ProfileService);



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\r\n  margin-top: 40px;\r\n  color: #cccccc;\r\n}\r\n\r\n.search-main-div {\r\n  /* border: 1px solid; */\r\n  padding: 20px 30px;\r\n}\r\n\r\n.search-sub-div {\r\n  /* border: 1px solid; */\r\n  padding: 12px 60px;\r\n}\r\n\r\n.search-heading {\r\n  font-size: 35px;\r\n  font-weight: bolder;\r\n}\r\n\r\n.search-items-group {\r\n  list-style: none;\r\n  border: 1px solid;\r\n  padding: 15px 20px;\r\n  border-radius: 20px;\r\n  background: #252e50;\r\n}\r\n\r\n.search-item {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.user-div {\r\n  border: 1px solid;\r\n  padding: 12px 50px;\r\n  border-radius: 15px;\r\n  background: #1a2036;\r\n  border: black;\r\n  box-shadow: 5px 5px 10px #121213;\r\n}\r\n\r\n.user-profile-img {\r\n  border-radius: 30px;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.user-fl {\r\n  font-size: 25px;\r\n  display: inline;\r\n  margin-left: 10px;\r\n}\r\n\r\n.post-div {\r\n  border: 1px solid;\r\n  padding: 5px 40px;\r\n  border-radius: 10px;\r\n  background: #1a2036;\r\n  border: black;\r\n  box-shadow: 5px 5px 10px #121213;\r\n}\r\n\r\n.post-by-user {\r\n  font-size: 25px;\r\n  display: inline;\r\n  margin-left: 10px;\r\n}\r\n\r\n.post-msg {\r\n  margin-left: 70px;\r\n}\r\n\r\n.topic-div {\r\n  border: 1px solid;\r\n  padding: 5px 40px;\r\n  border-radius: 10px;\r\n  background: #1a2036;\r\n  border: black;\r\n  box-shadow: 5px 5px 10px #121213;\r\n}\r\n\r\n.topic-heading{\r\n  font-size: 25px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.topic-by-user {\r\n  margin-left: 25px;\r\n}\r\n\r\n.user-div:active,\r\n.user-div:focus,\r\n.user-div:hover,\r\n.post-div:active,\r\n.post-div:focus,\r\n.post-div:hover,\r\n.topic-div:active,\r\n.topic-div:focus,\r\n.topic-div:hover{\r\n  outline: none;\r\n}\r\n\r\n.user-div:hover, .post-div:hover, .topic-div:hover{\r\n  cursor: pointer;\r\n  color: white;\r\n  background: #12171b;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1 search-main-div\">\n      <div class=\"search-sub-div\" *ngIf=\"isUsersNotNull\">\n        <p class=\"search-heading\">Users</p>\n        <ul class=\"search-items-group\">\n          <li class=\"search-item\" *ngFor=\"let user of search.users\">\n            <div class=\"user-div\">\n              <img src=\"assets/images/logo2.jpg\" class=\"user-profile-img\">\n              <p class=\"user-fl\">{{ user.lastName }} {{ user.firstName }}</p>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div class=\"search-sub-div\" *ngIf=\"isPostsNotNull\">\n        <p class=\"search-heading\">Posts</p>\n        <ul class=\"search-items-group\">\n          <li class=\"search-item\"*ngFor=\"let post of search.posts\">\n            <div class=\"post-div\" [routerLink]=\"['/', 'posts', post.postId]\">\n              <img src=\"assets/images/logo2.jpg\" class=\"user-profile-img\">\n              <p class=\"post-by-user\"> {{ post.postedByUserId }} </p>\n              <p class=\"post-msg\"> {{ post.postDetails }}</p>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div class=\"search-sub-div\" *ngIf=\"isTopicsNotNull\">\n        <p class=\"search-heading\">Topics</p>\n        <ul class=\"search-items-group\">\n          <li class=\"search-item\" *ngFor=\"let topic of search.topics\">\n            <div class=\"topic-div\" [routerLink]=\"['/', 'discussions', 'topic', topic.topicId]\">\n                <!-- <p class=\"post-by-user\"> {{ topic.topicByUserId }} </p> -->\n                <p class=\"topic-heading\"> {{ topic.topicHeading }} </p>\n                <p class=\"topic-by-user\"> By {{ topic.topicByUserId }} </p>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.service */ "./src/app/search/search.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SearchComponent = class SearchComponent {
    constructor(searchService, route) {
        this.searchService = searchService;
        this.route = route;
        this.searchString = '';
        this.isSearchNotNull = false;
        this.isUsersNotNull = false;
        this.isPostsNotNull = false;
        this.isTopicsNotNull = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.searchString = params['searchString'];
            this.searchService.getAllMatchedModels(this.searchString);
            this.searchService.searchLoaded.subscribe((localSearch) => {
                this.search = localSearch;
                if (this.search != null) {
                    this.isSearchNotNull = true;
                }
                else {
                    this.isSearchNotNull = false;
                }
                this.checkNulls();
            }, error => {
                console.log('Search Results fetched successfully...But something wrong happened');
            });
        });
    }
    checkNulls() {
        if (this.search.users != null && this.search.users.length > 0) {
            this.isUsersNotNull = true;
        }
        else {
            this.isUsersNotNull = false;
        }
        if (this.search.posts != null && this.search.posts.length > 0) {
            this.isPostsNotNull = true;
        }
        else {
            this.isPostsNotNull = false;
        }
        if (this.search.topics != null && this.search.topics.length > 0) {
            this.isTopicsNotNull = true;
        }
        else {
            this.isTopicsNotNull = false;
        }
    }
};
SearchComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/search/search.service.ts":
/*!******************************************!*\
  !*** ./src/app/search/search.service.ts ***!
  \******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authenticate/authenticate.service */ "./src/app/authenticate/authenticate.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let SearchService = class SearchService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.searchAPI = 'v1/secured/search/';
        this.searchLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    getAllMatchedModels(searchString) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': this.authService.token });
        this.http.get(this.searchAPI + 'all/' + searchString, { headers: httpHeaders }).subscribe((response) => {
            console.log(response);
            this.search = response;
            this.searchLoaded.next(this.search);
        }, error => {
            console.log('API Call failed', error);
            this.authService.logout();
        });
    }
};
SearchService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"]])
], SearchService);



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
        styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);



/***/ }),

/***/ "./src/app/side-header/side-header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/side-header/side-header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-header{\n    height: 100%;\n    background-color: #1e2642;\n    border: none;\n}\n\n.side-header-logo{\n    width: 100px;\n    height: 100px;\n    margin-left: 50px;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    cursor: pointer;\n    border-radius: 50px;\n}\n\n.list-group {\n    padding-left: 15px;\n}\n\nul li{\n    background: transparent;\n    border: none;\n    color: #adadad;\n    cursor: pointer;\n    margin-bottom: 25px;\n    outline: none;\n    margin-right: 16px;\n    border-radius: 3px;\n}\n\n.li-icon{\n  width: 14px;\n}\n\n.list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n\n@media only screen and (max-width: 1050px) {\n    .side-header {\n        display: none;\n    }\n}\n"

/***/ }),

/***/ "./src/app/side-header/side-header.component.html":
/*!********************************************************!*\
  !*** ./src/app/side-header/side-header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-header\">\n  <img class=\"img-responsive side-header-logo\" src=\"assets/images/logo2.jpg\">\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\" [routerLink] = \"['posts']\" routerLinkActive=\"active\" >\n      <span class=\"glyphicon glyphicon-home\"></span>&nbsp;&nbsp;Dashboards\n    </li>\n    <li class=\"list-group-item\" [routerLink] = \"['discussions', 'topics', 'general']\" routerLinkActive=\"active\">\n      <img class=\"li-icon\" src=\"https://png.icons8.com/ios/50/B9B9B9/active-directory-filled.png\">&nbsp;&nbsp;Discussions\n    </li>\n    <li class=\"list-group-item\" [routerLink] = \"['profile']\" routerLinkActive=\"active\">\n      <span class=\"glyphicon glyphicon-user\"></span>&nbsp;&nbsp;Profile\n    </li>\n    <li class=\"list-group-item\">\n      <img class=\"li-icon\" src=\"https://png.icons8.com/ios/50/B9B9B9/groups-filled.png\">&nbsp;&nbsp;Groups\n    </li>\n    <li class=\"list-group-item\">\n      <span class=\"glyphicon glyphicon-folder-close\"></span>&nbsp;&nbsp;Projects\n    </li>\n    <li class=\"list-group-item\">\n      <span class=\"glyphicon glyphicon-cog\"></span>&nbsp;&nbsp;Settings\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/side-header/side-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/side-header/side-header.component.ts ***!
  \******************************************************/
/*! exports provided: SideHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideHeaderComponent", function() { return SideHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SideHeaderComponent = class SideHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
SideHeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-side-header',
        template: __webpack_require__(/*! ./side-header.component.html */ "./src/app/side-header/side-header.component.html"),
        styles: [__webpack_require__(/*! ./side-header.component.css */ "./src/app/side-header/side-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SideHeaderComponent);



/***/ }),

/***/ "./src/app/user-details/user-image.model.ts":
/*!**************************************************!*\
  !*** ./src/app/user-details/user-image.model.ts ***!
  \**************************************************/
/*! exports provided: UserImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserImage", function() { return UserImage; });
class UserImage {
    constructor(userImageId, userId, currentImageStringData, previousImageStringData, lastupdatedDate, lastUploadedDate, imageLocation, imageBackupLocation, imageFormat) {
        this.userImageId = userImageId;
        this.userId = userId;
        this.currentImageStringData = currentImageStringData;
        this.previousImageStringData = previousImageStringData;
        this.lastupdatedDate = lastupdatedDate;
        this.lastUploadedDate = lastUploadedDate;
        this.imageLocation = imageLocation;
        this.imageBackupLocation = imageBackupLocation;
        this.imageFormat = imageFormat;
    }
}


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Programs\Angular\Forum-App\Forum-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map