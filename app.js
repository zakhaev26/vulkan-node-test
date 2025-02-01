const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(`Request made to: ${req.originalUrl}`);
    next(); // Pass to the next middleware or route handler
});

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
