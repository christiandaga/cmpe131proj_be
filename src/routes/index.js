import express from 'express';

import authRoutes from './authRoutes';
import accountRoutes from './accountRoutes';
import transactionRoutes from './transactionRoutes';

const router = express.Router();


router.use('/auth', authRoutes);
router.use('/account', accountRoutes);
router.use('/transaction', transactionRoutes);

export default router;