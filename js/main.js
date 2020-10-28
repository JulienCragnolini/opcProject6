import Weapon from './weapons.js';
import Player from './players.js';
import Board from './board.js'

let weapons = [];
let players = [];

let weapon1 = new Weapon("basic", 10);
let weapon2 = new Weapon("super", 20);
let weapon3 = new Weapon("mega", 30);
let weapon4 = new Weapon("magic", 40);
let weapon5 = new Weapon("incredible", 40);

weapons.push(weapon1, weapon2, weapon3, weapon4, weapon5);

// let name1 = prompt("Quel est votre nom grand chevalier ?");
// let name2 = prompt("Quel est votre nom grand chevalier ?");

// alert(name1 + ' et ' + name2 + ', je vous souhaite bon courage dans ce combat épique !' );

// let player1 = new Player(name1, weapon1);
// let player2 = new Player(name2, weapon1);

let player1 = new Player('name1', weapon1);
let player2 = new Player('name2', weapon1);

players.push(player1, player2);

let board = new Board();
board.createBoard();

board.detailsPlacement(10, "caseObstacle","#97B3FF"," : obstacle");
board.detailsPlacement(1, "caseWeapon","#FFDA8B"," : arme", weapon2);
board.detailsPlacement(1, "caseWeapon","#FFDA8B"," : arme", weapon3);
board.detailsPlacement(1, "caseWeapon","#FFDA8B"," : arme", weapon4);
board.detailsPlacement(1, "caseWeapon","#FFDA8B"," : arme", weapon5);
board.detailsPlacement(1, "casePlayer","lime"," : joueur", player1);
board.detailsPlacement(1, "casePlayer","red"," : joueur", player2);

window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(e) {
    if (e.keyCode == "37") {
        console.log(`Position gauche initiale X,Y : ${player1.position}`);
        console.log(`Position gauche suivante X,Y : ${player1.position[0] -= 1},${player1.position[1]}`);

        console.log(`Position gauche initiale X,Y : ${player2.position}`);
        console.log(`Position gauche suivante X,Y : ${player2.position[0] -= 1},${player2.position[1]}`);
    }
    if (e.keyCode == "39") {
        console.log(`Position droite initiale X,Y : ${player1.position}`);
        console.log(`Position droite suivante X,Y : ${player1.position[0] += 1},${player1.position[1]}`);

        console.log(`Position droite initiale X,Y : ${player2.position}`);
        console.log(`Position droite suivante X,Y : ${player2.position[0] += 1},${player2.position[1]}`);
    }
    if (e.keyCode == "38") {
        console.log(`Position haut initiale X,Y : ${player1.position}`);
        console.log(`Position haut suivante X,Y : ${player1.position[0]},${player1.position[1] -= 1}`);

        console.log(`Position haut initiale X,Y : ${player2.position}`);
        console.log(`Position haut suivante X,Y : ${player2.position[0]},${player2.position[1] -= 1}`);
    }
    if (e.keyCode == "40") {
        console.log(`Position bas initiale X,Y : ${player1.position}`);
        console.log(`Position bas suivante X,Y : ${player1.position[0]},${player1.position[1] += 1}`);

        console.log(`Position bas initiale X,Y : ${player2.position}`);
        console.log(`Position bas suivante X,Y : ${player2.position[0]},${player2.position[1] += 1}`);
    } 
}

// faire fonction, pour modifier visuelement une case

// etape 1 : voir si le joueur puet se deplacer
// etape 2 : si il peut, on modife la valeur de posx ou posy
// etape 3 : maj visuelement le canvas


// https://codepen.io/gaviolig/pen/ZbEmgg
// https://pub.phyks.me/sdz/sdz/creer-un-mini-rpg-en-javascript-avec-canvas.html
