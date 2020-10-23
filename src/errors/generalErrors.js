/* eslint-disable max-classes-per-file */
import AppError from './AppError';

export class ExistError extends AppError {}

export class NotExistError extends AppError {}

export class DbError extends AppError {}
