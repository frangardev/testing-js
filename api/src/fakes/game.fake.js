const { faker } = require('@faker-js/faker');

const generateOneGame = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyGame = (size) => {
  const limit = size ?? 10; // Si no me envian el tamaño genero 10 libros.
  const fakeGames = []; // Colocando los fakeBooks generados.
  for (let index = 0; index < limit; index += 1) {
    fakeGames.push(generateOneGame());
  }
  return [...fakeGames];
};

module.exports = { generateOneGame, generateManyGame };
