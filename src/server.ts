import express from 'express';

import { API_V1_Router } from './controller/v1/index.router';

import bodyParser from 'body-parser';

(async () => {

    const app = express();
    const port = process.env.PORT || 8080; // default port to listen

    app.use(bodyParser.json());

    //CORS Should be restricted
    //General CORS for all API version
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8100");
        next();
    });

    app.use('/api/v1/', API_V1_Router)

    // Root Endpoint
    // Displays a simple message to the user
    app.get("/", async (req, res) => {
        res.send("current api version is V1 you can try /api/v1/path");
    });


    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
})();