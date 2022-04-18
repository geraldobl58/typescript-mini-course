"use strict";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title ${item}`);
}
function logInfo(uid, user) {
    console.log(`An user with ${uid} has a name as ${user}`);
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('Windows');
renderPlatform('ios');
logDetails(213, 'Shirt');
logDetails('123', 'Shirt');
logInfo('456', 'John Doe');
