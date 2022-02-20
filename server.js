const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

// const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerUI = require('swagger-ui-express');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//config upload
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + name);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

app.use(multer({
    storage: fileStorage,
    fileFilter: fileFilter
}).single('image'));

//load routing
const UserRouting = require('./routes/user');
const JobRouting = require('./routes/job');
const ProdukRouting = require('./routes/product');
const KategoriRouting = require('./routes/category');
const notRouting = require('./routes/notefound');

//routing-url
app.use('/', notRouting);
app.use('/api/user/', UserRouting);
app.use('/api/job/', JobRouting);
app.use('/api/kategori/', KategoriRouting);
app.use('/api/produk/', ProdukRouting);

app.use('/images', express.static(path.join("images")));


//define swagger
// const swaggerOptions = {
//     swaggerDefinition: {
//       info: {
//         title: "API LDM",
//         version: '1.0.0',
//       },
//       host: "localhost:5000",
//       basePath: "/api",
//     },
//     components: {
//         securitySchemes: {
//           jwt: {
//             type: "http",
//             scheme: "bearer",
//             in: "header",
//             bearerFormat: "JWT"
//           },
//         }
//       },
//     security: [ { jwt: [] } ],
//     apis: ["./routes/*.js"],
//   };
// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const connection = require('./db/connection');

const port = process.env.port || 5000;
app.listen(port, async () => {
    try {
        await connection.authenticate();
        await connection.sync({ force: false });
        console.log('Connection has been connect in database and server port: ' + port);
    } catch (error) {
        console.error('Unable to connect to the database: ', error.message);
    }
});
