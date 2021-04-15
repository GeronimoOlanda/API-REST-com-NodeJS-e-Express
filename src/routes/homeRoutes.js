import { Router } from 'express';
import homeController from '../controllers/HomeControllers';

const router = new Router();

router.get('/', homeController.store);

export default router;
