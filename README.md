# eleMental

A simple online game created with Phaser.js, vanilla Javascript and Node.js


To run Elemental:

- Clone repo to local machine.

- run npm install

- run the game using your IDE local server

This app uses an external PostGres database and Express.js server to store highscores. The app will run without but for the highscores section to work, you will need to download and clone the node server from https://github.com/AngusGMorrison/eleMental-api.

Once this is done, follow these instructions to set up the postgres database:

- Create a new PostGres DB with the name “eleMental-db”

- in config/config.js configure the development DB username and password to be your PostGres superuser, or create a new user with the defaults provided

- run npm install to install the node server

- Migrate the database with sequelize db:migrate

- Seed the database with sequelize db:seed:all

- Run the server with npm start

