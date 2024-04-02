const request = require('supertest');
const express = require('express');
const checkLoginController = require('../../src/controllers/loginController');
const { checkLoginService } = require('../../src/services/service');

// Mock the checkLoginService function
jest.mock('../../src/services/service', () => ({
 checkLoginService: jest.fn(),
}));

// Create an Express app for testing
const app = express();
app.use(express.json()); // for parsing application/json
app.post('/login', checkLoginController);

describe('checkLoginController', () => {
    afterEach(() => {
       jest.clearAllMocks();
    });
   
    it('should return 200 and valid credentials on successful login', async () => {
       // Mock the service to return true
       checkLoginService.mockResolvedValue(true);
   
       const res = await request(app)
         .post('/login')
         .send({ username: 'testuser', password: 'testpass' });
   
       expect(res.status).toBe(200);
       expect(res.body).toBe(true);
    });

});
