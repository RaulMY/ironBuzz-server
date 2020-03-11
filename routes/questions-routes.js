const express = require('express');
const router  = express.Router();
const Question = require('../models/Question');

/* GET All Tests. */
router.get('/questions', (req, res, next) => {
    Question.find()
    .then(questions=>{
        res.status(200).json({questions})
    })
    .catch(e=>console.log(e))
});

/* GET Test by id. */
router.get('/questions/:id', (req, res, next) => {
    Question.findById(req.params.id)
    .then(question=>{
        res.status(200).json(question)
    })
    .catch(e=>console.log(e))
});

/* POST Test by id. */
router.post('/questions', (req, res, next) => {
    const newQuestion = new Question(req.body);
    newQuestion.save()
    .then(question=>{
        res.status(200).json(question)
    })
    .catch(e=>console.log(e))
});

module.exports = router;
