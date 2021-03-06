require("dotenv").config({ path: "variables.env" });

const createServer = require("./createServer");
const db = require("./db");
const server = createServer();

// TODO use Express Middleware to handle cookies (JWT)
// TODO use Express Middleware to populate current user

server.start(
    {
        cors: {
            credential: true,
            origin: process.env.FRONTEND_URL,
        },
    },
    (deets) => {
        console.log(
            `Server is now running on port http://localhost:${deets.port}`,
        );
    },
);
