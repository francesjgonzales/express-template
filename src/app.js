const express = require('express')
const path = require('path')
const hbs = require('hbs')

//Define Express Config
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//Set up static directory
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About"
    })
})

//Set up 404 page
app.get('/help/*', (Req, res) => {
    res.render('help', { title: "article not found" })
})

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: "pagdde not found"
    })
})

app.listen(3000, () => {
    console.log('Server is up in port 3000')
})