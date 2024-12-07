const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Static files
app.use(express.static('public'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
