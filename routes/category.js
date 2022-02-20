const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');

/**
 * @swagger
 * /kategori/:
 *   get:
 *     tags: 
 *          -   category
 *     summary: Get all category
 *     description: Get all category
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.get('/', categoryController.getCategory);
/**
 * @swagger
 * /kategori/all:
 *   get:
 *     tags: 
 *          -   category
 *     summary: Get category
 *     description: Get category
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.get('/all', categoryController.getAllCategory);
/**
 * @swagger
 * /kategori/getParent:
 *   get:
 *     tags: 
 *          -   category
 *     summary: Get Parent category
 *     description: Get Parent category
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.post('/', categoryController.createCategory);
/**
 * @swagger
 * /kategori:
 *   post:
 *     tags: 
 *          -   category
 *     summary: Create category
 *     description: Create category
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.patch('/:id', categoryController.editCategory);
/**
 * @swagger
 * /kategori:
 *   patch:
 *     tags: 
 *          -   category
 *     summary: Update category
 *     description: Update category
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.delete('/:id', categoryController.deleteCategory);
/**
 * @swagger
 * /kategori:
 *   delete:
 *     tags: 
 *          -   category
 *     summary: Delete category
 *     description: Delete category
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.get('/getParent', categoryController.getAllCategoryParent);

module.exports = router;