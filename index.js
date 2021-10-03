// const http = require("http");
// const url = require("url");

// const server = http.createServer((request,response) => {
//     response.writeHead (200, {'content_type': 'text/html'});
//     response.write
//     ('<h1> Anup don ho </h1>');
//     response.end();
// });

// const port = 3000;
// server.listen(3000,() => {
//     console.log(`server is running at port 3000:${port}`);

// });





const http = require ("http");
const url = require ("url");

const server = http.createServer((req,res) => {
   
   let content = "";
   let statusCode = 200;
    switch(req.url){
        case "/":
            content = "<h1> this is a root page </h1>"
            break;
          case "/profile":
          content ="<h1> this is profile page"; 
          break;
          case "/about":
              content ="<h1>this is about page</h1>";
              break; 
             
              default:
                  content = "<h1> this is 404 page </h1>";
                   statusCode = 404;
    }
    res.writeHead(statusCode, {'content_type': 'text/html'});
    res.write(content);
    res.end();
})




server.listen(3000, () => {
    console.log(3000);
})