// Type Aliases com Intersection
type AccountInfo = {
  id: number
  name: string
  email?: string
}

const account: AccountInfo = {
  id: 234,
  name: 'John Doe'
}

type CharInfo = {
  nickname: string
  level: number
}

const char: CharInfo = {
  nickname: 'John Doe',
  level: 100
}

type PlayerInfo = AccountInfo & CharInfo

const player:  PlayerInfo = {
  id: 213,
  name: 'John Doe',
  nickname: 'johndoe',
  level: 100
}

