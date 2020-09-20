const express = require("express");
const router = express.Router();

router.use('/', function(req, res) {
    res.send('Hello World!')
});

module.exports = router