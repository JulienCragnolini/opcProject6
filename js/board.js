export default class Board {
    constructor() {
        this.widthMax = 600;
        this.heightMax = 600;
        this.tailleCase = 60;
        this.nbrCaseWidth = this.widthMax / this.tailleCase;
        this.nbrCaseHeight = this.heightMax / this.tailleCase;
        this.nbrCases = this.nbrCaseWidth * this.nbrCaseHeight;
        this.tabCases = [];
        this.canvas = document.getElementById('gameGrid');
        this.ctx = this.canvas.getContext('2d');
    }

    createBoard() {
        this.ctx.fillStyle = "#184465";
        this.ctx.fillRect(0, 0, this.widthMax, this.heightMax);

        var col = 0;
        var row = 0;

        for (let i = 0; i < this.nbrCases; i++) {
            this.ctx.strokeStyle = '#001f3f';
            this.ctx.strokeRect(this.tailleCase * col, this.tailleCase * row, this.tailleCase, this.tailleCase);

            this.tabCases[i] = {
                numberCase: i,
                id: "caseFree",
                posX: this.tailleCase * col + 1,
                posY: this.tailleCase * row + 1,
                X: col,
                Y: row
            };
                
            col++;

            if (col === this.nbrCaseWidth) {
                col = 0;
                row++;
            }
        }
    }

    randomNumber() {
        return Math.floor(Math.random() * (this.nbrCases - 1));
    }
    
    elsePlacement (id, color, object) {
        let alea = this.randomNumber();
        this.tabCases[alea].id = id;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.tabCases[alea].posX, this.tabCases[alea].posY, this.tailleCase - 2, this.tailleCase - 2);
        this.ctx.strokeStyle = '#001f3f';
        this.ctx.strokeRect(this.tabCases[alea].posX, this.tabCases[alea].posY, this.tailleCase, this.tailleCase); 
        // console.log(`${this.tabCases[alea].X} / ${this.tabCases[alea].Y} : ${id}`);

        if (object) {
            object.position = [this.tabCases[alea].X, this.tabCases[alea].Y]; 
        }
    }
    
    detailsPlacement(nvrVar, idCase, colorCase, object) {
        for (let i = 0; i < nvrVar; i++) {
            if ((this.tabCases[this.randomNumber()].id !== "caseFree") || (this.tabCases[this.randomNumber()].id == "caseObstacle" && "casePlayer" && "caseWeapon")) {
                i--;
            } else {
                this.elsePlacement(idCase, colorCase, object);
            }
        }
    }
}


