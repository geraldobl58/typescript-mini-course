"use strict";
// function setAPIVersion(apiVersion: string) {
//   return (constructor: any) => {
//     return class extends constructor {
//       version = apiVersion
//     }
//   }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @setAPIVersion("1.0.0")
// class API {}
// console.log(new API())
// function minLength(length: number) {
//   return (target: any, key: string) => {
//     let val = target[key]
//     const getter = () => val
//     const setter = (value: string) => {
//       if (value.length < length) {
//         console.log(`WHOPPS: Error ${key} menor que ${length}`)
//       } else {
//         val = value
//       }
//     }
//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter
//     })
//   }
// }
// class Movie {
//   @minLength(5)
//   title: string
//   constructor(t: string) {
//     this.title = t
//   }
// }
// const movie = new Movie('Typescript')
// console.log(movie)
// console.log(movie.title)
function delay(ms) {
    return (target, key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Loading ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
            return descriptor;
        };
    };
}
class Gretter {
    constructor(g) {
        this.greeting = g;
    }
    greet() {
        console.log(`Hello ${this.greeting}`);
    }
}
__decorate([
    delay(1000)
], Gretter.prototype, "greet", null);
const person = new Gretter('John Doe');
person.greet();
