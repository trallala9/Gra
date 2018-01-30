/*Przycisk zainicjowania nowej gry*/
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);
/*Przycisk zainicjowania nowej gry*/
/*Wybór gracza*/
var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function () {
    playerPick('rock')
});
pickPaper.addEventListener('click', function () {
    playerPick('paper')
});
pickScissors.addEventListener('click', function () {
    playerPick('scissors')
});
/*Wybór gracza*/
/*Wartości początkowe
Najpierw zainicjujmy wartości, których będziemy używać w grze i nadajmy im wartości początkowe.*/
var gameState = 'notStarted', //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
/*Wyświetlanie elementów gry.W ten sposób tworzymy zmienne, które będą wskazywać na elementy gry, a konkretnie jej poszczególne części.*/
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');
/*Wcześniej zdefiniowaliśmy zmienną gameState. Decydujemy, że może ona przyjąć kilka wartości - zależnie od tego, czy gra nie została jeszcze rozpoczęta, jest w trakcie czy została zakończona chcemy wyświetlić różne elementy na stronie.

Dlaczego nie stworzyć na to funkcji?*/
function setGameElements() {
    switch (gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break;
        case 'ended':
            newGameBtn.innerText = 'Jeszcze raz';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}
/*koniec funkcji*/
/*Skoro funkcja już jest, pozostaje nam tylko ją wywołać.*/
setGameElements();
/*Rozpoczęcie gry
Teraz należy zdefiniować funkcję newGame, która będzie odpowiadać za rozpoczęcie każdej gry.*/
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');
/*Dalej definiujemy funkcję, która będzie uruchamiana po wciśnięciu przycisku "New Game" / "Play Again"*/
function newGame() {
    player.name = prompt('Please enter your name', 'imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints();
    }

}
/*Wybór gracza
Zdefiniujmy teraz funkcję, która odpowiada za pobranie wyboru gracza.*/
function playerPick(playerPick) {
    console.log(playerPick);
}
/*WybOr gracza*/
/*Losowanie wyboru komputera*/
var x = Math.random();
Math.floor(Math.random() * 3)

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}
/*Mamy wybór gracza oraz komputera - skoro już potrafimy otrzymać te dwie rzeczy, umieśćmy ten wybór na stronie.*/
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}
/*Logika gry i przyznawanie punktówNa początek załóżmy, że to my wygraliśmy, a potem sprawdźmy czy to prawda..*/
function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' && playerPick == 'scissors') ||
        (computerPick == 'scissors' && playerPick == 'paper') ||
        (computerPick == 'paper' && playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }

}
/*Nasza funkcja powinna wywoływać się za każdym wyborem gracza.*/
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}
/*Logika gry i przyznawanie punktów*Na początku usuwamy wyświetlany tekst o wygranej któregoś z graczy. Jeszcze nie wiadomo, kto wygrał, będziemy to dopiero sprawdzać.*/
function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' && playerPick == 'scissors') ||
        (computerPick == 'scissors' && playerPick == 'paper') ||
        (computerPick == 'paper' && playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }

}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function winnerGame() {
    if (player.score === 10) {
        gameState = 'ended';
        setGameElements();

        alert('Wygrał gracz: ' + player.name);
        console.log('Wygrał gracz: ' + player.name);
    } else if (computer.score === 10) {
        gameState = 'ended';

        setGameElements();
        alert('Wygrał komputer');
        console.log('Wygrał komputer');
    }
}
