const express = require('express');
const router = express.Router();
const resume = require('../models/resume.js');

//insert api routing here
router.get('/', (req, res) => {
    console.log(req.body)
    resume.all((data) => {
        console.log(data)
        const allResumes = {
            resume: data
        };
        res.render("index", allResumes)
    })
})

router.post('/api/resumes', (req, res) => {
    resume.create([req.body.name, req.body.liked], result => {
        res.json({
            id: result.id
        })
    })

})

router.put('/api/resumes/:id', (req, res) => {
    console.log('controller put', req.body)
    resume.update(req.body, req.params.id)
    res.redirect('/')
})


router.delete('/api/resumes/:id', (req, res) => {
    resume.delete(req.params.id, data => {
        console.log(data);
    })
})

module.exports = router;