const express = require('express');

const router = express.Router();

const { getPackage, createPackage,updatePackage, deletePackage } = require('../controllers/event.controller');

router.get('/package', getPackage);
router.post('/package', createPackage);
router.put('/package/:id', updatePackage);
router.delete('/package/:id', deletePackage);

module.exports = router;
