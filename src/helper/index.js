class Helper {

    static responseJsonHandler(error, data, expressResponse) {
        let obj = { error: error, data: data };
        if (obj.error) {
            expressResponse.json(obj.error);
        } else {
            expressResponse.json(obj.data);
        }
    }
    static decodeBase64Attch(dataString) {
        const matches = dataString.match(/^data:([A-Za-z1-9-.+\/]+);base64,(.+)$/),
            response = {};
        if (matches.length !== 3) {
            return new Error('Invalid input string');
        }
        const mimeType = matches[1].includes('msword') ? '/doc' : matches[1].includes('vnd.openxmlformats-officedocument.wordprocessingml.document') ? '/doc' : matches[1].includes('vnd.openxmlformats-officedocument.spreadsheetml.sheet') ? '/xlsx' : matches[1];
        response.type = mimeType;
        response.data = Buffer.from(matches[2], 'base64');
        return response;
    }

};

module.exports = {
    Helper
};