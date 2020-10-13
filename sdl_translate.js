function main (params){
    
    return new Promise((resolve, reject) => { 
        var request = require('request');

        //SDL MTE API Key
        var username = '<API_KEY>';
        var auth = 'Basic ' + Buffer.from(username + ':').toString('base64');

        var text = Buffer.from(params.input).toString('base64');

        var options = {
            url: 'https://mt01.etsdemo.sdlproducts.com:8001/api/v2/translations/quick',
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Authorization': auth
            },
            form: {
                input: text,
                //Translate from anything to English
                languagePairId: "AutEng"
            }
        }

        request(options, function (err, res, body) {
            if (err) {
                console.log(err)
                return
            }
            
            let obj = JSON.parse(body);

            let data = obj.translation;
            let buff = new Buffer.from(data, 'base64');
            let text = buff.toString('utf-8');
            
            resolve({message: text});
        })
   })
}
