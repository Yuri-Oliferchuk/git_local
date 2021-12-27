const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';``
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
  }
  //Print what happened at position of player;
  whatHappened(position) {
    switch (position){
        case 'hole':
            console.log('You lose! You are in the hole!');
            break;
        case 'finish':
          console.log('You WIN!!! You are find the hat!');
          break;
        case 'out':
          console.log('You lose!!! Out of field.');
          break;
      }
  }
  //Checking step. If there hole - game will finish
  checkStatus(hPos, vPos) {
    try {
        switch(this.field[vPos][hPos]) {
        case hole:
            return 'hole';
        case fieldCharacter:
            return 'go';
        case hat:
            return 'finish';
        case pathCharacter:
            return 'go';
        }
    } catch {return 'out'};

    if ((hPos < 0)||(hPos >= (this.field[vPos].length))) {
       return 'out';
    }
  }
  //Moving on the field
  move() {
      let hPos = 0;
      let vPos = 0;
      let nextStep;
      while ((this.checkStatus(hPos, vPos) === 'go')&&(nextStep != 'stop')) {
        console.clear();
        this.field[vPos][hPos] = pathCharacter;
        this.print();
        nextStep = prompt('What your next step: ');
        switch (nextStep){
            case '2':
                vPos ++;
                break;
            case '8':
                vPos --;
                break;
            case '4':
                hPos --;
                break;
            case '6':
                hPos ++;
                break;
        }
      this.whatHappened(this.checkStatus(hPos, vPos));
    };
  }
  //Printing game field
  print(){
    for(let i=0; i<this.field.length; i++){
      console.log(this.field[i].join(""));
    }
   }
  //Generating new field
  static fieldGenerator(horizontal, vertical, percent){
    let newField = new Array(vertical);
    for (var i = 0; i < newField.length; i++) {
        newField[i] = new Array(horizontal);
      }

    for (let i=0; i<vertical; i++){
      for (let j=0; j<horizontal; j++){
          newField[i][j] = (((Math.floor(Math.random()*100)) >= percent) ? fieldCharacter : hole)  
      }
    }
    // now we can add a hat
    newField[Math.floor(Math.random()*vertical)][Math.floor(Math.random()*horizontal)] = hat;

    return newField;
    }
}

let feildMap = Field.fieldGenerator(40,20,10);

const myField = new Field(feildMap);

myField.move();