const http=require('http');
const fs=require('fs');
const filecontent=fs.readFileSync('index.html');

const port = process.env.PORT || 8000;

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(filecontent);
})

server.listen(port,()=>{
    console.log('listening on port 80');
})