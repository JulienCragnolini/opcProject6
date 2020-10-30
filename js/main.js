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

// alert(`${name1} et ${name2}, je vous souhaite bon courage dans ce combat épique !` );

// let player1 = new Player(name1, weapon1);
// let player2 = new Player(name2, weapon1);

// $('#name1').text(name1);
// $('#name2').text(name2);

let player1 = new Player('name1', 3, weapon1);
let player2 = new Player('name2', 0, weapon1);

players.push(player1, player2);

let board = new Board();
board.createBoard();

board.detailsPlacement(10, "caseObstacle","#97B3FF");
board.detailsPlacement(1, "caseWeapon","#FFDA8B", weapon2);
board.detailsPlacement(1, "caseWeapon","#FFDA8B", weapon3);
board.detailsPlacement(1, "caseWeapon","#FFDA8B", weapon4);
board.detailsPlacement(1, "caseWeapon","#FFDA8B", weapon5);
board.detailsPlacement(1, "casePlayer","lime", player1);
$('.hp1').text(player1.hp);
$('.pm1').text(player1.pm);
$('.pos1').text(player1.position);
board.detailsPlacement(1, "casePlayer","red", player2);
$('.hp2').text(player2.hp);
$('.pm2').text(player2.pm);
$('.pos2').text(player2.position);

document.onkeydown = function checkKeyPress(e) {
    if (player1.pm > 0) {
        
        if (e.keyCode == "80") {
            // passe le tour en mettant les pm à 0
            $('.pm1').text(player1.pm = 0);
        }
        if (e.keyCode == "37") {
            // retire un point de mouvement
            $('.pm1').text(player1.pm -= 1);
            // mise à jour des coordonnées du joueur
            $('.pos1').text(`${player1.position[0] -= 1},${player1.position[1]}`);
        }
        if (e.keyCode == "39") {
            // retire un point de mouvement
            $('.pm1').text(player1.pm -= 1);
            // mise à jour des coordonnées du joueur
            $('.pos1').text(`${player1.position[0] += 1},${player1.position[1]}`);
        }
        if (e.keyCode == "38") {
            // retire un point de mouvement
            $('.pm1').text(player1.pm -= 1);
            // mise à jour des coordonnées du joueur
            $('.pos1').text(`${player1.position[0]},${player1.position[1] -= 1}`);
        }
        if (e.keyCode == "40") {
            // retire un point de mouvement
            $('.pm1').text(player1.pm -= 1);
            // mise à jour des coordonnées du joueur
            $('.pos1').text(`${player1.position[0]},${player1.position[1] += 1}`);
        }
        if (player1.pm == 0){
            $('.pm2').text(player2.pm = 3);
    
        }
    }
    else if (player2.pm > 0){
        
        if (e.keyCode == "80") {
            // passe le tour en mettant les pm à 0
            $('.pm2').text(player2.pm = 0);
        }
        if (e.keyCode == "37") {
            // retire un point de mouvement
            $('.pm2').text(player2.pm -= 1);
            // mise à jour des coordonnées du joueur
            $('.pos2').text(`${player2.position[0] -= 1},${player2.position[1]}`);
        }
        if (e.keyCode == "39") {
            // retire un point de mouvement
            $('.pm2').text(player2.pm -= 1);
            // mise à jour des coordonnées du joueur
            $('.pos2').text(`${player2.position[0] += 1},${player2.position[1]}`);
        }
        if (e.keyCode == "38") {
            // retire un point de mouvement
            $('.pm2').text(player2.pm -= 1);
            // mise à jour des coordonnées du joueur
            $('.pos2').text(`${player2.position[0]},${player2.position[1] -= 1}`);
        }
        if (e.keyCode == "40") {
            // retire un point de mouvement
            $('.pm2').text(player2.pm -= 1);
            // mise à jour des coordonnées du joueur
            $('.pos2').text(`${player2.position[0]},${player2.position[1] += 1}`);
        } 

        if (player2.pm == 0){
            $('.pm1').text(player1.pm = 3);
    
        }
    }
}
    // if (e.keyCode == "37") {
    //     // retire un point de mouvement
    //     $('.pm1').text(player1.pm -= 1);
    //     // mise à jour des coordonnées du joueur
    //     $('.pos1').text(`${player1.position[0] -= 1},${player1.position[1]}`);
        
    //     // retire un point de mouvement
    //     $('.pm2').text(player2.pm -= 1);
    //     // mise à jour des coordonnées du joueur
    //     $('.pos2').text(`${player2.position[0] -= 1},${player2.position[1]}`);
    // }}
    // if (e.keyCode == "39") {
    //     // retire un point de mouvement
    //     $('.pm1').text(player1.pm -= 1);
    //     // mise à jour des coordonnées du joueur
    //     $('.pos1').text(`${player1.position[0] += 1},${player1.position[1]}`);
        
    //     // retire un point de mouvement
    //     $('.pm2').text(player2.pm -= 1);
    //     // mise à jour des coordonnées du joueur
    //     $('.pos2').text(`${player2.position[0] += 1},${player2.position[1]}`);
    // }
    // if (e.keyCode == "38") {
    //     // retire un point de mouvement
    //     $('.pm1').text(player1.pm -= 1);
    //     // mise à jour des coordonnées du joueur
    //     $('.pos1').text(`${player1.position[0]},${player1.position[1] -= 1}`);
        
    //     // retire un point de mouvement
    //     $('.pm2').text(player2.pm -= 1);
    //     // mise à jour des coordonnées du joueur
    //     $('.pos2').text(`${player2.position[0]},${player2.position[1] -= 1}`);
    // }
    // if (e.keyCode == "40") {
    //     // retire un point de mouvement
    //     $('.pm1').text(player1.pm -= 1);
    //     // mise à jour des coordonnées du joueur
    //     $('.pos1').text(`${player1.position[0]},${player1.position[1] += 1}`);
        
    //     // retire un point de mouvement
    //     $('.pm2').text(player2.pm -= 1);
    //     // mise à jour des coordonnées du joueur
    //     $('.pos2').text(`${player2.position[0]},${player2.position[1] += 1}`);
    // } 
