"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var app_component_1 = require('./app.component');
var navigation_component_1 = require('./navigation.component');
var input_component_1 = require('./input.component');
var restaurant_component_1 = require('./restaurant.component');
var location_services_1 = require('./location.services');
var restaurant_services_1 = require('./restaurant.services');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule, router_1.RouterModule.forRoot([{ path: 'restaurant', component: restaurant_component_1.RestaurantDetail }])],
            //Defines router paths for the application
            //Can be alternatively done by creating a custom RouterModule and define all paths as a constant, import custom RouterModule in AppModule
            declarations: [app_component_1.AppComponent, navigation_component_1.navigationComponent, input_component_1.inputComponent, restaurant_component_1.RestaurantDetail],
            bootstrap: [app_component_1.AppComponent, navigation_component_1.navigationComponent, input_component_1.inputComponent],
            providers: [location_services_1.LocationService, restaurant_services_1.RestaurantService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map