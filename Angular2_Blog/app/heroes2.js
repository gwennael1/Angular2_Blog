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
var core_1 = require("angular2/core");
var hero_detail_component_1 = require("./hero-detail.component");
var Personne = (function () {
    function Personne() {
    }
    return Personne;
}());
exports.Personne = Personne;
var HeroesTemplate2 = (function () {
    function HeroesTemplate2() {
        this.heroes = HEROES;
        this.personne = {
            Id: 1,
            name: 'Gwennaël'
        };
    }
    HeroesTemplate2.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    HeroesTemplate2 = __decorate([
        core_1.Component({
            selector: 'heroes',
            template: "<h2>{{personne.name}} details!</h2> <div><label>id: </label>{{personne.Id}}</div> <div> <label>name: </label> <input [(ngModel)]=\"personne.name\" placeholder=\"name\"> </div>\n              <h2>My Heroes</h2>\n              <ul class=\"heroes\">\n                <li *ngFor=\"#hero of heroes\" [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n                    <span class=\"badge\">{{hero.Id}}</span> {{hero.name}}\n                </li>\n              </ul>\n              <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>",
            styles: ["\n  .selected {\n    background-color: #00aa9a !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
            directives: [hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroesTemplate2);
    return HeroesTemplate2;
}());
exports.HeroesTemplate2 = HeroesTemplate2;
;
var HEROES = [
    { "Id": 11, "name": "Mr. Nice" },
    { "Id": 12, "name": "Narco" },
    { "Id": 13, "name": "Bombasto" },
    { "Id": 14, "name": "Celeritas" },
    { "Id": 15, "name": "Magneta" },
    { "Id": 16, "name": "Rubberman" },
    { "Id": 17, "name": "Dynama" },
    { "Id": 18, "name": "Dr IQ" },
    { "Id": 19, "name": "Magma" },
    { "Id": 20, "name": "Tornado" }
];
//# sourceMappingURL=heroes2.js.map