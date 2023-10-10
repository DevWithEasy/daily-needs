import { Router } from 'express';
import { getProfile, signin, signup, updateProfile } from '../controllers/userControllers';

const userRouter = Router()

userRouter.post('/signup', signup)
    .post('/signin', signin)
    .get('/:id',getProfile)
    .put('/update/:id',updateProfile)

export default userRouter