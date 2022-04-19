"use strict";
const todo = {
    title: 'Typescript',
    description: 'Aprender Typescript',
    completed: false
};
// todo.completed = true
function updateTodo(todo, fieldToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldToUpdate);
}
const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
const todo3 = {
    title: 'Show',
    description: 'Types'
};
const todo4 = {
    title: 'Omit',
    completed: true
};
console.log(todo4);
