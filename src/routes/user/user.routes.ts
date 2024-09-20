import { Router } from 'express';
import { createUserController } from '../../controllers/user/createUser.controller';
import { deleteUserController } from '../../controllers/user/deleteUser.controller';
import { listUserController } from '../../controllers/user/listUser.controller';
import { updateUserController } from '../../controllers/user/updateUser.controller';
import { ensureAuthMiddleware } from '../../middlewares/ensureAuth.middleware';
import { validateSerializerMiddleware } from '../../middlewares/validateSerializer.middleware';
import { userSerializer } from '../../serializers/user.serializers';

export const router = Router();

router.post('', validateSerializerMiddleware(userSerializer), createUserController);
router.get('', ensureAuthMiddleware, listUserController);
router.patch('', ensureAuthMiddleware, validateSerializerMiddleware(userSerializer), updateUserController);
router.delete('', ensureAuthMiddleware, deleteUserController);
