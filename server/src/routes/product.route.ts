import { createProduct, getAllProducts } from "#controllers/product.controller.js";
import { productSchemaValidate } from "#data/request.schemas.js";
import authenticateUser from "#middleware/authenticate-user.js";
import validateRequest from "#middleware/validate.request.js";
import express from "express";


const router = express.Router()

router.get("/get-all-product", getAllProducts);
router.post("/create-product",authenticateUser, validateRequest(productSchemaValidate), createProduct);

export default router