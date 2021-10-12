"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = express_1.default();
const Port = process.env.PORT;
app.get("/", (req, res) => {
    let WelcomeMessage = "Hello World";
    console.log(WelcomeMessage);
});
app.listen(Port, () => {
    console.log(`app listening at ${Port}`);
});
//# sourceMappingURL=index.js.map