import { Router } from 'express';
import { } from '../controllers/userControllers';
import authenticated from '../middleware/authentication';
import { createComment, deleteComment, getComment, updateComment } from '../controllers/commentControllers';

const commentRouter = Router()

commentRouter.post('/',authenticated,createComment )
    .put('/:id', updateComment)
    .delete('/:id',deleteComment)
    .get('/:id',getComment)

export default commentRouter