const express = require('express');
const router = express.Router();
const resume = require('../models/resume.js');


router.get('/', (req, res) => {
    resume.all((data) => {
        res.render("index", {
            resume: data
        })
    })
})

router.post('/api/resumes/new', (req, res) => {
    //We pass in an object with the new name and default value of whether or not the resume is liked.
    //We respond with an object that assigns an id to the item to allow for easy indexing
    resume.create([req.body.name, req.body.liked], result => {
        res.json({
            id: result.id
        })
    })
})
//Sends a true/false response along with the associated id
router.put('/api/resumes/:id', (req, res) => {
    resume.update(req.body, req.params.id, () => {})
})

router.delete('/api/resumes/:id', (req, res) => {
    resume.delete(req.params.id, data => {})
})

module.exports = router;