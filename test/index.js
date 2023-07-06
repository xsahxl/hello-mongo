const { load } = require('@serverless-devs/core');
const https = require('https');

(async () => {
   await load('fc');

   const options = new URL('https://registry.devsapp.cn/simple/devsapp/core/releases/latest');

   await new Promise(r => {
    const req = https.request(options, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.on('data', (d) => {
            process.stdout.write(d);
        });

        res.on('end', r);
    });

    req.on('error', (e) => {
        console.error(e);
    });
    req.end();
   })

})()