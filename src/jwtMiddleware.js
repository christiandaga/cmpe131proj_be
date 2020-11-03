import jwt from 'express-jwt/lib';
import config from 'config';

const jwtConfig = config.get('jwt');

const jwtMiddleware = jwt({ secret: jwtConfig.secret });
export default jwtMiddleware;