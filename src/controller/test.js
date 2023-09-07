const { Helper } = require('../helper');
const services = require('../services');

class TestController {

    getTest(request, response) {
        // get Admin Contacts from local db 
        services.Tests.getTest()
            .then((data) => {
                Helper.responseJsonHandler(null, data, response);
            }).catch((error) => {
                Helper.responseJsonHandler(error, null, response);
            });
    }
}


module.exports = new TestController();