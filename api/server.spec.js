const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
  it('should set testing environment', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
  
  
  describe('GET/', () => { //you can also nest describe() !
    //http status code,
    it('should return 200', async () => {
      
      return request(server).get('/')
        .then(res => {
          expect(res.status).toBe(200);
        });
      //OR (a bit cleaner...)
      //const res = await request(server).get('/');
      //expect(res.status).toBe(200);  
    });
    //should return in JSON format 
    it('should return JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    })
    //shape of res.
    it('should return { "api": "up" }', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ "api": "up" });
    })
  });

});