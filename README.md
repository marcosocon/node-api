# node-api


A RESTful API developed using NodeJS, ExpressJS, and MongoDB.

You've to install:
  - NodeJS
  - ExpressJS
  - MongoDB

### Installation

Node-API requires [Node.js](https://nodejs.org/) to run.

Clone the repository, then:

```sh
$ npm install
```
```sh
$ mongod
```
```sh
$ node server.js
```

Then the server gonna run at:
* http://localhost:3030/api/tvseries

## Routes

* GET :  api/tvseries       - get all the tvseries.
* GET :  api/tvseries/:id   - get one tvserie by id
* POST:  api/tvseries/      - post a tvserie
* PUT :   api/tvseries/:id     - updates a tvserie
* DELETE api/tvseries/:id  - deletes a tvserie by id

Thanks to read the README!
