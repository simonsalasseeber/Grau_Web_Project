// tests/controllers/mainController.test.js

const mainController = require('../../src/controllers/mainController');
const { getProjectsService } = require('../../src/services/service');

// Mock the getProjectsService function
jest.mock('../../src/services/service', () => ({
 getProjectsService: jest.fn(),
}));

describe('mainController', () => {
 it('should fetch all projects and send them as response', async () => {
    // Mock the request and response objects
    const mockRequest = {};
    const mockResponse = {
      send: jest.fn(),
    };

    // Mock the getProjectsService to return a list of projects
    getProjectsService.mockResolvedValue([
      { id: 1, title: 'Project 1', producer: 'Producer 1' },
      { id: 2, title: 'Project 2', producer: 'Producer 2' },
    ]);

    // Call the controller function
    await mainController(mockRequest, mockResponse);

    // Assert that the response was called with the expected projects
    expect(mockResponse.send).toHaveBeenCalledWith([
      { id: 1, title: 'Project 1', producer: 'Producer 1' },
      { id: 2, title: 'Project 2', producer: 'Producer 2' },
    ]);
 });

 it('should handle errors and return an error message', async () => {
    // Mock the request and response objects
    const mockRequest = {};
    const mockResponse = {
      json: jest.fn(),
    };

    // Mock the getProjectsService to throw an error
    getProjectsService.mockRejectedValue(new Error('Database error'));

    // Call the controller function
    await mainController(mockRequest, mockResponse);

    // Assert that the response was called with the expected error message
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Database error',
    });
 });
});
