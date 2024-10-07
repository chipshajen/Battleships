const { Gameboard } = require('./gameboard.js')

class Player{
    constructor(isRealPlayer, rows){
        this.isRealPlayer = isRealPlayer
        this.board = new Gameboard(rows)
    }
}

module.exports = { Player }