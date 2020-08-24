const request = require('supertest');
const app = require('../app');

describe('app', () => {
  it('should serve html on index', () => {
    request(app).get('/').expect('Content-Type', '/html/').expect(200);
  });

  it('should rest on users', () => {
    request(app).get('/users').expect('Content-Type', 'application/json').expect(200);
  });

  it('should  serve html on page does not exist', () => {
    request(app).get('/404').expect('Content-Type', '/html/').expect(404);
  });
});
