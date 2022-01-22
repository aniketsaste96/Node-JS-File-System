//import required packages
const fs = require("fs");
const express = require("express");
const app = express();





//let heroku decide port or 3000
const port = process.env.PORT || 3000;





//home url endpoint (routes)
app.get("/", (request, response) => {
    response.send("Hello world!!!")
});






//current timestamp and date format as per requiremenet
var date = (new Date()).toDateString();
var time = (new Date().getTime()).toString();
var date_time = (date + " " + time).toString();
var fileContent = (new Date()).toLocaleTimeString();


//path to write the file
//.txt file will be created & saved in backupfolder when  /gettimestamp route get's  hit
const path = `./backup/${date_time}.txt`;


//creating end point name gettimestamp 
app.get('/gettimestamp', (req, res) => {
    fs.writeFile(path, (fileContent), (err) => {

        //error handling
        if (err) {
            console.log(err)
        } else {
            console.log("File created successfully!!")
        }
    })



    //get response as current Date & Timestamp 
    res.send(`
        
               <h1>${date}</h1>
               <h1>${fileContent}</h1>             
    
    `);
})



app.listen(port, () => {
    console.log(`listening on port ${port}`);
})