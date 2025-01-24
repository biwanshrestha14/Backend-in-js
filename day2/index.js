import http from "http"
const server= http.createServer((req,res)=>{
    switch(req.url){
        case "/books":
            res.writeHead(200);
            res.end("this is book section")
            break;
        case '/others':
            res.writeHead(200);
            res.end("OTHER IS RUNNING")
            break
        default:
            res.writeHead(200)
            res.end('Backend is working')
    }})
    
server.listen(8000,()=>{
    console.log('server has started');
    
})