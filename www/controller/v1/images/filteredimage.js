"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../../util/util");
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
function FilteredImage(image_url) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            // 1. validate the image_url query
            const testUrl = /^http.+(png|jpeg|jpg)$/.test(image_url);
            if (testUrl) {
                // 2. call filterImageFromURL(image_url) to filter the image
                util_1.filterImageFromURL(image_url)
                    .then(response => {
                    // 3. send the resulting file in the response
                    resolve(response);
                })
                    .catch(error => {
                    reject({
                        status: 'failed',
                        message: error
                    });
                });
            }
            else {
                reject({
                    status: "failed",
                    message: "Image URL parameter is missing or is not valid"
                });
            }
        });
    });
}
exports.FilteredImage = FilteredImage;
//# sourceMappingURL=filteredimage.js.map