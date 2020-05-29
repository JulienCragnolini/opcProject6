var canvas = document.getElementById('gameGrid');
var ctx = canvas.getContext('2d');
    
var widthMax = 600;
var heightMax = 600;
var tailleCase = 60;
var nbrCaseWidth = widthMax / tailleCase;
var nbrCaseHeight = heightMax / tailleCase;
var nbrCases = nbrCaseWidth * nbrCaseHeight;
var tabCases = [];

function createBoard() {
    ctx.fillStyle = "#184465";
    ctx.fillRect(0, 0, widthMax, heightMax);

    var col = 0;
    var lane = 0;

    for (let i = 0; i < nbrCases; i++) {
        ctx.strokeStyle = '#001f3f';
        ctx.strokeRect(tailleCase * col, tailleCase * lane, tailleCase, tailleCase);

        tabCases[i] = {
            numberCase: i,
            id: "caseFree",
            posX: tailleCase * col + 1,
            posY: tailleCase * lane + 1
        };
            
        col++;

        if (col === nbrCaseWidth) {
            col = 0;
            lane++;
        }
    }
}

createBoard();

var nbrObstacles = 10;
var nbrWeapons = 4;
var nbrPlayers = 2;

function randomNumber() {
    return Math.floor(Math.random() * (nbrCases - 1));
}

for (let i = 0; i < nbrObstacles; i++) {
    let alea = randomNumber();
    if (tabCases[alea].id !== "caseFree") {
        i--;
    } else {
        tabCases[alea].id = "caseObstacle";
        ctx.fillStyle = '#97B3FF'; ///////////////////////////////////////////////////////////////REFACTORISER
        ctx.fillRect(tabCases[alea].posX, tabCases[alea].posY, tailleCase - 2, tailleCase - 2);
        ctx.strokeStyle = '#001f3f';
        ctx.strokeRect(tabCases[alea].posX, tabCases[alea].posY, tailleCase, tailleCase);
        console.log(tabCases[alea].posX + "/" + tabCases[alea].posY + " : obstacle");
    }
}

for (let i = 0; i < nbrWeapons; i++) {
    let alea = randomNumber();
    if (tabCases[alea].id !== "caseFree" && "caseObstacle") {
        i--;
    } else {
        tabCases[alea].id = "caseArme";
        ctx.fillStyle = '#FFDA8B';
        ctx.fillRect(tabCases[alea].posX, tabCases[alea].posY, tailleCase - 2, tailleCase - 2);
        ctx.strokeStyle = '#001f3f';
        ctx.strokeRect(tabCases[alea].posX, tabCases[alea].posY, tailleCase, tailleCase);
        console.log(tabCases[alea].posX + "/" + tabCases[alea].posY + " : arme");
    }
}

for (let i = 0; i < nbrPlayers; i++) {
    let alea = randomNumber();
    if (tabCases[alea].id !== "caseFree" && "caseObstacle" && "caseArme") {
        i--;
    } else {
        tabCases[alea].id = "casePlayer";
        ctx.fillStyle = '#FFC18B';
        ctx.fillRect(tabCases[alea].posX, tabCases[alea].posY, tailleCase - 2, tailleCase - 2);
        ctx.strokeStyle = '#001f3f';
        ctx.strokeRect(tabCases[alea].posX, tabCases[alea].posY, tailleCase, tailleCase);
        console.log(tabCases[alea].posX + "/" + tabCases[alea].posY + " : joueur");
    }
}

// $('#caseObstacle').css('color', 'yellow');

// for (let i = 0; i < nbrCases; i++) {
//     (function(i) {
//         if (tabCases[i].id === "caseObstacle") {
//             console.log(tabCases[i].posX + "/" + tabCases[i].posY + " : obstacle");
//             ctx.fillStyle = 'red';
//         }
//     })(i);
// }

console.log(tabCases);


// for (var i = 0; i < nbrCases; i++) {
//     (function(i) {
//       if (tabCases[i].id === "caseObstacle") {
//         console.log(tabCases[i].posX + "/" + tabCases[i].posY);
//         var canvas = new Image();
//         canvas.src = "/img/logoTurquoiseBlanc.png";
//         canvas.addEventListener('load', function() {
//           context.drawImage(canvas, tabCases[i].posX, tabCases[i].posY);
//         }, false);
//       }
//     })(i);
//   }

