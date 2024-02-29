// tests/controllers/adminController.test.js

const { postAdminController } = require('../../src/controllers/adminController');
const { addProjectService } = require('../../src/services/service');

// Create the Mock function in order to replicate the addProjectService 
jest.mock('../../src/services/service', () => ({
 addProjectService: jest.fn(),
}));

describe('postAdminController', () => {
 it('should create a project and return it', async () => {
    // Mock the request and response objects
    const mockRequest = {
      body: {
        title: 'Test Project',
        producer: 'Test Producer',
        video: 'Test Video',
      },
    };
    const mockResponse = {
      json: jest.fn(),
    };

    // Mock the addProjectService to return a project
    addProjectService.mockResolvedValue({
      id: 1,
      title: 'Test Project',
      producer: 'Test Producer',
      video: 'Test Video',
    });

    // Call the controller function
    await postAdminController(mockRequest, mockResponse);

    // Assert that the response was called with the expected project
    expect(mockResponse.json).toHaveBeenCalledWith({
      id: 1,
      title: 'Test Project',
      producer: 'Test Producer',
      video: 'Test Video',
    });
 });

 it('should handle errors and return an error message', async () => {
    // Mock the request and response objects
    const mockRequest = {
      body: {
        title: 'Test Project',
        producer: 'Test Producer',
        video: 'Test Video',
      },
    };
    const mockResponse = {
      json: jest.fn(),
    };

    // Mock the addProjectService to throw an error
    addProjectService.mockRejectedValue(new Error('Database error'));

    // Call the controller function
    await postAdminController(mockRequest, mockResponse);

    // Assert that the response was called with the expected error message
    expect(mockResponse.json).toHaveBeenCalledWith({
      message: 'Database error',
    });
 });
});
