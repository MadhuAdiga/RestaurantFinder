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
var router_1 = require('@angular/router');
var location_services_1 = require('./location.services'); // Import LocationService 
var restaurant_services_1 = require('./restaurant.services'); // Import LocationService
var inputComponent = (function () {
    function inputComponent(_locationService, _restoService, router) {
        this._locationService = _locationService;
        this._restoService = _restoService;
        this.router = router;
        this.hideResto = true;
        this.cusineInputValidated = false;
    } // Declares a private variable and assign it to the type RestaurantService
    inputComponent.prototype.clearAll = function (filterBy) {
        if (filterBy) {
            this.filterBy = null; //Clear the varaiable setting
            this.cusineInputValidated = false; //Set the cusineInputValidated variable to false
            this.hideResto = true; //Hide the detailed display of the restaurant
            this.selectedRestoId = null; //Set none to the selected restaurant
        }
        else {
            this.selectedLoc = 'Select your locality'; //Set the selected locality to default  
            this.hideResto = true; //Hide the detailed display of the restaurant
            this.selectedRestoId = null; //Set none to the selected restaurant
        }
    };
    inputComponent.prototype.updateloc = function (loc) {
        this.selectedLoc = loc; //Update the selected loc to the input parameter
        return this.selectedLoc; //return
    };
    inputComponent.prototype.updateresto = function (resto) {
        this.selectedRestoId = resto; //update selectedRestoId with the current selection
        this.hideResto = false; //display the restaurant detail
    };
    inputComponent.prototype.ngOnInit = function () {
        this.locData = this._locationService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the locData to the data fetched by the function getData in the RestaurantService
        this.restoData = this._restoService.getData(); // Apply the ngOnInit lifecycle on the variable which assigns the restoData to the data fetched by the function getData in the RestaurantService
    };
    inputComponent.prototype.onChange = function (filterBy) {
        for (var _i = 0, _a = this.restoData; _i < _a.length; _i++) {
            var x = _a[_i];
            for (var _b = 0, _c = x.cuisine; _b < _c.length; _b++) {
                var y = _c[_b];
                if (filterBy.toUpperCase() == y.toUpperCase()) {
                    this.cusineInputValidated = true; //set cusineInputValidated to true so that the restaurant detail is displayed
                }
                else if (filterBy == null) {
                    this.cusineInputValidated = false; //set cusineInputValidated to false so that the restaurant detail is not displayed
                }
            }
        }
    };
    inputComponent = __decorate([
        core_1.Component({
            selector: 'my-input',
            templateUrl: 'app/input.component.html'
        }), 
        __metadata('design:paramtypes', [location_services_1.LocationService, restaurant_services_1.RestaurantService, router_1.Router])
    ], inputComponent);
    return inputComponent;
}());
exports.inputComponent = inputComponent;
//# sourceMappingURL=input.component.js.map