import { createProduct, getAllProducts } from "#controllers/product.controller.js";
import express from "express";

const router = express.Router()

router.get("/get-all-product", getAllProducts);
router.post("/create-product", createProduct);

export default router