const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const app = express();
const routes = require('./controllers/resume_controllers.js');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(routes);





app.listen(() => console.log(`Listening on port: ${PORT}`))