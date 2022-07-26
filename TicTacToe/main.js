let typeOfSign = 1;
let numberOfSteps = 0;
let gameFinished = false;

function checkResult() {
    let boxValue = [[], [], []];
    let boxNumber = 0
    for (let i = 1; i <= 9; i++) {
        if (document.getElementById(i.toString()) && typeof document.getElementById(i.toString()).innerHTML !== null){
            boxValue[boxNumber].push(document.getElementById(i.toString()).innerHTML);
        } else {
            boxValue[boxNumber].push('');
        }  
        if (i % 3 === 0) { boxNumber++ }
    }
    console.log(boxValue)

    for (let i = 0; i <= 2; i++) {
        if (boxValue[i][0] !== '' && boxValue[i][0] === boxValue[i][1] && boxValue[i][2] === boxValue[i][1]) {
            let restartbutton = document.getElementById('restart');
            restartbutton.classList.remove('hide-restart');
            document.getElementById(((i)*3)+1).style.color = "red";
            document.getElementById(((i)*3)+2).style.color = "red";
            document.getElementById(((i)*3)+3).style.color = "red";
            gameFinished = true;
        }
    }

    for (let i = 0; i <= 2; i++) {
        if (boxValue[0][i] !== '' && boxValue[0][i] === boxValue[1][i] && boxValue[2][i] === boxValue[1][i]) {
            let restartbutton = document.getElementById('restart');
            restartbutton.classList.remove('hide-restart');
            document.getElementById(((0)*3)+i+1).style.color = "red";
            document.getElementById(((1)*3)+i+1).style.color = "red";
            document.getElementById(((2)*3)+i+1).style.color = "red";
            gameFinished = true;
        }
    }

    if (boxValue[0][0] !== '' && boxValue[0][0] === boxValue[1][1] && boxValue[2][2] === boxValue[1][1]) {
        let restartbutton = document.getElementById('restart');
        restartbutton.classList.remove('hide-restart');
        document.getElementById('1').style.color = "red";
        document.getElementById('5').style.color = "red";
        document.getElementById('9').style.color = "red";
        gameFinished = true;
    } else if (boxValue[0][2] !== '' && boxValue[0][2] === boxValue[1][1] && boxValue[2][0] === boxValue[1][1]) {
        let restartbutton = document.getElementById('restart');
        restartbutton.classList.remove('hide-restart');
        document.getElementById('3').style.color = "red";
        document.getElementById('5').style.color = "red";
        document.getElementById('7').style.color = "red";
        gameFinished = true;
    }

    if (numberOfSteps === 9) {
        let restartbutton = document.getElementById('restart');
        restartbutton.classList.remove('hide-restart');
    }
}

function placeSign(e) {
    if (gameFinished === false) {
        if (e.childNodes.length === 0) {
            if (typeOfSign === 0) {
                e.innerText = "O";
                numberOfSteps++;
                typeOfSign++;
            } else {
                e.innerText = "X";
                numberOfSteps++;
                typeOfSign--;
            }
        checkResult();
        } else {
            alert("Div is already taken");
        }
    }
}

function restartGame() {
    document.location.reload(true);
}

