const MongoLib = require('../lib/mongo.lib');

class GamesService {
  constructor() {
    this.collection = 'games';
    this.mongoDB = new MongoLib();
  }

  getGames(query) {
    return this.mongoDB.getAll(this.collection, query);
  }

  createGame(newGame) {
    return this.mongoDB.create(this.collection, newGame);
  }
}

module.exports = GamesService;
