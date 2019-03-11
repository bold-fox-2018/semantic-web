// GLOBAL VARIABLE
var iPosisi = 0;
var jPosisi = 0;
var score = 0;
var changed = false;
var moving = false;
var lastMove = 0;

// START EventListener
document.onkeydown = function (e) {
    if (e.keyCode === 37) {  // left
        moveLeft();
        document.querySelector('#score').innerHTML = score;
        if (changed === true || moving === true || (changed === false && lastMove !== e.keyCode && moving === true)) {
            addRandom();
        }
        lastMove = 37;
    } else if (e.keyCode === 38) {  // up
        moveUp();
        document.querySelector('#score').innerHTML = score;
        if (changed === true || moving === true || (changed === false && lastMove !== e.keyCode && moving === true)) {
            addRandom();
        }
        lastMove = 38;
    } else if (e.keyCode === 39) {  // right
        moveRight();
        document.querySelector('#score').innerHTML = score;
        if (changed === true || moving === true || (changed === false && lastMove !== e.keyCode && moving === true)) {
            addRandom();
        }
        lastMove = 39;
    } else if (e.keyCode === 40) {  // down
        moveDown();
        document.querySelector('#score').innerHTML = score;
        if (changed === true || moving === true || (changed === false && lastMove !== e.keyCode && moving === true)) {
            addRandom();
        }
        lastMove = 40;
    }

};
// END EventListener


// START Change ColorBG
function colorBG(num, i, j) {
    if (num === 0) {
        document.querySelector('table#myTable').rows[i].cells[j].setAttribute('class', 'c0');
    } else if (num === 2) {
        document.querySelector('table#myTable').rows[i].cells[j].setAttribute('class', 'c2');
    } else if (num === 4) {
        document.querySelector('table#myTable').rows[i].cells[j].setAttribute('class', 'c4');
    } else if (num === 8) {
        document.querySelector('table#myTable').rows[i].cells[j].setAttribute('class', 'c8');
    } else if (num === 16) {
        document.querySelector('table#myTable').rows[i].cells[j].setAttribute('class', 'c16');
    } else if (num === 32) {
        document.querySelector('table#myTable').rows[i].cells[j].setAttribute('class', 'c32');
    } else if (num === 64) {
        document.querySelector('table#myTable').rows[i].cells[j].setAttribute('class', 'c64');
    } else if (num === 128) {
        document.querySelector('table#myTable').rows[i].cells[j].setAttribute('class', 'c128');
    } else if (num >= 256) {
        document.querySelector('table#myTable').rows[i].cells[j].setAttribute('class', 'c256');
    }
}
// END Change ColorBG

// START INPUT
// var myTableZ = [
//     [2, 0, 2, 4],
//     [2, 0, 2, 2],
//     [2, 0, 4, 0],
//     [2, 0, 0, 2]
// ]
var myTableZ = [
    [2, 4, 2, 8],
    [4, 2, 4, 16],
    [2, 4, 2, 4],
    [8, 16, 8, 0]
]
for (var i = 0; i < document.querySelector('table#myTable').rows.length; i++) {
    for (var j = 0; j < document.querySelector('table#myTable').rows.length; j++) {
        if (myTableZ[i][j] !== 0) {
            document.querySelector('table#myTable').rows[i].cells[j].innerHTML = myTableZ[i][j];
        }
        colorBG(myTableZ[i][j], i, j)
    }
}
// END INPUT
