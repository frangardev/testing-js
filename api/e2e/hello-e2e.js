const request = require('supertest');
const createApp = require('../src/app');

describe('Test fot hello endpoind', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /', () => {
    test('should return "Hello Gamer!"', () =>
      request(app)
        .get('/')
        .expect(200)
        .then((response) => {
          console.log(response);
          expect(response.text).toEqual('Hello Gamers!');
        }));
  });
});
