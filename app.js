const express = require('express');
const morgan = require ('morgan');

const app=express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    console.log("hello world")
});

app.listen(3000, () => {
    console.log("listening to port 3000")
});
