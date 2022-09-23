const app= express();
/* Dependencies */
// eslint-disable-next-line no-undef
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
// eslint-disable-next-line no-undef
const cors = require('cors');
// eslint-disable-next-line no-undef
const express = require('express');
app.use(cors());


/* Initializing the main project folder */
app.use(express.static('website'));

const port = 6000;
// eslint-disable-next-line no-unused-vars
const server=app.listen(port,listening);
function listening(){
    console.log('server runing');
    console.log(`runing on localhost: ${port}`);
}
// TODO-ROUTES!
// GET route
