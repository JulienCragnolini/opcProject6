////////////////////////////////////////////////////////////// MAP

// class Map {
//     constructor(x, y) {

//     }
// }

////////////////////////////////////////////////////////////// Weapons

let weapons = [];

class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}

let weapon1 = new Weapon("basic", 10);
let weapon2 = new Weapon("super", 20);
let weapon3 = new Weapon("mega", 30);
let weapon4 = new Weapon("magic", 40);
let weapon5 = new Weapon("incredible", 40);


weapons.push(weapon1, weapon2, weapon3, weapon4, weapon5);

console.log(weapons);

////////////////////////////////////////////////////////////// Players

let players = [];

class Player {
    constructor(pseudo) {
        this.pseudo = pseudo;
        this.hp = 100;
        this.pm = 3;
    }

    verifierSante() {
        if (this.hp <= 0) {
            this.hp == 0;
            console.log(this.pseudo + " a perdu !");
        }
    }

    get informations() {
        return `PSEUDO : ${this.pseduo}\nPDV : ${this.hp}\nPOS X : ${this.x}\n POS Y : ${this.y}`;
    }
}

let player1 = new Player("Doxe");
let player2 = new Player("Krix");

players.push(player1, player2);

console.log(players);

// https://codepen.io/gaviolig/pen/ZbEmgg
// https://pub.phyks.me/sdz/sdz/creer-un-mini-rpg-en-javascript-avec-canvas.html
