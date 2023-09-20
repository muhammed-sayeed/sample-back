# authentication and authorization Node.js API

This repository contains a Node.js API that serves as the backend for the product browsing web app. The API provides routes and functionalities to handle user authentication, product details. It works in conjunction with the product browsing web app, which utilizes JWT (JSON Web Token) refresh and access tokens for user authentication. It is designed specifically for the purpose of supporting the [ product browsing app](https://github.com/muhammed-sayeed/sample-back.git) project.

## Features

The product browsing Node.js API includes the following features:

- User authentication using JWT refresh and access tokens.
- Endpoints to access the product details from database.
- Routes to handle user registration and user login.


## Technologies Used

The Food Delivery Node.js API utilizes the following technologies:

- Node.js: A JavaScript runtime environment for building server-side applications.
- Express.js: A fast and minimalist web application framework for Node.js.
- MongoDB: A popular NoSQL database for storing and retrieving data.
- Mongoose: An elegant MongoDB object modeling for Node.js.
- JWT (JSON Web Token): A secure method for transmitting user authentication information between parties.
- bcrypt: A library for hashing passwords and providing password security.

## Installation

To run the Food Delivery Node.js API locally, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org) installed on your machine.
2. Clone this repository to your local machine using the following command:

```
git clone https://github.com/muhammed-sayeed/sample-back.git
```


3. Navigate to the project's root directory:

```
cd sample-back
```


4. Install the required dependencies using npm:

```
npm install
```


5. Create a `.env` file in the project's root directory and define the following environment variables:

```
database = 'your_mongodb_uri'
PORT = '3000'
tokensecret = 'authsecretkey1'
refreshtokensecret = 'authsecretkey2'
tokenlife = 15m
refreshtokenlife = 60m
```


Replace `authsecretkey1` and `authsecretkey2` with a secure secret key for JWT token encryption and `your_mongodb_uri` with the connection URI for your MongoDB database.

6. Start the Node.js server:
```
npm start
```

7. The API will be running on `http://localhost:3000`, and it is ready to be used by the product browsing web app.
