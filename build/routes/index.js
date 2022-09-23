"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var APIimages_1 = __importDefault(require("./api/APIimages"));
var routes = express_1.default.Router();
routes.get('/', function (request, response) {
    response.send('Image Processing API');
});
routes.use('/images', APIimages_1.default);
exports.default = routes;
