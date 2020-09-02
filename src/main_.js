import ClasseUsuario from "./functions_";
import { idade as idadeUsuario } from "./functions_";

ClasseUsuario.info();
console.log(idadeUsuario);

// REST
/*
const usuario = {
  nome: "Daniel",
  idade: "38",
  endereco: {
    cidade: "BH",
    estado: "MG"
  }
};

const { nome, ...resto } = usuario;

console.log(nome);

function soma(...params) {
  console.log(params);
}

console.log(soma(1, 2, 3));

// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

/*
const usuario = {
  nome: "Daniel",
  idade: "38",
  endereco: {
    cidade: "BH",
    estado: "MG"
  }
};

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;

console.log(cidade);

*/
/*const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const teste = () => {
  return "teste";
};

console.log(teste);


const newArr = arr.map(function(item, index) {
  return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
  return item === 2;
});

console.log(find);
*/
