const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname +'/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/',(request, response) => {
    // response.send('<h1>Hello from Express server</h1>');
    // response.send({
    //     name: 'Golem',
    //     likes: [
    //         'Biking',
    //         'Coding',
    //         'space']
    // })
    response.render('home.hbs',{
        pageTitle: 'Another Home  Page',
        welcomeMsg: 'Welcome to the NodeJs website.'
    });
});

app.get('/about', (request, response) => {
    //response.send('<h3>Loaded the About Page</h3>');
    response.render('about.hbs', {
        pageTitle: 'My ABout Title',
    });
});

app.get('/bad', (req, resp) => {
    resp.send({
        Error: '<b><h2>Navigated to bad page. Page not found</h2>',
        ErrorCode: 99
    })
})

app.listen(3000, () => {
    console.log('Server is up and running on port 3000.')
});

