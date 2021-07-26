const express = require('express');
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("Welcome to Express");
});

app.get("/users/:name", (request, response) => {
    response.send(`Welcome ${request.params.name}`);
});

const fruits = ["Apple", "Banana", "Kiwi"];

app.get("/fruits", (request, response) => {
    if(fruits.includes(request.query.name)){
        response.send(`Here is your ${request.query.name}`);
    } else{
        response.send(`Sorry, ${request.query.name } is not found...`);
    }
});








app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
