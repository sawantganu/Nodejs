const http=require('http')
http.createServer((req,resp)=>{
    resp.write('<h1>i am new developer <br> love with her code </h1>');
    resp.end();
}).listen(2611);