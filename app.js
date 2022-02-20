const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => res.send('<h2> Hello World! </h2>'));

const PORT = process.env.PORT || 4000
app.listen(PORT, async () => {
    try {
        console.log('Connection has been connect in database and server port: ' + PORT);
    } catch (error) {
        console.error('Unable to connect to the database: ', error.message);
    }
});
