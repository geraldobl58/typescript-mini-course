// boolean (true/false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 20

// array (type[])
let items: string[]
items = ['foo', 'bar']

let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string, string]
title = [1, 'foo', 'bar']

// enum
enum Colors {
  white = '#fff',
  black = '#000'
}

// any
let coisa: any
coisa = [1]

// void
function logger(): void {
  console.log('foo')
}

// null | undefined
type Bla  = string | undefined

//never

function error(): never {
  throw new Error("Error")
}

// object
let cart: object

cart = {
  key: 'foo'
}

// Type Inference 
let message2 = "mensagem definida"
message2 = "string nova"

window.addEventListener('click', (e) => {
  e.target
})

