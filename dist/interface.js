"use strict";
const tlou = {
    title: 'The Last of Us',
    description: 'The best game in the world!',
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
};
console.log(tlou.genre);
// tlou.genre = 'New'
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
const leftBehind = {
    title: 'The Last of Us - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    platform: ['PS3'],
    originalGame: tlou,
    newContent: ['3 hours story', 'New caracteres']
};
class CreateGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
