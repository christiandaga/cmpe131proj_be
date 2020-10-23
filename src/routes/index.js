import express from 'express';

import authRoutes from './authRoutes';
import accountRoutes from './accountRoutes';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/account', accountRoutes);

export default router;