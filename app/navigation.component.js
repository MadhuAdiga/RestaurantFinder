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
var navigationComponent = (function () {
    function navigationComponent() {
        this.user = {
            fullName: 'Madhushri Adiga',
            firstName: 'Madhushri'
        };
    }
    navigationComponent = __decorate([
        core_1.Component({
            selector: 'madhu',
            template: " <nav class=\"navbar navbar-inverse navbar-fixed-top\">  <!-- Bootstrap inverse navigation bar -->\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\"><a class=\"navbar-brand navbar-link\" href=\"index.html\"><strong>Restaurant Finder</strong></a>\n                <button class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button> \n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"navcol-1\"> <!-- Navigation bar to navigate between 3 html pages through the navigation bar -->\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li> <h6 style=\"color:white; padding-top:15px; margin-right:15px\">Find the best restaurants in Bangalore!</h6> </li>\n                </ul>\n            </div>\n        </div>\n    </nav>  \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], navigationComponent);
    return navigationComponent;
}());
exports.navigationComponent = navigationComponent;
;
//# sourceMappingURL=navigation.component.js.map