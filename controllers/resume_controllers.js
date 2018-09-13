const express = require('express');
const router = express.Router();
const resume = require('../models/resume.js');

//insert api routing here
router.get('/', (req, res) => {
    resume.all((data) => {
        const allResumes = {
            resume: data
        };
        res.render("index", myObj)
    })
})

router.post('/api/resumes', (req, res) => {
    resume.create([req.body.resName, req.body.resScore], result => {
        res.json({
            id: result.id
        })
    })

})

router.put('/api/resumes/:id', (req, res) => {

})


router.delete('/api/resumes/:id', (req, res) => {
    resume.delete(req.params.id, data => {
        console.log(data);
    })
})

module.exports = router;