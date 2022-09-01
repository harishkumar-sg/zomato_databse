import express from "express";
import { ZomatoController } from "@api/controller/zomato.controller";
import { HttpRequestValidator } from "@middleware/http-request-validator";
import { idValidator, restuarntValidate } from "@api/validator/restaurant.validator";

class ZomatoRoute {
    public router: express.Router = express.Router();
    private zomatoController: ZomatoController;
    private httpRequestValidator: HttpRequestValidator;

    constructor() {
        this.zomatoController = new ZomatoController();
        this.httpRequestValidator = new HttpRequestValidator();
        this.assign();
    }
    private assign() { 
        this.router.post(
          "/",
          this.httpRequestValidator.validate("body", restuarntValidate),
          this.zomatoController.createRestaurant
        );
        this.router.get(
            "/",
            this.zomatoController.getAllitems
        );
        this.router.get(
          "/:id",
          this.httpRequestValidator.validate("params",idValidator ),
          this.zomatoController.getById
        );
        this.router.delete(
          "/:id",
          this.httpRequestValidator.validate("params", idValidator),
          this.zomatoController.deleteRestaurant
        );
        this.router.put(
          "/:id",
          this.httpRequestValidator.validate("params", idValidator),
          this.zomatoController.updateRestaurant
        );
        
        
    }
}

export default new ZomatoRoute().router;
