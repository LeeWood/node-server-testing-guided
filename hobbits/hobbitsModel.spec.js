const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

beforeEach(async () => {
  await db('hobbits').truncate();
}); //clears the db before each test is run, no duplicate data or false negatives.

describe('hobbits model', () => {
  describe('insert', () => {
    it('should insert the provided hobbit into table', async () => {
      await Hobbits.insert({name: "Boots"});
      await Hobbits.insert({name: "Cats"});

      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(2);
    })

    it('should return the inserted hibbit', async () => {
      let hobbit = await Hobbits.insert({name: 'Sammy'});
      expect(hobbit.name).toBe('Sammy');
    })
  })
});
