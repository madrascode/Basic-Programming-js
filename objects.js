var superman = {
    name : "Super-Duper Man",
    power: "dhai kilo ka hath",
    weapon: "thapad",
    intelligence: 189
}

var batman = {
    name: "Cat-Bat Man",
    power: "ulta hanging karna",
    weapon: "radio waves",
    intelligence: 1/0
}

console.log("SuperMan Intelligence",superman.intelligence)
console.log("Batman Intelligence",batman.intelligence)
console.log(superman.intelligence < batman.intelligence)


let animeheros = [superman, batman]

for(let i=0; i<animeheros.length; i++){
    console.log(animeheros[i].name)
    console.log(animeheros[i].power)
    console.log('--------------------')
}