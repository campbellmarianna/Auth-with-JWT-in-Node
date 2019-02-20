const express = require('express')
const exphbs = require('express-handlebars')

const app = express()


require("./controllers/auth.js")(app)


app.listen(3000, () => {
    console.log("App listening on port 3000!")
})

module.exports = app;
