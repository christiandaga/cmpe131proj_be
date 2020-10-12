import express from 'express';

const app = express();
const port = 8000;
export default app;

export const initExpress = async () => {
    app.get('/', (req, res) => {
        res.send('Hello World!')
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
    });
}
