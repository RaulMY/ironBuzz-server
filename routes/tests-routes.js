const express = require('express');
const router  = express.Router();
const Test = require('../models/Test');

/* GET All Tests. */
router.get('/tests', (req, res, next) => {
    Test.find()
    .then(tests=>{
        res.status(200).json({tests})
    })
    .catch(e=>console.log(e))
});

/* GET Test by id. */
router.get('/tests/:id', (req, res, next) => {
    Test.findById(req.params.id)
    .populate('questions')
    .then(test=>{
        res.status(200).json(test)
    })
    .catch(e=>console.log(e))
});

/* POST Test by id. */
router.post('/tests', (req, res, next) => {
    const newTest = new Test(req.body);
    newTest.save()
    .then(test=>{
        res.status(200).json(test)
    })
    .catch(e=>console.log(e))
});

module.exports = router;
