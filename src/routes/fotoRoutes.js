import { Router } from 'express';

import fotoController from '../controllers/FotoControllers';

const router = new Router();

router.post('/', fotoController.store);

export default router;
