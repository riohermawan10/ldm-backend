const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/', productController.fetchAll);
router.get('/all', productController.getAll);
/**
 * @swagger
 * /produk:
 *   get:
 *     tags: 
 *          -   product
 *     summary: Get all produk
 *     description: Get all produk
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.post('/', productController.create);
/**
 * @swagger
 * /produk:
 *   post:
 *     tags: 
 *          -   product
 *     summary: Create produk
 *     description: Create produk
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.delete('/:id', productController.deleteProduct);
/**
 * @swagger
 * /produk:
 *   delete:
 *     tags: 
 *          -   product
 *     summary: Delete produk
 *     description: Delete produk
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.put('/:id', productController.update);
/**
 * @swagger
 * /produk:
 *   put:
 *     tags: 
 *          -   product
 *     summary: Update produk
 *     description: Update produk
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
module.exports = router;