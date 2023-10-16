import { Router } from 'express';
import { } from '../controllers/userControllers';
import upload from '../middleware/upload';
import { createProduct } from '../controllers/productControllers';

const productRouter = Router()

productRouter.post('/',upload.single('file'),createProduct )
    .post('/', )
    .get('/',)
    .post('/',)

export default productRouter