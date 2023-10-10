import {Router}  from 'express';
import { signup } from '../controllers/userControllers';

const router = Router()

router.post('/signup',signup)