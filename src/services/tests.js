const dns = require('dns').promises;

class Tests {
    async getTest(query) {
        try {
            await dns.lookup("www.google.com");
            console.log(1112);
        } catch (error) {
            if (error.message.includes('www.google.com')) {
                errors["010"].reason = 'Internet is not available';
            } else {
                errors["010"].reason = error.reason ? error.reason : error.message;
            }
            return errors['010'];
        }
    }
}

module.exports = new Tests();