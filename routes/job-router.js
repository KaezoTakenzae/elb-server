const express = require('express');

const JobCtrl = require('../controllers/job-ctrl');

const router = express.Router();

router.post('/job', JobCtrl.createJob);
router.put('/job/:id', JobCtrl.updateJob);
router.delete('/job/:id', JobCtrl.deleteJob);
router.get('/job/:id', JobCtrl.getJobById);
router.get('/jobs', JobCtrl.getJobs);

module.exports = router;
