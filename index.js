// Code your solution in this file!
const hq = 42
const feet = 264

function distanceFromHqInBlocks(pickup) {
    if (pickup >= 43)  
    {return (pickup - hq)}
    if (pickup <= 42)
    {return (hq - pickup)}
}

function distanceFromHqInFeet(pickup) {
    return (distanceFromHqInBlocks(pickup) * feet)
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return ((start - destination) * feet)
    }
    if (start < destination) {
        return ((destination - start) * feet)
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) { 
        return (0)
    }
    if (distanceTravelledInFeet(start, destination) < 2000) {
        return ((distanceTravelledInFeet(start, destination)) - 400) * .02
    }
    if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return (25)
    }
    if (distanceTravelledInFeet(start, destination) > 2500) {
        return ('cannot travel that far')
    }
}
