const http = require('http');
const url = require('url');
const fs =	require('fs');

function routerFile(pathname){
    if(pathname && pathname !== '/'){
      const file = __dirname + "/" + pathname + '.html'; 
      if(fs.existsSync(file)){
        return file;
      }
      return __dirname + '/erro.html';
    }
    return __dirname + '/artigos.html';
}


let	server	=	http.createServer(function(request,	response){
    const resource = url.parse(request.url).pathname;
    const file = routerFile(resource);
    
    fs.readFile(file, function(erro, html){
      response.writeHeader(200,	{'Content-Type':	'text/html'});	
      response.end(html);				
    });
});

server.listen(3000,	function(){
   console.log('Server HTTP UP');
});