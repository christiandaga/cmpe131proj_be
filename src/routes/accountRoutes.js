import express from 'express';

import { validatorNames, validateByApiVersion } from './validators';

import * as account from '../controllers/accountController';

import authorization from '../middleware/authorization';

const router = express.Router();

router.route('/').get(validateByApiVersion(validatorNames.getAccounts), authorization,account.getAccounts);

router.route('/:accountId').get(validateByApiVersion(validatorNames.getAccount), authorization, account.getAccount);
router.route('/:accountId').post(validateByApiVersion(validatorNames.createAccount), authorization, account.createAccount);
router.route('/:accountId').patch(validateByApiVersion(validatorNames.updateAccount), account.updateAccount);
router.route('/:accountId').delete(validateByApiVersion(validatorNames.deleteAccount), account.deleteAccount);

export default router;