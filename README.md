## Nodejs Sequelize RESTAPI PostgreSQL

This is a REST API using Javascript Technologies and PostgreSQL.

- nodejs
- express
- postgreSQL
- sequelize

## Modeling

This is the basic relationship that we are using in this example

![](./docs/diagram.png)

## Commands to Start the Project

npm install
npm audit fix

//Run on PostgreSQL SSH:
run each by each the commands located inside the file db.sql, which is inside the sql folder

## Run the web application

npm run dev

## Project Structure

```bash
.
├── package.json
├── requests
│   ├── projects.http
│   └── tasks.http
├── sql
│   └── db.sql
└── src
    ├── app.js
    ├── controllers
    │   ├── project.controller.js
    │   └── task.controller.js
    ├── database
    │   └── database.js
    ├── index.js
    ├── models
    │   ├── Project.js
    │   └── Task.js
    └── routes
        ├── projects.routes.js
        └── tasks.routes.js

7 directories, 15 files
```
