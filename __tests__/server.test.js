'use strict'

const supertest = require('supertest');
const myServer = require('../src/server.js');
const mockRequest = supertest(myServer);

describe('MY SERVER', () => {

  it('should return a query string from the user with a "name" property', () => {
    return mockRequest.get('')
      .then(results => {
        expect(response.body).toBeDefined();
      })
  })

  it('should force a 500 error if things break on the server', () => {

  })
})
