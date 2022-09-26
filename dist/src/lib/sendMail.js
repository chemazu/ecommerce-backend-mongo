"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = require("dotenv");
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: "chukwuemekachemazu@gmail.com",
        pass: "RATface_123!"
    },
});
(0, dotenv_1.config)();
console.log(process.env.NODEMAILER_USER);
// const mailOptions = {
//   from: "The Idea project",
//   to: " ",
//   subject: "My first Email!!!",
//   text: "This is my first email. I am so excited!",
// };
const sendMail = (mailTemplate) => __awaiter(void 0, void 0, void 0, function* () {
    const { from, to, subject, text } = mailTemplate;
    const mailOptions = {
        from,
        to,
        subject,
        text,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email sent: " + info.response);
        }
    }),
        (error, info) => {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Email sent: " + info.response);
            }
        };
});
exports.default = sendMail;
//# sourceMappingURL=sendMail.js.map