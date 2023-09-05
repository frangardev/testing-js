const Games = require('./games.service');
// Creamos el fake que nos devolvera la base de datos
const fakeGames = [
  {
    _id: 1,
    name: 'Minecraft',
  },
];

// Suplantamos GamesService
const mongoLibStub = {
  getAll: () => [...fakeGames],
  create: () => {},
};

// Creamos el mock pasa suplantar MongoLib por nuestro mongoLibStub hardcodeado
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => mongoLibStub));

describe('Test for Games Service', () => {
  let service;
  beforeEach(() => {
    service = new Games();
    // Es buena practica borrar cada mock despues de utilizarlo
    jest.clearAllMocks();
  });
  describe('Test for getGames', () => {
    test('return list games', async () => {
      const games = await service.getGames({});
      console.log(games);
      expect(games.length).toEqual(1);
    });
    test('return name first games', async () => {
      const games = await service.getGames({});
      console.log(games);
      expect(games[0].name).toEqual('Minecraft');
    });
  });
});
