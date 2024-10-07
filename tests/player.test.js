const { Player } = require('../src/player.js')

it('makes a real player', () => {
    const myPlayer = new Player(true, 5)

    expect(myPlayer.isRealPlayer).toBe(true)
})

it('makes an AI player', () => {
    const myPlayer = new Player(false, 5)

    expect(myPlayer.isRealPlayer).toBe(false)
})

it('makes a player with board size of 5', () => {
    const myPlayer = new Player(true, 5)

    expect(myPlayer.board.board.length).toBe(5)
})