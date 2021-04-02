import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/logginRequired';

const router = new Router();

// não deveria exister, porém é bom para aprendizado
// router.get('/', UserController.index); // lista usuario
// router.get('/:id', UserController.show);// lista usuario

// utilizado em aplicações reais
router.post('/', UserController.store);
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
