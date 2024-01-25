import readlineSync from 'readline-sync';

let calculator = {

};

function read() {
  const a = readlineSync.question('Say random number: ');
  const b = readlineSync.question('Say another random number: ');
}

calculator.read = read

function sum() {
  return this.a + this.b
}

calculator.sum = sum

function mul() {
  return this.a * this.b
}

calculator.read()
console.log(calculator.sum())