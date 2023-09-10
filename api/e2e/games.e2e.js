const mockGetAll = jest.fn();
const request = require('supertest');

const { generateManyGame } = require('../src/fakes/game.fake');

const createApp = require('../src/app');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test fot Games', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/games', () => {
    test('should return list games', () => {
      // Arrange
      const fakeGames = generateManyGame(4);
      mockGetAll.mockResolvedValue(fakeGames);
      // Act
      return request(app)
        .get('/api/v1/games')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(fakeGames.length);
        });
    });
  });
});
