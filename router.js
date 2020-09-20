const express = require("express")
const router = express.Router()
const Task = require('./models/Task')

// List of tasks
router.get('/', (req, res) => {
    Task.find({}).exec((err, tasks) => {
        res.send(tasks)
    })
});

// Create
router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', (req, res) => {
    var task = new Task(req.body);
    task.save().then(item => {
    	res.send(item)
    })
})

// Single task
router.get('/:id', (req, res) => {
    Task.find({ _id: req.params.id }).exec((err, task) => {
        res.send(task)
    })
})

router.post('/update/:id', (req, res) => {
    Task.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, task) =>{
        res.send(task)
    })
})

router.get('/delete/:id', (req, res) => {
    Task.findOneAndDelete({ _id: req.params.id }).exec((err, task) => {
        res.send('Task deleted');
    })
})


module.exports = router