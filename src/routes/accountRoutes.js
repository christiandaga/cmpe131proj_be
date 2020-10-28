import express from 'express';

import { validatorNames, validateByApiVersion } from './validators';

import * as account from '../controllers/accountController';

const router = express.Router();

router.route('/').get(validateByApiVersion(validatorNames.getAccounts), account.getAccounts);

router.route('/:accountId').get(validateByApiVersion(validatorNames.getAccount), account.getAccount);
router.route('/:accountId').post(validateByApiVersion(validatorNames.createAccount), account.createAccount);
router.route('/:accountId').patch(validateByApiVersion(validatorNames.updateAccount), account.updateAccount);
router.route('/:accountId').delete(validateByApiVersion(validatorNames.deleteAccount), account.deleteAccount);

export default router;