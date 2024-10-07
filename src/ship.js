class Ship{
    constructor(length, horizontal){
        this.length = length
        this.horizontal = horizontal
        this.hitsTaken = 0
        this.sunk = false
    }

    hit(){
        this.hitsTaken++;
        // console.log(`This ship has been hit ${this.hitsTaken} times!`)
    }

    isSunk(){
        return this.hitsTaken >= this.length
    }
}

module.exports = { Ship }

