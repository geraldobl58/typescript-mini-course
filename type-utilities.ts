type Todo = {
  title: string
  description: string
  completed: boolean
}

const todo: Readonly<Todo> = {
  title: 'Typescript',
  description: 'Aprender Typescript',
  completed: false
}

// todo.completed = true

function updateTodo(todo: Todo, fieldToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })

console.log(todo2)

type TodoPreview = Pick<Todo, "title" | "description">

const todo3: TodoPreview = {
  title: 'Show',
  description: 'Types'
}

type TodoPreview2 = Omit<Todo, 'description'>

const todo4: TodoPreview2 = {
  title: 'Omit',
  completed: true
} 

console.log(todo4)