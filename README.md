<h1>Music API</h1>

This is a microservice API for handling operations on tracks and playlists. It is built using Node.js and TypeScript, and leverages the Express.js framework for handling RESTful API routes. It uses Mongodb as the database to persist data.


<h2>Installation</h2>

1. Clone the repository: `https://github.com/smangaliso/musicAPI.git`

2. Install dependencies: `npm install`

3. create a local database using mongodb name the database `musicapi`

4. Start the application: `npm start`

<h2>Usage</h2>

<h3>Routes</h3>

The API exposes the following routes:

Tracks

* `GET: localhost:3000/tracks`

* `POST: localhost:3000/tracks`

* `GET: localhost:3000/tracks/id`

* `PUT: localhost:3000/tracks/id`

* `DELETE: localhost:3000/tracks/id`



Playlists

* `GET: localhost:3000/playlists`

* `POST: localhost:3000/playlist`

* `GET: localhost:3000/playlist/id`

* `PUT: localhost:3000/playlists/id`

* `DELETE: localhost:3000/playlist/id`

<h3>Validation</h3>

The API performs basic validation on all requests to ensure that the data is in the correct format and that required fields are present.

<h3>Error handling</h3>

The API returns appropriate HTTP error codes and error messages for all possible errors. It also logs errors to the console for debugging purposes.

<h2>Postman collection</h2>

A Postman collection is included in the repository to demonstrate how to use the API routes. Please import the Music API.postman_collection.json file into Postman to use it.


