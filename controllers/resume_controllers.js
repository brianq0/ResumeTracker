const express = require('express');
const router = express.Router();
const resume = require('../models/resume.js');

//insert api routing here
router.get('/', (req, res) => {
    console.log(req.body)
    resume.all((data) => {
        res.render("index", {
            resume: data
        })
    })
})

router.post('/api/resumes/new', (req, res) => {
    resume.create([req.body.name, req.body.liked], result => {
        res.json({
            id: result.id
        })
    })

})

router.put('/api/resumes/:id', (req, res) => {
    console.log('controller put', req.body)
    resume.update(req.body, req.params.id, () => {
        console.log(data);
    })
})


router.delete('/api/resumes/:id', (req, res) => {
    console.log('resume.delete');
    resume.delete(req.params.id, data => {

    })
})

module.exports = router;