export default class Player {
    constructor(pseudo, pm, weapon) {
        this.pseudo = pseudo;
        this.hp = 100;
        this.pm = pm;
        this.weapon = weapon;
        this.position = []
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
