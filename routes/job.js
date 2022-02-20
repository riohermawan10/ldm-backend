const express = require('express');
const router = express.Router();
const JobController = require('../controllers/job');

/**
 * @swagger
 * /job/:
 *   get:
 *     tags: 
 *          -   job
 *     summary: Get job
 *     description: Get job
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */

router.get('/', JobController.findAllJob);
/**
 * @swagger
 * /job/id:
 *   get:
 *     tags: 
 *          -   job
 *     summary: Get job by id
 *     description: Get job by id
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.get('/report', JobController.findAllJobReport);
/**
 * @swagger
 * /job/report:
 *   get:
 *     tags: 
 *          -   job
 *     summary: Get report job
 *     description: Get report job
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.get('/:id', JobController.findJobById);
/**
 * @swagger
 * /job:
 *   post:
 *     tags: 
 *          -   job
 *     summary: Create job
 *     description: Create job
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.post('/', JobController.addJob);
/**
 * @swagger
 * /job:
 *   put:
 *     tags: 
 *          -   job
 *     summary: Update job
 *     description: Update job
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.put('/:id', JobController.updateJob);
/**
 * @swagger
 * /job/:id:
 *   delete:
 *     tags: 
 *          -   job
 *     summary: Create job
 *     description: Create job
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.delete('/:id', JobController.deleteJob);

router.post('/sendjob', JobController.sendJob);
/**
 * @swagger
 * /job/sendProduct:
 *   post:
 *     tags: 
 *          -   job
 *     summary: Create job
 *     description: Create job
 *     security: 
 *          - jwt: []
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
router.post('/sendProduct', JobController.sendProduct);
router.get('/detail/detailJob', JobController.findAllDetailJob);
router.get('/detail/detailJob/:id', JobController.findAllDetailJobById);

router.post('/addProducttoJob', JobController.addProducttoJob);
// router.delete('/deleteProducttoJob/:id', JobController.deleteProducttoJob);
router.delete('/deleteUsertoJob/:id', JobController.deleteUsertoJob);
router.delete('/deleteProductToJobById/:id', JobController.deleteProductToJob2);
router.patch('/editProductToJob', JobController.editProductToJob);

module.exports = router;