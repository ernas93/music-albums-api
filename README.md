## Music Album API

This is a node.js project built with express which contains the whole API for the Music Albums Application.

## Prerequisites

- Install Node.js
- Install mongoDB

## Installation

1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the necessary dependencies.
4. Setup mongoDB database and tables.
5. Add mongo collection URI to .env

## Technologies Used

- Node.js
- Express
- Mongoose (mongoDB)

# Defining endpoints

**1. return all albums READ
endpoint:**

/albums

**2. allow to add new album to database CREATE
endpoint:**

/album

**3. allow to edit existing album UPDATE
endpoint:**

/albums/:id

**4. allow to add a rating to an album CREATE
endpoint:**

/albums/:id/rating

**5. allow to remove an album from the database DELETE
endpoint:**

/albums/:id

## Improvements

- Unit tests with mocha library and supertest library. For example to mock calling the GET request to albums. Checking success and failure responses.
- Add users accounts with CREATE (POST) new user to DB with jwt and hashed passwords.
- Have more information about the music album and the artist in DB.
- Have users collection in DB, as well as artists collection. Albums would use artist ID, instead of only artist name.
- Ratings would have specific user ID.
- Refactor logic for endpoints to a controller, dedicated to albums, artist and users.
