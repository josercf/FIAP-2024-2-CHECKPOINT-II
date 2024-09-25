const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/add', (req, res) => {
    const { a, b } = req.body;
    const result = a + b;
    res.json({ result });
});

app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    const result = a - b;
    res.json({ result });
});

app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    const result = a * b;
    res.json({ result });
});

app.post('/divide', (req, res) => {
    const { a, b } = req.body;
    if (b === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    const result = a / b;
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});