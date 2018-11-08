var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function greeting(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        return "Hello,\u00A0" + originalMethod.apply(this, arguments);
    };
    return descriptor;
}
;
/* ------ */
var Bacon = /** @class */ (function () {
    function Bacon(name) {
        this.name = name;
    }
    Bacon.prototype.WHAZUP = function () {
        return "My name is\u00A0" + this.name + ", and I \u2665 BACOOOOOOOOOOOOOOOOON!";
    };
    __decorate([
        greeting
    ], Bacon.prototype, "WHAZUP");
    return Bacon;
}());
var yo = new Bacon('Tosta');
console.log(yo.WHAZUP());
