"use strict"

function getRandomGhost(min, max){
    return Math.floor(Math.random () * (max - min) + min);
}
console.log(getRandomGhost(0,3))