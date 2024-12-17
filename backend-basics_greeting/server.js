import { createServer } from "node:http";

export const server = createServer((request,response)=>{

    console.log("request.url: ", request.url);
    console.log("request.method: ", request.method);
  
    if (request.url === "/Niloofar") {
      response.statusCode = 200;
      response.end("Hello Niloofar!!");
      return;
    } 
})
