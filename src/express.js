const express = require('express');

const app = express();
const PORT = process.env.PORT || 2000;
const connectDB = require("./db/db");

export default app;

export const initExpress = async () => {

    //connect to DB test
    connectDB();
   

    app.get('/', (req, res) => {
        res.send('Testing Git on jd branch')
    });

    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}!`)
    });


}
