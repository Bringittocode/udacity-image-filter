import express from 'express';

import { Request, Response } from 'express';

import { requireAuth } from './controller/images/auth';

import { FilteredImage } from './controller/images/filteredimage';

import { deleteLocalFiles } from './util/util';

import bodyParser from 'body-parser';

(async () => {

    const app = express();
    const port = process.env.PORT || 8080; // default port to listen

    app.use(bodyParser.json());

    //CORS Should be restricted
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:8100");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });

    app.get('/filteredimage', requireAuth, async (req: Request, res: Response) => {
        
        const image_url: string = req.query.image_url;

        const image = FilteredImage(image_url);

        image
        .then(response=>{
            res.sendFile(response, function(error){
                // 4. deletes any files on the server on finish of the response
                deleteLocalFiles([response]);
            });
        })
        .catch(error=>{
            res.status(400).send(error)
        })
    });

    // Root Endpoint
    // Displays a simple message to the user
    app.get("/", async (req, res) => {
        res.send("Add this path /filteredimage?image_url=IMAGE_URL");
    });


    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
})();