import express from 'express';

import * as auth from '../controllers/authController';

const router = express.Router();

router.route('/login').post(auth.login);
//router.route('/register').post(auth.register);

export default router;