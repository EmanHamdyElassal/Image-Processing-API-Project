"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 8000;
var routes_1 = __importDefault(require("./routes"));
app.use('/api', routes_1.default);
app.listen(port, function () {
    console.log("server is ready for run ".concat(port));
});
exports.default = app;
