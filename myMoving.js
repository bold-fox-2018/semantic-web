function moveLeft() {
    console.log('left');
    for (var i = 0; i < myTableZ.length; i++) {
        for (var j = 0; j < myTableZ[i].length; j++) {
            for (var k = j + 1; k < myTableZ[i].length; k++) {
                // console.log(i, j, k);
                if (myTableZ[i][j] !== 0 && myTableZ[i][k] !== 0) {
                    if (myTableZ[i][j] === myTableZ[i][k]) {
                        changed = true;
                        myTableZ[i][j] = myTableZ[i][j] * 2;
                        myTableZ[i][k] = 0;
                        score += myTableZ[i][j];
                        document.querySelector('table#myTable').rows[i].cells[j].innerHTML = myTableZ[i][j];
                        document.querySelector('table#myTable').rows[i].cells[k].innerHTML = '';
                        colorBG(myTableZ[i][j], i, j);
                        colorBG(myTableZ[i][k], i, k);
                        break;
                    } else {
                        break;
                    }
                }
            }
            // SORTING
            if (myTableZ[i][j] !== 0) {
                for (var n = 0; n < j; n++) {
                    if (myTableZ[i][n] === 0) {
                        moving = true;
                        myTableZ[i][n] = myTableZ[i][j];
                        myTableZ[i][j] = 0;
                        document.querySelector('table#myTable').rows[i].cells[n].innerHTML = myTableZ[i][n];
                        document.querySelector('table#myTable').rows[i].cells[j].innerHTML = '';
                        colorBG(myTableZ[i][n], i, n);
                        colorBG(myTableZ[i][j], i, j);
                        break;
                    }
                }
            }
        }
    }
    // console.log(myTableZ)
    console.log(changed);
}
function moveUp() {
    console.log('up')
    for (var i = 0; i < myTableZ[0].length; i++) {
        for (var j = 0; j < myTableZ.length; j++) {
            for (var k = j + 1; k < myTableZ[i].length; k++) {
                // console.log(j, i, k);
                if (myTableZ[j][i] !== 0 && myTableZ[k][i] !== 0) {
                    if (myTableZ[j][i] === myTableZ[k][i]) {
                        changed = true;
                        myTableZ[j][i] = myTableZ[j][i] * 2;
                        myTableZ[k][i] = 0;
                        score += myTableZ[j][i];
                        document.querySelector('table#myTable').rows[j].cells[i].innerHTML = myTableZ[j][i];
                        document.querySelector('table#myTable').rows[k].cells[i].innerHTML = '';
                        colorBG(myTableZ[j][i], j, i);
                        colorBG(myTableZ[k][i], k, i);
                        break;
                    } else {
                        break;
                    }
                }
            }
            // SORTING
            if (myTableZ[j][i] !== 0) {
                for (var n = 0; n < j; n++) {
                    if (myTableZ[n][i] === 0) {
                        moving = true;
                        myTableZ[n][i] = myTableZ[j][i];
                        myTableZ[j][i] = 0;
                        document.querySelector('table#myTable').rows[n].cells[i].innerHTML = myTableZ[n][i];
                        document.querySelector('table#myTable').rows[j].cells[i].innerHTML = '';
                        colorBG(myTableZ[n][i], n, i);
                        colorBG(myTableZ[j][i], j, i);
                        break;
                    }
                }
            }
        }
    }
    // console.log(myTableZ)
    console.log(changed);
}
function moveRight() {
    console.log('right')
    for (var i = 0; i < myTableZ.length; i++) {
        for (var j = myTableZ[i].length; j >= 0; j--) {
            for (var k = j - 1; k >= 0; k--) {
                // console.log(i, j, k);
                if (myTableZ[i][j] !== 0 && myTableZ[i][k] !== 0) {
                    if (myTableZ[i][j] === myTableZ[i][k]) {
                        changed = true;
                        myTableZ[i][j] = myTableZ[i][j] * 2;
                        myTableZ[i][k] = 0;
                        score += myTableZ[i][j];
                        document.querySelector('table#myTable').rows[i].cells[j].innerHTML = myTableZ[i][j];
                        document.querySelector('table#myTable').rows[i].cells[k].innerHTML = '';
                        colorBG(myTableZ[i][j], i, j);
                        colorBG(myTableZ[i][k], i, k);
                        break;
                    } else {
                        break;
                    }
                }
            }
            // SORTING
            if (myTableZ[i][j] !== 0) {
                for (var n = myTableZ[i].length - 1; n > j; n--) {
                    if (myTableZ[i][n] === 0) {
                        moving = true;
                        myTableZ[i][n] = myTableZ[i][j];
                        myTableZ[i][j] = 0;
                        document.querySelector('table#myTable').rows[i].cells[n].innerHTML = myTableZ[i][n];
                        document.querySelector('table#myTable').rows[i].cells[j].innerHTML = '';
                        colorBG(myTableZ[i][n], i, n);
                        colorBG(myTableZ[i][j], i, j);
                        break;
                    }
                }
            }
        }
    }
    // console.log(myTableZ)
    console.log(changed);
}
function moveDown() {
    console.log('down')
    for (var i = myTableZ[0].length - 1; i >= 0; i--) {
        for (var j = myTableZ.length - 1; j >= 0; j--) {
            for (var k = j - 1; k >= 0; k--) {
                // console.log(j, i, k);
                if (myTableZ[j][i] !== 0 && myTableZ[k][i] !== 0) {
                    if (myTableZ[j][i] === myTableZ[k][i]) {
                        changed = true;
                        myTableZ[j][i] = myTableZ[j][i] * 2;
                        myTableZ[k][i] = 0;
                        score += myTableZ[j][i];
                        document.querySelector('table#myTable').rows[j].cells[i].innerHTML = myTableZ[j][i];
                        document.querySelector('table#myTable').rows[k].cells[i].innerHTML = '';
                        colorBG(myTableZ[j][i], j, i);
                        colorBG(myTableZ[k][i], k, i);
                        break;
                    } else {
                        break;
                    }
                }
            }
            // SORTING
            if (myTableZ[j][i] !== 0) {
                for (var n = myTableZ.length - 1; n > j; n--) {
                    if (myTableZ[n][i] === 0) {
                        moving = true;
                        myTableZ[n][i] = myTableZ[j][i];
                        myTableZ[j][i] = 0;
                        document.querySelector('table#myTable').rows[n].cells[i].innerHTML = myTableZ[n][i];
                        document.querySelector('table#myTable').rows[j].cells[i].innerHTML = '';
                        colorBG(myTableZ[n][i], n, i);
                        colorBG(myTableZ[j][i], j, i);
                        break;
                    }
                }
            }
        }
    }
    // console.log(myTableZ)
    console.log(changed);
}