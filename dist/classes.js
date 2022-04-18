"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
}
const user = new UserAccount('John Doe', 33333333);
console.log(user);
console.log(user.age);
console.log(user.name);
user.logDetails();
const user2 = new CharAccount('Jane', 66666, 'janedoe', 80);
user2.logDetails();
