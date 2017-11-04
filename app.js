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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function param(target, key, index) {
    // console.dir(Reflect.getMetadata('design:type', target));
    // console.dir(Reflect.getMetadata('design:paramtypes', target));
    // console.dir(Reflect.getMetadata('design:returntype', target, 'constructor'));
}
function cons(target) {
    // console.dir(Reflect.getMetadata('design:type', target));
    // console.dir(Reflect.getMetadata('design:paramtypes', target));
    //let arr = Reflect.getMetadata('design:paramtypes', target);
    //arr.forEach(t => {
    //	//console.dir(t);
    //});
    // console.dir(Reflect.getMetadata('design:returntype', target));
}
function prop(target, key) {
    //    console.dir(Reflect.getMetadata('design:type', target));
    // console.dir(Reflect.getMetadata('design:paramtypes', target));
    console.dir(Reflect.getMetadata('design:type', target, key).name);
}
//@cons
//class C {
//	constructor(@param private fish: string) {
//	}
//
//	@prop
//	age: string;
//}
let C = class C {
    constructor(fish) {
        this.fish = fish;
    }
};
C = __decorate([
    cons,
    __metadata("design:paramtypes", [String])
], C);
let arr = Reflect.getMetadata('design:paramtypes', C);
arr.forEach(t => {
    console.dir(t);
});
