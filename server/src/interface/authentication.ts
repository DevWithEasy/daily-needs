import { Request } from "express";

interface IAuthRequest extends Request {
    user : string
}

export default IAuthRequest