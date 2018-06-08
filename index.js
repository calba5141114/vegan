const express = require('express'); 
const application = express(); 


application.use(express.static('public'));

application.get('/', (request,response)=>{
    response.sendFile(__dirname + '/public/index.html')
});

application.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/public/about.html');
});

application.get('/favorite', (request, response)=> {
    response.sendFile(__dirname + '/public/favorite.html');
});

application.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/404.html');
    console.log('Error 404 Found');
});

application.listen(3000, ()=> {
    console.log('App is located on port 3000');
});



