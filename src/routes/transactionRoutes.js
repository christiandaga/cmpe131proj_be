import express from 'express';

import { validatorNames, validateByApiVersion } from './validators';

import * as trans from '../controllers/transactionController';

const router = express.Router();

router.route('/').post(trans.addTransaction);

router.route('/:accountId').get(trans.getTransactions);

export default router;