# Node.js - exercises REST API
📝 This repository contains NodeJS exercises followed through Udemy course on topic ''NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)''

### NOTE: Make sure to pull projects from [Node.js-exercises_REST_API](https://github.com/merima98/Node.js-exercises_REST_API) and [React.js-exercises](https://github.com/merima98/React.js-exercises) repositories! 
 

### Phase 1 :: Working with REST APIs
  
- Adding configuration file to a project (npm init - for starting configuration)
- Allows users who have not created a project to start the "npm start" project in a well-known way
 
- Installing nodemon package whith command: npm install nodemon --save-dev
	- Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

 
### 1. *RESTARTING THE DEBUGGER AUTOMATICALLY AFTER EDITING APPLICATION*

- To do this step you need to:

1. Go to Debug/Add Configuration in VS Code

2. Go to launch.json and write lines of code:

   - "restart": true
   - "runtimeExecutable": "nodemon"
   - "console": "integratedTerminal"
   
3. In terminal write:

   - npm install nodemon -g (Windows)   
   - sudo npm install nodemon -g (Mac and Linux) 
   

### 2. *INSTALLING Express.js* 

- For installation it is necessary to run the following command through the terminal:

  1. npm install --save express
  
- Do some changes in app.js:

  1. const  express = require('express');

  2. const  app = express();
 
  
### 3. *PARSING INCOMING REQUESTS*
 
- For parsing incoming requests do next steps:
  
  1. In terminal type: npm install --save body parser
  
  2. Add some changes in app.js:
     
	 - const bodyParser = require('body-parser');

     - app.use(bodyParser.json());
	 

### 4. *WORKING WITH ENVIRONMENT VARIABLES*

- Write *npm i custom-env* in the terminal. 
- For including write *const env = require('custom-env').env();*

### 5. *ADDING SERVER SIDE VALIDATION*

- Write *npm install --save express-validator* in the terminal. This package helps in implementing validation.

### 6. *WORKING WITH THE DATABASE*

- Write: *npm install --save mongoose* in the terminal to be able working with the database.

### 6. *UPLOADING IMAGES*

- Write *npm install --save uuid * and *npm install --save multer* in the terminal. 
- Add *cb(null, uuidv4() + '-' + file.originalname);* in app.js and include *const { v4: uuidv4 } = require('uuid');* also in app.js. //WindowsUsers
- Add *const imageUrl = req.file.path.replace("\\", "/");*  //WindowsUsers

### 6. *WORKING WITH AUTHENTICATION*

- Write *npm install --save bcryptjs * in the terminal. This helps to hash password in the secure way.
- Write *npm install --save jsonwebtoken * in the terminal. This enables working with Json Web Token.

### 7. *WORKING WITH WEBSOCKETD & Socket.io*

- Write *npm install --save socket.io* in the terminal. Enables implemmenting web sockets - protocol that allows user to push data from the server to connected client.


  





	 
 
	

 



	 
  
  
