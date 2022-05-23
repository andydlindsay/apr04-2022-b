const dogs = ['benji', 'cujo', 'dioji'];

const mapped = dogs.map((dog) => {
  return `<h2>Hello there ${dog}</h2>`;
});

console.log(dogs);
console.log(mapped);