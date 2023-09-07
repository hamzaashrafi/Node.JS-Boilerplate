const express = require("express");
const router = express.Router();

const controller = require('../controller');

router.get('/hello', (request, response) => {
    controller.TestController.getTest(request, response);
});


module.exports = router;