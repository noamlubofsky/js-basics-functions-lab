// Code your solution in this file!
const hq = 42
const feet = 264

function distanceFromHqInBlocks(pickup) {
    if (pickup >= 43)  
    {return (pickup - hq)}
    if (pickup <= 42)
    {return (hq - pickup)}
}

function distanceFromHqInFeet(blocks) {
    distanceFromHqInBlocks(blocks)
}