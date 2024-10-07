function renderBoard(playerBoard, string){
    let board; // Define board outside the if/else blocks

    if(string == 'first'){
        board = document.querySelector('.left-board')
    } else if(string == 'second'){
        board = document.querySelector('.right-board')
    } else {
        throw new Error('passed in bad string')
    }
    console.log(playerBoard.board.length)
    for(let i = 0; i < playerBoard.board.length; i++){
        console.log('hello')
        for(let j = 0; j < playerBoard.board.length; j++){
            console.log(i + ' ' + j)

            const cell = document.createElement('div')

            cell.classList.add('cell')

            let tile = playerBoard.board[i][j]

            if(tile === false){
                cell.classList.add('miss')
            }

            // show ship
            // if(tile !== false && tile !== null){
            //     cell.classList.add('hit')
            // }

            cell.addEventListener('click', () => {
                playerBoard.receiveAttack({x:i, y:j})

                if(tile !== false && tile !== null){
                    cell.classList.add('hit')
                }

                if(tile === null){
                    cell.classList.add('miss')
                }
                
            })

            board.appendChild(cell)
        }
        
    }
}

module.exports = { renderBoard }