import { Router, Request, Response } from 'express';
import { deleteLocalFiles } from '../../../util/util';

//@TODO
// import { requireAuth } from './auth';

import { FilteredImage } from './filteredimage';

const router: Router = Router();

router.get('/filteredimage', async (req: Request, res: Response) => {
    
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

// Show error if path is not specified
router.get('/', async (req: Request, res: Response) => {    
    res.send({
        status: "failed",
        message: `seems like you missed the path you are looking for`
    });
});

export const ImageRouter: Router = router;