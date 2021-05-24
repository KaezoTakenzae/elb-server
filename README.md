# Initial Set Up
The project relies on a local MongoDB instance at port 27017, connecting to the table elogbooks - this can be change in the connect function in db/index.js

Installing MongoDB: [https://docs.mongodb.com/manual/administration/install-community/](https://docs.mongodb.com/manual/administration/install-community/)

It is recommended you setup a few properties via Postman as these will be needed before you can create a job.

Post an Object with a name prop { name } to [http://localhost:3000/api/property](http://localhost:3000/api/property) to get started

## Scripts

In the project directory, you can run:

### `nodemon index.js`

Starts the server, with hot reloading enabled
