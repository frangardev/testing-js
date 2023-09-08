const { generateManyGame } = require('../fakes/game.fake');
const Games = require('./games.service');
// Creamos el fake que nos devolvera la base de datos
// const fakeGames = [
//   {
//     _id: 1,
//     name: 'Minecraft 1.2',
//   },
// ];

// Creamos un spy para hacer pruebas de claja blanca
const mockGetAll = jest.fn();

// Suplantamos GamesService
// const mongoLibStub = {
//   // getAll: () => [...fakeGames],
//   // Lo igualamos a nuestro spia
//   getAll: mockGetAll,
//   create: () => {},
// };

// Creamos el mock pasa suplantar MongoLib por nuestro mongoLibStub hardcodeado
// jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => mongoLibStub));
// Lo igualamos a nuestro spia y hacemos un return unificado
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for Games Service', () => {
  let service;
  beforeEach(() => {
    service = new Games();
    // Es buena practica borrar cada mock despues de utilizarlo
    jest.clearAllMocks();
  });
  describe('Test for getGames', () => {
    test('return list games', async () => {
      // Arrenge
      // Modificamos la respuesta del método getAll, con la función mockResolvedValue
      // mockResolvedValue hace una promesa, si no lo quiere puedes usar mockReturnValue
      const fakeGames = generateManyGame(20);
      mockGetAll.mockResolvedValue(fakeGames);
      // Act
      const games = await service.getGames({});
      console.log(games);
      // Assert
      expect(games.length).toEqual(fakeGames.length);
      // Averiguamos si fue llamado nuestro spy
      expect(mockGetAll).toHaveBeenCalled();
      // Averiguamos cuantas veces fue llamado
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      // saber con que parametros fue llamado
      expect(mockGetAll).toHaveBeenCalledWith('games', {});
    });
    test('return name first games', async () => {
      const fakeGames = generateManyGame(45);
      mockGetAll.mockResolvedValue(fakeGames);
      const games = await service.getGames({});
      console.log(games);
      expect(games[0].name).toEqual(fakeGames[0].name);
    });
  });
});
