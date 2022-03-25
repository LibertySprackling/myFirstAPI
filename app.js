const express = require('express');
const app = express();
const cors = require('cors');

const pbBooks = [
    {rating:1, title:'It Ends with Us', author:'Colleen Hoover'},
    {rating:2, title:'Verity', author:'Colleen Hoover'},
    {rating:3, title:'The Seven Husbands of Evelyn Hugo: A Novel', author:'Taylor Jenkins Reid'},
    {rating:4, title:'The Love Hypothesis', author:'Ali Hazelwood'},
    {rating:5, title:'People We Meet on Vacation', author:'Emily Henry'},
    {rating:6, title:'Where the Crawdads Sing', author:'Delia Owens'},
    {rating:7, title:'The Song of Achilles', author:'Madeline Miller'},
    {rating:8, title:'November 9', author:'Colleen Hoover'},
    {rating:9, title:'Ugly Love', author:'Colleen Hoover'},
    {rating:10, title:'The Paris Library', author:'Janet Skeslien Charles'},
];

JSON.stringify(pbBooks)
app.use(cors());

//below is the home route
app.get('/', (req,res) => {
    res.send('Welcome to the Times Best Seller List API');
});

//below is the route for endpoint: books
app.get('/pbBooks', (req,res) => {
    res.send(pbBooks);
});
//get book by rating
app.get('/pbBooks/:rating', (req, res) => {
    console.log(req.query);
    const pbBookRating = req.params.rating -1;
    const selectedpbBook = pbBooks[pbBookRating];
    res.send(selectedpbBook);
});

//get pbBook by rating
app.get('/pbBooks/:rating', (req, res) => {
    console.log(req.query);
    const pbBookRating = req.params.rating -1;
    const selectedpbBook = pbBooks[pbBookRating];
    res.send(selectedpbBook);
});


module.exports = app;