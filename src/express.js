import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

const app = express();
const port = 8000;
export default app;

export const initExpress = async () => {
    app.use(bodyParser.json({ limit: '100mb' }));
    app.use(bodyParser.raw());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/api', routes);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
    });
}
