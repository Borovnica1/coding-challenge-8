class Element {
  constructor (name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
} 

class Park extends Element {
  constructor(name, buildYear, trees, area) {
    super(name, buildYear);
    this.trees = trees;
    this.area = area;
  }

  treeDensity() {
    console.log(`${this.name} has a tree density of ${this.trees / this.area} trees per square km`);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
  }
}

let parks = [new Park('Karadjordjev park', 1359,205, 0.3),
             new Park('Tas', 624, 3720, 0.5),
             new Park('Ada', 1873, 1834, 0.6)];

let streets = [new Street('Bulevar Oslobodjenja', 1959, 0.3, 1),
             new Street('Bulevar Aleksandra', 124, 2.7, 4),
             new Street('Kneza Milosa', 1822, 0.8),
             new Street('Vojvode Stepe', 1522, 2.4, 5)];

function calc(arr) {
  const sum = arr.reduce((a, b) => a + b);
  return [sum, sum / arr.length]
}

function parksReport(par) {
  console.log(`///// PARKS REPORT!!`);
  par.forEach(element => element.treeDensity());

  const ages = par.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${par.length} parks have an average of ${avgAge} years.`);

  const parksOver1000 = par.filter(el => el.trees > 1000);
  console.log(`${parksOver1000[0].name} has more than 1000 trees`);
}

function streetsReport(str) {
  console.log(`///// STREETS REPORT!!`);

  const [totalLength, avgLength] = calc(str.map(el => el.length));
  console.log(`Our ${str.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

  str.forEach(el => el.classifyStreet());
}

parksReport(parks);
streetsReport(streets)