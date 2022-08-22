import { Request, Response, NextFunction } from "express";
import { ResponseParser } from "@util/response-parser";
import Joi from "@hapi/joi";

export class MyHttpRequestValidator {
    private responseParser: ResponseParser;

    constructor() {
        this.responseParser = new ResponseParser();
    }
    public myValidate(
        type: "body" | "params" | "query",
        schema: Joi.ObjectSchema<unknown>
    ){
        return (req: Request, res: Response, next: NextFunction): void =>{
            const data = req[type];
            const { error } = schema.validate(data)
            console.log(error);
            if (error === undefined) {
                next();
                return;
            }
            ///
            //this.handleValidationError(error);
            this.responseParser.send(res);
            
        }
    }
}