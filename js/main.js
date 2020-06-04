'use strict';

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

//.some() al menos un elemento del array (callback que comprueba cada elemento del array)

const isAdult = people.some((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 18;
});

console.log({ isAdult }); //{entre llaves} enseña el nombre de la variable y el resultado

//.every() todos los elementos del array cumplen el callback

const allAdult = people.every((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 18;
});
console.log(allAdult);

//.find() se parecce a filter() pero devuelve el primer elemento del array que cumpla la condicion del callback

const comment = comments.find((comment) => {
  if (comment.id === 523423) {
    return true;
  }
});
console.log(comment);

// .findIndex() encuentra donde se encuentra el elemento dentro del array (posición)

const index = comments.findIndex((comment) => comment.id === 123523);
console.log(index);
//es útil encontrar la posición del elemento en el array para luego poder trabajar con ese elemento (ej. eliminar/sustituirlo del arrya);

console.log(comments);
comments.splice(index, 1);
console.log(comments);

//puedes crear un nuevo array
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.table(newComments);
