const s = "H "

const main = text => text.trim().split(' ')[text.trim().split(' ').length - 1].length

console.log(main(s))
