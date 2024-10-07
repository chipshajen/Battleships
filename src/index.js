const { Player } = require("./player.js") 
const { Ship } = require("./ship.js")
import "./styles.css"

const boardSize = 8

const firstPlayer = new Player(true, boardSize)
const secondPlayer = new Player(false, boardSize)

placePredetermindShips(firstPlayer)
placePredetermindShips(secondPlayer)

console.log(firstPlayer.board)

function placePredetermindShips(player){
    const ships = []
    const shipStats = [
        {size: 5, horizontal: true, coordinates: {x:1, y:1}},
        {size: 4, horizontal: false, coordinates: {x:1, y:3}},
        {size: 3, horizontal: false, coordinates: {x:3, y:3}},
        {size: 2, horizontal: true, coordinates: {x:6, y:6}},
    ]

    shipStats.forEach(ship => ships.push(new Ship(ship.size, ship.horizontal)))

    for(let i = 0; i < ships.length; i++){
        // const coordinate = {
        //     x: getRandomCoordinate(),
        //     y: getRandomCoordinate()
        // }
        player.board.placeShip(shipStats[i].coordinates, ships[i])
    }
        
    
}

// function getRandomCoordinate(){
//     const x = Math.floor(Math.random() * boardSize)

//     return x
// }