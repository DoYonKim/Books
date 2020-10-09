"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
var makeRandomNuimber_1 = require("../utils/makeRandomNuimber");
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (age === void 0) { age = makeRandomNuimber_1.makeRandomNumber(); }
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports.default = Person;
exports.makePerson = function (name, age) {
    if (age === void 0) { age = makeRandomNuimber_1.makeRandomNumber(); }
    return ({ name: name, age: age });
};
//# sourceMappingURL=Person.js.map