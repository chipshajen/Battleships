const { Ship } = require('../src/ship.js')


it('expects a length', () => {
    const myShip = new Ship(5, false)

    expect(myShip.length !== undefined).toBe(true)
})

it('expects a direction', () => {

    const myShip = new Ship(1, true)

    console.log(myShip)
    expect(myShip.horizontal !== undefined).toBe(true)
})

it('expects function hit() to increase numbers of hits taken', () => {
    const myShip = new Ship(5, true)

    myShip.hit()

    expect(myShip.hitsTaken).toBe(1)

    myShip.hit()

    expect(myShip.hitsTaken).toBe(2)
})

it('expects function isSunk() to show if ships sink', () => {
    const myShip = new Ship(5, true)

    myShip.hit()
    myShip.hit()
    myShip.hit()
    myShip.hit()

    expect(myShip.isSunk()).toBe(false)

    myShip.hit()

    expect(myShip.isSunk()).toBe(true)

})

