import { IProduct } from "#models/product.model.js";
import productService from "#services/product.service.js";
import { Request, Response } from "express";
import asyncErrorWrapper from "express-async-handler"

export const createProduct = asyncErrorWrapper(async (req: Request, res: Response) => {
    const productData = req.body as IProduct;
    const newProduct = await productService.createProduct(productData);
    res.status(201).json(newProduct);
})

export const getAllProducts = asyncErrorWrapper(async (req: Request, res: Response) => {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
})