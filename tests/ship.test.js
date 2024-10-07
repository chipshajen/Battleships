const { Ship } = require('../src/ship.js')
const { Gameboard } = require('../src/gameboard.js')


it('expects a length', () => {
    const myShip = new Ship(5, false)

    expect(myShip.length !== undefined).toBe(true)
})

it('expects a direction', () => {

    const myShip = new Ship(1, true)

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


it('expects a board X rows high and wide', () => {
    const myBoard = new Gameboard(5)

    expect(myBoard.board.length).toBe(5)
    expect(myBoard.board[0].length).toBe(5)
})

it('expects to a properly horizontal ship', () => {
    const myBoard = new Gameboard(8)
    const myShip = new Ship(2, true)
    const coordinates = {
        x:1,
        y:1
    }

    myBoard.placeShip(coordinates, myShip)

    expect(myBoard.board[1][1]).toBe(myShip)
    expect(myBoard.board[1][2]).toBe(myShip)
})

it('expects to a properly placed vertical ship', () => {
    const myBoard = new Gameboard(5)
    const myShip = new Ship(3, false)
    const coordinates = {
        x:2,
        y:2
    }

    myBoard.placeShip(coordinates, myShip)

    expect(myBoard.board[2][2]).toBe(myShip)
    expect(myBoard.board[3][2]).toBe(myShip)
    expect(myBoard.board[4][2]).toBe(myShip)
})

it('expects a ship placed out of bounds', () => {
    const myBoard = new Gameboard(5)
    const myShip = new Ship(4, true)

    const coordinates = {
        x:50,
        y:-50
    }

    const response = myBoard.placeShip(coordinates, myShip)

    expect(response).toBe('Out of bounds')
})

it('tests placing a ship on another ', () => {
    const myBoard = new Gameboard(5)
    const myShip1 = new Ship(3, false)
    const coordinates1 = {
        x:2,
        y:2
    }
    const myShip2 = new Ship(2, false)
    const coordinates2 = {
        x:2,
        y:2
    }

    myBoard.placeShip(coordinates1, myShip1)
    const response = myBoard.placeShip(coordinates2, myShip2)

    expect(response).toBe('Ship already in this spot')
})

it('expects to a hit a ship', () => {
    const myBoard = new Gameboard(8)
    const myShip = new Ship(2, true)
    const coordinates = {
        x:1,
        y:1
    }

    myBoard.placeShip(coordinates, myShip)

    myBoard.receiveAttack(coordinates)

    expect(myShip.hitsTaken).toBe(1)
})

it('expects to miss a ship', () => {
    const myBoard = new Gameboard(8)
    const myShip = new Ship(2, true)
    const coordinates = {
        x:1,
        y:1
    }

    myBoard.placeShip(coordinates, myShip)

    const attackCoordinates = {
        x:4,
        y:4
    }

    myBoard.receiveAttack(attackCoordinates)

    expect(myBoard.board[4][4]).toBe(false)
})

it('expects to shoot out of bounds', () => {
    const myBoard = new Gameboard(8)
    const myShip = new Ship(2, true)
    const coordinates = {
        x:1,
        y:1
    }

    myBoard.placeShip(coordinates, myShip)

    const attackCoordinates = {
        x:50,
        y:40
    }

    const response = myBoard.receiveAttack(attackCoordinates)

    expect(response).toBe('Shot out of bounds')
})

it('expects to shoot out of bounds with negatives', () => {
    const myBoard = new Gameboard(8)
    const myShip = new Ship(2, true)
    const coordinates = {
        x:1,
        y:1
    }

    myBoard.placeShip(coordinates, myShip)

    const attackCoordinates = {
        x:-50,
        y:-40
    }

    const response = myBoard.receiveAttack(attackCoordinates)

    expect(response).toBe('Shot out of bounds')
})

it('expects 3 ships to be placed', () => {
    const myBoard = new Gameboard(8)
    const myShip1 = new Ship(2, true)
    const coordinates1 = {
        x:1,
        y:3
    }
    const myShip2 = new Ship(2, true)
    const coordinates2 = {
        x:1,
        y:5
    }
    const myShip3 = new Ship(2, true)
    const coordinates3 = {
        x:1,
        y:7
    }

    myBoard.placeShip(coordinates1, myShip1)
    myBoard.placeShip(coordinates2, myShip3)
    myBoard.placeShip(coordinates3, myShip3)

    expect(myBoard.ships.length).toBe(3)
})

it('tests if there are still ships alive', () => {
    const myBoard = new Gameboard(5)
    const myShip = new Ship(3, true)
    const coordinate = {
        x:1,
        y:1
    }
    const myShip2 = new Ship(3, true)
    const coordinate2 = {
        x:1,
        y:2
    }

    myBoard.placeShip(coordinate, myShip)
    myBoard.placeShip(coordinate2, myShip2)

    expect(myBoard.allShipsSunk()).toBe(false)
})

it('tests if all ships are sunk', () => {
    const myBoard = new Gameboard(5)
    const myShip = new Ship(1, true)
    const coordinate = {
        x:1,
        y:1
    }
    const myShip2 = new Ship(1, true)
    const coordinate2 = {
        x:1,
        y:2
    }

    myBoard.placeShip(coordinate, myShip)
    myBoard.placeShip(coordinate2, myShip2)

    myBoard.receiveAttack(coordinate)
    myBoard.receiveAttack(coordinate2)

    expect(myBoard.allShipsSunk()).toBe(true)
})



