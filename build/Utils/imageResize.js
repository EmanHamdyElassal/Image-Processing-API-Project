"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newPath = exports.resizeImage = void 0;
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var newPath = function (originalimage, height, width) {
    var resizedpath = "images/resizedImages/".concat(originalimage).concat(width, "x").concat(height, ".jpg");
    return resizedpath;
};
exports.newPath = newPath;
var resizeImage = function (height, width, originalimage) {
    var imageoriginalpath = "images/original/".concat(originalimage, ".jpg");
    return (0, sharp_1.default)(path_1.default.resolve(imageoriginalpath))
        .resize({
        width: width,
        height: height,
        fit: sharp_1.default.fit.cover,
    })
        .toBuffer();
};
exports.resizeImage = resizeImage;
