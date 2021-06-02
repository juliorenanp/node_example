
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res)=>{
    const file = req.url === '/' ? 'index.html' : req.url
  
    // if(req.url === '/'){
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'),
    //         (err, content) => {
    //             if(err){
    //                 throw new Error;
    //             }
    //             res.end(content);
    //         }
    //     )
    // }


    // if(req.url === '/contato'){
    //     return res.end('<h1>Contato</h1>')
    // }

    return;

}).listen(5000, () => console.log('Server is running modaf'));