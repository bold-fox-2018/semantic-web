function gameOver() {
    var gameOver = true;
    for (var i = 0; i < myTableZ.length; i++) {
        for (var j = 0; j < myTableZ[i].length; j++) {
            if ((i >= 1 && i <= myTableZ.length - 2) && (j >= 1 && j <= myTableZ.length - 2)) {
                if (myTableZ[i][j] === myTableZ[i - 1][j]) {
                    gameOver = false;
                    break;
                } else if (myTableZ[i][j] === myTableZ[i + 1][j]) {
                    gameOver = false;
                    break;
                } else if (myTableZ[i][j] === myTableZ[i][j - 1]) {
                    gameOver = false;
                    break;
                } else if (myTableZ[i][j] === myTableZ[i][j + 1]) {
                    gameOver = false;
                    break;
                }
            } else if ((i === 0 || i === 3) && j <= myTableZ.length - 2) {
                if (myTableZ[i][j] === myTableZ[i][j + 1]) {
                    gameOver = false
                    break;
                }
            } else if ((i >= 1 && i <= myTableZ.length - 2 && j === 0) || (i >= 1 && i <= myTableZ.length - 2 && j === 3)) {
                if (myTableZ[i][j] === myTableZ[i + 1][j]) {
                    gameOver = false
                    break;
                } else if (myTableZ[i][j] === myTableZ[i - 1][j]) {
                    gameOver = false
                    break;
                }
            }
        }
        if (gameOver === false) {
            break;
        }
    }

    if (gameOver === true) {
        document.querySelector('#judul').innerHTML = "Game Over";
    }
}