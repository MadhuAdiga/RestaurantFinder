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
var location_services_1 = require('./location.services'); // Import LocationService 
var restaurant_services_1 = require('./restaurant.services'); // Import LocationService
var input_component_1 = require('./input.component'); // Import inputComponent
var RestaurantDetail = (function () {
    function RestaurantDetail(_locationService, _restoService) {
        this._locationService = _locationService;
        this._restoService = _restoService;
    } // Declares a private variable and assign it to the type LocationService and another to RestaurantService
    RestaurantDetail.prototype.ngOnInit = function () {
        this.locData = this._locationService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the locData to the data fetched by the function getData in the LocationService
        this.restoData = this._restoService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the restoData to the data fetched by the function getData in the RestaurantService
    };
    RestaurantDetail.prototype.getStyle = function (star) {
        if (star < 4) {
            return 'gold';
        }
        else
            return 'palegreen'; //if the ratings are greater than 4 return palegreen colour as the background
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RestaurantDetail.prototype, "child_selectedRestoId", void 0);
    __decorate([
        //A variable of the restaurant component that recives and holds the selectedRestoId data from the input component
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RestaurantDetail.prototype, "child_cusineInputValidated", void 0);
    __decorate([
        //A variable of the restaurant component that recives and holds the cusineInputValidated data from the input component
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RestaurantDetail.prototype, "child_hideResto", void 0);
    RestaurantDetail = __decorate([
        // Import inputComponent
        core_1.Component({
            selector: "resto-detail",
            templateUrl: 'app/restaurant.component.html',
            providers: [input_component_1.inputComponent]
        }), 
        __metadata('design:paramtypes', [location_services_1.LocationService, restaurant_services_1.RestaurantService])
    ], RestaurantDetail);
    return RestaurantDetail;
}());
exports.RestaurantDetail = RestaurantDetail;
//# sourceMappingURL=restaurant.component.js.map