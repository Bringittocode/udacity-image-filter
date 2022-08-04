import { filterImageFromURL } from '../../../util/util';

// @TODO1 IMPLEMENT A RESTFUL ENDPOINT
// GET /filteredimage?image_url={{URL}}
// endpoint to filter an image from a public url.
// IT SHOULD
//    1. validate the image_url query
//    2. call filterImageFromURL(image_url) to filter the image
//    3. send the resulting file in the response
//    4. deletes any files on the server on finish of the response
// QUERY PARAMATERS
//    image_url: URL of a publicly accessible image
// RETURNS
//   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

/**************************************************************************** */
//! END @TODO1
export async function FilteredImage(image_url:string): Promise<string>{
    return new Promise((resolve, reject) => {
        // 1. validate the image_url query
        const testUrl: boolean = /^http.+(png|jpeg|jpg)$/.test(image_url);
        if(testUrl){
            // 2. call filterImageFromURL(image_url) to filter the image
            filterImageFromURL(image_url)
            .then(response=>{
                // 3. send the resulting file in the response
                resolve(response);                
            })
            .catch(error=>{
                reject({
                    status: 'failed',
                    message: error
                })
            })
        }

        else{
            reject({
                status: "failed",
                message: "Image URL parameter is missing or is not valid"
            })
        }
        
    });
}