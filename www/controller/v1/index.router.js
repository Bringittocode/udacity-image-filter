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
const image_router_1 = require("./images/image.router");
const router = express_1.Router();
//Specific CORS for this version
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
// Image route
router.use('/image', image_router_1.ImageRouter);
// Show error if path is not specified
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send({
        status: "failed",
        message: `seems like you missed the path you are looking for`
    });
}));
exports.API_V1_Router = router;
//# sourceMappingURL=index.router.js.map