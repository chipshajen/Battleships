class Gameboard{
    constructor(rows){
        this.ships = []
        this.board = new Array(rows)
        
        for (let i = 0; i < rows; i++) {
            this.board[i] = new Array(rows)

            for(let j = 0; j < rows; j++){
                this.board[i][j] = null
            }
        }
    }

    placeShip(coordinate, ship){
        if(coordinate.x < 0 || coordinate.y < 0){
            return "Out of bounds"
        }

        if(ship.horizontal === undefined) throw new Error('undefined horizontal')

        if(ship.horizontal){
            if(coordinate.x + ship.length > this.board.length){
                return "Out of bounds"
            }

            for(let i = coordinate.x; i < ship.length + coordinate.x; i++){
                if(this.board[coordinate.y][i] !== null) return 'Ship already in this spot'
            }

            for(let i = coordinate.x; i < ship.length + coordinate.x; i++){
                this.board[coordinate.y][i] = ship
            }

            this.ships.push(ship)

            return
        }

        if(!ship.horizontal){


            if(coordinate.y + ship.length > this.board.length){
                return "Out of bounds"
            }

            for(let i = coordinate.y; i < ship.length + coordinate.y; i++){
                if(this.board[i][coordinate.x] !== null) return 'Ship already in this spot'
            }

            for(let i = coordinate.y; i < ship.length + coordinate.y; i++){
                this.board[i][coordinate.x] = ship
            }

            this.ships.push(ship)

            return
        }
    }

    receiveAttack(coordinates){

        if(coordinates.y > this.board.length || coordinates.x > this.board.length || coordinates.y < 0 || coordinates.x < 0){
            return "Shot out of bounds"
        }

        const shipToHit = this.board[coordinates.x][coordinates.y]

        if(shipToHit){
            shipToHit.hit()
        } else {
            this.board[coordinates.x][coordinates.y] = false
        }
    }

    allShipsSunk(){
        for(const ship of this.ships){
            if(!ship.isSunk()) return false
            return true 
        }
    }
}

module.exports = { Gameboard }