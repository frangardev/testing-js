const Games = require('./games.service');

describe('Test for Games Service', () => {
  let service;
  beforeEach(() => {
    service = new Games();
  });
  describe('Test for getGames', () => {
    test('return list games', async () => {
      const games = await service.getGames({});
      console.log(games);
      expect(games.length).toEqual(2);
    });
  });
});
