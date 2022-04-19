// function setAPIVersion(apiVersion: string) {
//   return (constructor: any) => {
//     return class extends constructor {
//       version = apiVersion
//     }
//   }
// }

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

function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value

    descriptor.value = function (...args) {
      console.log(`Loading ${ms}...`)
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms) 

      return descriptor
    }
  } 
}

class Gretter {
  greeting: string

  constructor(g: string) {
    this.greeting = g
  }

  @delay(1000)
  greet() {
    console.log(`Hello ${this.greeting}`)
  }
}

const person = new Gretter('John Doe')
person.greet()