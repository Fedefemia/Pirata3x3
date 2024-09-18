let matrix = [];
let table = document.getElementById('matrix-table');
let turnoICON = document.getElementById('turnicon');
let turno;
newgame();

function newgame() {
    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row[j] = "V";
        }
        matrix[i] = row;
    }
    turno = "M";
    aggiornamatrix();
    turnoICON.innerHTML = `<img src="photo/m.png"></img>`;
}

function resetG(){
    location.reload();
}
function cambioturno() {
    if (turno == "M") {
        turno = "C";
        turnoICON.innerHTML = `<img src="photo/c.png"></img>`;
    }
    else {
        turno = "M";
        turnoICON.innerHTML = `<img src="photo/m.png"></img>`;
    }
}

function clickBTN(number) {
    let row;
    if (number < 2.5) {
        row = 0;
    }
    else if (number < 5.5) {
        number -= 3;
        row = 1;
    }
    else {
        number -= 6;
        row = 2;
    }
    console.log(number, row);
    let tof = checkTile(row, number);
    if (tof) {
        console.log(number, row);
        matrix[row][number] = turno;
        cambioturno();
        aggiornamatrix();
        let win = checkRows();
        if(win != false){
            triggerWin(win);
        }
    }
}

function checkTile(rows, numbers) {
    if (matrix[rows][numbers] == "V") {
        return true
    }
    else {
        return false;
    }
}

function aggiornamatrix() {
    let tableHTML = '';
    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            switch (matrix[i][j]) {
                case "V":
                    tableHTML += `<td><img src="photo/vuoto.png"></img></td>`;
                    break;
                case "C":
                    tableHTML += `<td><img src="photo/c.png"></img></td>`;
                    break;
                case "M":
                    tableHTML += `<td><img src="photo/m.png"></img></td>`;
                    break;
            }
        }
        tableHTML += '</tr>';
    }

    table.innerHTML = tableHTML;
}

function checkRows() {
    for (let i = 0; i < 3; i++) {
        if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2] && matrix[i][0] != "V") {
            return matrix[i][0];
        }
    }
    for (let i = 0; i < 3; i++) {
        if (matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i] && matrix[0][i] != "V") {
            return matrix[0][i];
        }
    }
    if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2] && matrix[0][0] != "V") {
        return matrix[0][0];
    }
    return false;
}
function triggerWin(winner){
    let bodyhtml = document.getElementById('corpo');
    let winHMTL = '<div id="winTOT">The winner is: ' + winner + '</div>';
    bodyhtml.innerHTML += winHMTL;
}