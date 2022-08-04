import { Router, Request, Response } from 'express';

import { ImageRouter } from './images/image.router';

const router: Router = Router();

//Specific CORS for this version
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// Image route
router.use('/image', ImageRouter);

// Show error if path is not specified
router.get('/', async (req: Request, res: Response) => {    
    res.send({
        status: "failed",
        message: `seems like you missed the path you are looking for`
    });
});

export const API_V1_Router: Router = router;