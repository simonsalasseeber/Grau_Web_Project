const request = require('supertest');
const express = require('express');
const mainRouter = require('../../src/routes/mainRouter');

// Mock the controller module
jest.mock('../../src/controllers/mainController', () => ({
 mainController: jest.fn(),
}));

// Import the mocked controller
const { mainController } = require('../../src/controllers/mainController');

// Mock the getProjectsService function
jest.mock('../../src/services/service', () => ({
    getProjectsService: jest.fn(),
   }));
   
// Import the mocked service
const { getProjectsService } = require('../../src/services/service');

// Create an Express app for testing
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/', mainRouter);

describe("mainRouter", () => {
    it.only("Get '/' should call mainController", async () => { 
       // Mock the implementation of getProjectsService
       getProjectsService.mockResolvedValue([
         { id: 1, title: 'Project 1', producer: 'Producer 1' },
         { id: 2, title: 'Project 2', producer: 'Producer 2' },
       ]);
   
       // Mock the implementation of mainController
       mainController.mockImplementation((req, res) => {
         res.send("Mocked response");
       });
   
       // Make the request
       const response = await request(app).get('/');
   
       // Assertions
       expect(response.status).toBe(200);
       expect(response.text).toBe('Mocked response');
       expect(mainController).toHaveBeenCalled();
    });
   });
