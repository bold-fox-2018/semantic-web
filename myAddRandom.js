function addRandom() {
    changed = false;
    moving = false;

    // Remove Style inputBaru
    document.querySelector('table#myTable').rows[iPosisi].cells[jPosisi].classList.remove('inputBaru')

    // Nilai 2 atau 4
    var nilaiRandom = 9;
    while (nilaiRandom % 2 !== 0) {
        nilaiRandom = Math.floor(Math.random() * 3) + 2;
    }

    // myTableZ to posisiZ
    var posisiZ = []
    for (var i = 0; i < myTableZ.length; i++) {
        for (var j = 0; j < myTableZ[i].length; j++) {
            posisiZ.push(myTableZ[i][j])
        }
    }

    // Posisi Random by posisiZ
    var posisi = Math.floor(Math.random() * 17) + 0;
    var kosongKah = false
    for (var i = 0; i < posisiZ.length; i++) {
        if (posisiZ[i] === 0) {
            kosongKah = true;
            break;
        }
    }
    if (kosongKah === true) {
        while (posisiZ[posisi] !== 0) {
            posisi = Math.floor(Math.random() * 17) + 0;
        }
        iPosisi = Math.floor(posisi / myTableZ.length);
        jPosisi = posisi % myTableZ.length;
        myTableZ[iPosisi].splice(jPosisi, 1, nilaiRandom)
        // console.log(iPosisi, jPosisi, nilaiRandom)

        // Edit #myTable
        document.querySelector('table#myTable').rows[iPosisi].cells[jPosisi].innerHTML = nilaiRandom;
        // ADD Style inputBaru
        colorBG(myTableZ[iPosisi][jPosisi], iPosisi, jPosisi);
        gameOver();
    } else {    // Penuh
        gameOver();
    }
}