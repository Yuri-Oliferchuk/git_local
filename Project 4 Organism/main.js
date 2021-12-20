// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Factory function for create new objects
const pAequorFactory = (num, dnaArray) => {
  return {
    specimenNum: num,
    dna: dnaArray,
    mutate() {      // mutate random base in organism
      let mutateFrom = returnRandBase();
      let mutateTo = returnRandBase();
      if (mutateFrom === mutateTo) {
        do {
          mutateTo = returnRandBase();
        } while (mutateFrom === mutateTo)
      };
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === mutateFrom) {
          this.dna[i] = mutateTo;
        }
      }
      console.log('Mutation: ' + mutateFrom + ' => ' + mutateTo);
      return this.dna;
      //this.dna[0] = '1';
    },
    compareDNA(pAequor) {     // compare normal DNA with mutation
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          counter++;
        }
      }
      let result = Math.round(counter/this.dna.length*100*100)/100;
      console.log(`specimen ${this.specimenNum} and specimen ${this.specimenNum}-mutated have ${result}% DNA in common`)
    },
    willLikelySurvive() {     // check if organism can survive
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if ((this.dna[i] === 'C')||(this.dna[i] === 'G')) {
          counter++;
        }
      }
      return (Math.round(counter/this.dna.length*100*100)/100 >= 60)?true : false;
    }
  }
};

let aquaObj = []; // create object for survivaling organisms
let dnaCounter = 1;
let counter = 1;

do {    // create 30 survivaling organisms
  let TempAqua = pAequorFactory(counter, mockUpStrand());
  if (TempAqua.willLikelySurvive()) {
    aquaObj.push(TempAqua);
    dnaCounter++;
  }
  counter++;
} while (dnaCounter <= 30);

// print DNA base of all survivalin organisms
for (let list of aquaObj) {
  console.log(list.specimenNum + ' - ' + list.dna);
};