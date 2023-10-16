import { Router } from 'express';
import { } from '../controllers/userControllers';
import upload from '../middleware/upload';
import { createProduct, deleteProduct, findProduct, getAllProduct, getProductByCategory, getSingleProduct, updateProduct } from '../controllers/productControllers';
import authenticated from '../middleware/authentication';

const productRouter = Router()

productRouter.post('/', upload.single('file'), createProduct)
    .put('/:id', upload.single('file'), updateProduct)
    .delete('/:id', deleteProduct)
    .get('/:id', getSingleProduct)
    .get('/', getAllProduct)
    .get('/category/:id', getProductByCategory)
    .get('/find', findProduct)
    .post('/category',)
    .post('/category',)
    .post('/category',)
    .post('/category',)

export default productRouter