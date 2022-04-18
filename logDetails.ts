// Aliases e Union
type Uid = number | string

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title ${item}`)
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}`)
}

type Platform = 'Windows' | 'Linux' | 'Mac OS' | 'ios'

function renderPlatform(platform: Platform) {
  return platform
}

renderPlatform('Windows')
renderPlatform('ios')

logDetails(213, 'Shirt')
logDetails('123', 'Shirt')
logInfo('456', 'John Doe')

