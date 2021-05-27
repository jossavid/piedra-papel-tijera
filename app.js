let userscore = 0;
let pcscore = 0;
const userscore_span = document.getElementById("user-score");
const pcscore_span = document.getElementById("pc-score");
//const scoreboard_div = document.querySelector(".score-board");
const restart = document.getElementById("restart");
const result = document.getElementById("result")
const modal = document.querySelector(".modal");
const piedra_div = document.getElementById("piedra");
const papel_div = document.getElementById("papel");
const tijeras_div = document.getElementById("tijeras");

function getpcchoice() {
    const choices = ['piedra', 'papel', 'tijeras'];
    const randomnumber = Math.floor(Math.random()*3);
    return choices [randomnumber];
}

function win(userchoice, pcchoice) {
    userscore++;
    userscore_span.innerHTML = userscore;
    pcscore_span.innerHTML = pcscore;
    result.innerHTML = `<h1 class="text-win">TU GANASTE!</h1> <p>PC elijio <strong>${pcchoice}</strong></p>`;
    modal.style.display = 'block'
}

function lose(userchoice, pcchoice) {
    pcscore++;
    userscore_span.innerHTML = userscore;
    userscore_span.innerHTML = pcscore;
    result.innerHTML = `<h1 class="text-lose">Has perdido</h1> <p>PC elijio <strong>${pcchoice}</strong></p>`;
    modal.style.display = 'block'
}

function draw(userchoice, pcchoice) {
    userscore_span.innerHTML = userscore;
    pcscore_span.innerHTML = pcscore;
    result.innerHTML = `<h1>Es un empate</h1> <p>Ambos elijieron <strong>${pcchoice}</strong></p>`;
    modal.style.display = 'block'
}

function play(userchoice) {
    const pcchoice = getpcchoice();
    switch(userchoice + pcchoice) {
        case 'piedratijeras':
        case 'papelpiedra':
        case 'tijeraspapel':
            win(userchoice, pcchoice);
        break;
        case 'piedrapapel':
        case 'papeltijeras':
        case 'tijeraspiedra':
            lose(userchoice, pcchoice)
        break;
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijerastijeras':
            draw(userchoice, pcchoice);
        break;
    }
}


function main() {
    piedra_div.addEventListener('click', function() {
        play('piedra');
    })

    papel_div.addEventListener('click', function() {
        play('papel');
    })

    tijeras_div.addEventListener('click', function() {
        play('tijeras');
    })
}


function clearmodal(e) {
    if(e.target == modal) {
        modal.style.display = "none"
    }
}

function restartgame() {
    userscore = 0;
    pcscore = 0;
    userscore_span.innerHTML = userscore;
    pcscore_span.innerHTML = pcscore;
}

restart.addEventListener('click', restartgame);
window.addEventListener('click', clearmodal);
main ();