import { createServer, IncomingMessage, Server } from "http";

const server : Server = createServer((req : IncomingMessage,res)=>{
    //  console.log(req.url); // '/', '/user', '/products'
    //  console.log(req.method);//"GET" , "POST" , "Delete"
    const url = req.url
    const method = req.method

    if(url === '/' && method === "GET"){
        // console.log("This  is Root route");
        res.writeHead(200, {"content-type" : ""})
    }

},
);

server.listen(5000, ()=>{
    console.log("Server is running on the port 5000")
});

