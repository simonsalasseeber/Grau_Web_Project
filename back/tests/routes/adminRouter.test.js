const request = require('supertest');
const express = require('express');
const { getAdminController, postAdminController, deleteAdminController } = require('../../src/controllers/adminController');
const { projectValidation } = require('../../src/middlewares/validations');
const adminRouter = require('../../src/routes/adminRouter');

// Mock the controllers and middleware
jest.mock('../../src/controllers/adminController');
jest.mock('../../src/middlewares/validations');

// Create an Express app for testing
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/admin', adminRouter);

// Tests

describe('adminRouter', () => {
    it('GET /admin should call getAdminController', async () => {
       // Arrange
       const mockResponse = { send: jest.fn() }; // this is NOT necessary: supertests handles the mocking part
       getAdminController.mockImplementation((req, res) => res.send('Mocked response'));
   
       // Act
       const response = await request(app).get('/admin');
   
       // Assert
       expect(response.status).toBe(200);
       expect(response.text).toBe('Mocked response');
       expect(getAdminController).toHaveBeenCalled();
    });
   });

   it('POST /admin should call postAdminController', async () => {
    // Arrange
    const mockRequestBody = { title: 'Test Project', producer: 'Test Producer', video: 'Test Video' };
    const mockResponse = { json: jest.fn() };
    postAdminController.mockImplementation((req, res) => res.json({ message: 'Project created' }));
   
    // Act
    const response = await request(app).post('/admin').send(mockRequestBody);
   
    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Project created' });
    expect(postAdminController).toHaveBeenCalled();
   });
    
   it('DELETE /admin should call deleteAdminController', async () => {
    // Arrange
    const mockResponse = { json: jest.fn() };
    deleteAdminController.mockImplementation((req, res) => res.json({ message: 'Project deleted' }));
   
    // Act
    const response = await request(app).delete('/admin');
   
    // Assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Project deleted' });
    expect(deleteAdminController).toHaveBeenCalled();
   });
   