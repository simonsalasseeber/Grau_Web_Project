**Project title**: Grau music
**Video**: (URL)
**Description**: 

Struggling to decide what to make for the final project of this majestuous course, a musician friend of mine told me that he wanted to publish his works on a webpage. Capturing the opportunity, I decided to leverage the skills learned in CS50x with the ones acquired in the "SoyHenry" Bootcamp and accepted the challenge. 

Conscious about what I knew and not knew, I decided to trust myself and to learn along the way the best way to solve the problem that I encountered, and I truly believe I have made it.

**The project has the following structure**:

**Front-End**:

Here, the project comprises the node_modules dependencies alongside the classical "src" folder. Adhering to modularization best practices, I structured the codebase into Components, Views, and Assets. Within the Components directory, the logic is concentrated, embracing the creation of essential elements such as navigation bars, Cards, and other components familiar to React developers. In the Views directory, where the user interface (UI) elements reside, the main task achieved is the presentation of the project's content to the users. This separation of concerns ensures clarity and maintainability within the project structure. Lastly, the Assets directory houses resources essential to the project's visual and textual elements. This includes typography preferences specified by my friend, as well as images of logos and vectors contributing to the overall aesthetic appeal.

**Back-End**: 

Here we also find the node_modules and the src folder. While various design strategies could have been employed, I opted for a functional approach. This involved meticulously organizing the codebase by creating specific folders for different components: controllers, routes, middlewares, utils, models, services, and assets. This deliberate structuring prioritizes clarity and organization within the project.

Sensitive variables were securely stored in an external .env file, adhering to best practices standards for maintaining confidentiality and security. Additionally, comprehensive testing procedures were implemented to ensure the system's functionality remains robust and reliable. These measures collectively contribute to the project's stability and maintainability, fostering a solid foundation for future development and enhancements.

**Biggest challenge**: 

If I had to pick the biggest challenge of the project, it would undoubtedly be setting up the Admin server. My friend intends to use this page indefinitely, necessitating the ability to upload new projects, delete old ones, and designate one for the "Main" section. Initially, I felt overwhelmed by the huge task, pondering, "How on earth am I going to code a functionality that a) receives an image, a video URL, a title, and a producer; b) processes and uploads all that to the web; c) enables deletion and addition of projects at will; d) includes encoded logic accessible only to the admin?"

Through diligent research, I discovered Cloudinary, a cloud service for media management that integrates with Node.js projects. After diving into their documentation, I started to investigate on how to tackle the challenge. Following numerous iterations, uncountable YouTube videos, and lots of substack pages, I successfully implemented an upload feature in the backend, which receives images and posts them to the Cloudinary platform. This upload functionality is invoked by both the create project service and the delete project service, enabling efficient management of project content. Additionally, I developed a form on the /admin route to facilitate image submission, which triggers a post request to the backend and executes the aforementioned logic.

In summary, thanks to internet resources, combined with lots of patience and dedication, I now firmly believe that everything is possible.

**The project is built with the following technologies**:

**Frontend**:

Vite (build tool for modern web applications)
React (JavaScript library for building user interfaces)
HTML (markup language for creating web pages)
CSS (style sheet language for styling web pages)

**Backend**:

Node.js (JavaScript runtime environment for server-side development)
Express (web application framework for Node.js)
Mongoose (Object Data Modeling library for MongoDB and Node.js)
Bcrypt (library for hashing passwords securely)

**Cloud Services**:

Cloudinary (cloud-based image and video management service)

**Testing**: 

Jest (test runner for JavaScript) 


**Final notes**: David, Brian, Doug: I truly appreciate what you do, it has certainly changed my life. Can't believe cs50 is free. God bless the internet, the education, and the passion for learning!