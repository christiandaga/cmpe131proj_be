import express from 'express';

import { validatorNames, validateByApiVersion } from './validators';

import * as auth from '../controllers/authController';

import authorization from '../middleware/authorization';

const router = express.Router();

router.route('/login').post(validateByApiVersion(validatorNames.login), authorization, auth.login);
router.route('/register').post(validateByApiVersion(validatorNames.register), auth.register);

export default router;