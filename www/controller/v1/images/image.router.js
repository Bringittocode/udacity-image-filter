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
const express_1 = require("express");
const util_1 = require("../../../util/util");
//@TODO
// import { requireAuth } from './auth';
const filteredimage_1 = require("./filteredimage");
const router = express_1.Router();
router.get('/filteredimage', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const image_url = req.query.image_url;
    const image = filteredimage_1.FilteredImage(image_url);
    image
        .then(response => {
        res.sendFile(response, function (error) {
            // 4. deletes any files on the server on finish of the response
            util_1.deleteLocalFiles([response]);
        });
    })
        .catch(error => {
        res.status(400).send(error);
    });
}));
// Show error if path is not specified
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send({
        status: "failed",
        message: `seems like you missed the path you are looking for`
    });
}));
exports.ImageRouter = router;
//# sourceMappingURL=image.router.js.map