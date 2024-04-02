// Combine the mocks for both services into a single jest.mock call
jest.mock('../../src/services/service', () => ({
  getMainProjectService: jest.fn(),
  deleteProjectService: jest.fn(),
 }));
 
 
 const { getMainProjectController, deleteAdminController } = require('../../src/controllers/adminController');
 const { getMainProjectService, deleteProjectService } = require('../../src/services/service');
 

 describe('getMainProjectController', () => {
  it('should fetch the main project and send it as response', async () => {
     // Mock the request and response objects
     const mockRequest = {};
     const mockResponse = {
       send: jest.fn(),
     };
 
     // Mock the getMainProjectService to return a main project
     const mockMainProject = {
       title: 'Main Project',
       producer: 'Test Producer',
       video: 'Test Video',
       image: {
         public_id: 'testPublicId',
         url: 'https://example.com/testImage.jpg',
       },
       isMain: true,
     };
     getMainProjectService.mockResolvedValue([mockMainProject]);
 
     // Call the controller function
     await getMainProjectController(mockRequest, mockResponse);
 
     // Assert that the response was called with the expected main project
     expect(mockResponse.send).toHaveBeenCalledWith([mockMainProject]);
  });
 });

 describe('deleteAdminController', () => {
  it('should delete a project and send it as response', async () => {
     // Mock the request and response objects
     const mockRequest = {
       params: {
         title: 'Test Project',
       },
     };
     const mockResponse = {
       json: jest.fn(),
     };
 
     // Mock the deleteProjectService to return a deleted project
     const mockDeletedProject = {
       title: 'Test Project',
       // Add other properties as needed
     };
     deleteProjectService.mockResolvedValue(mockDeletedProject);
 
     // Call the controller function
     await deleteAdminController(mockRequest, mockResponse);
 
     // Assert that the response was called with the expected deleted project
     expect(mockResponse.json).toHaveBeenCalledWith(mockDeletedProject);
  });
 });
 


