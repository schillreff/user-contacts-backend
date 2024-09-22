import { Router } from 'express';
import { createContactController } from '../../controllers/contact/createContact.controller';
import { deleteContactController } from '../../controllers/contact/deleteContact.controller';
import { listContactsController } from '../../controllers/contact/listContacts.controller';
import { updateContactController } from '../../controllers/contact/updateContact.controller';
import { ensureAuthMiddleware } from '../../middlewares/ensureAuth.middleware';
import { validateSerializerMiddleware } from '../../middlewares/validateSerializer.middleware';
import { contactSerializer } from '../../serializers/contact/contact.serializers';

export const router = Router();

router.post('', ensureAuthMiddleware, validateSerializerMiddleware(contactSerializer), createContactController);
router.get('', ensureAuthMiddleware, listContactsController);
router.patch('/:id', ensureAuthMiddleware, validateSerializerMiddleware(contactSerializer), updateContactController);
router.delete('/:id', ensureAuthMiddleware, deleteContactController);
