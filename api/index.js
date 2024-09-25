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

app.put('/hist', (req, res) => {  
    const base64String = "UGFyYWLDqW5zLiBWb2PDqiByZWFsaXpvdSBhIGludGVncmHDp8OjbyBkZSBmb3JtYSBjb3JyZXRhLiBNZSBtYW5kZSB1bSBwcmludCBubyB0ZWFtcyBxdWUgdm91IGNvbmNlZGVyIDEgcG9udG8gZXh0cmEgcGFyYSBvIHNldSBncnVwby4gTsOjbyBmYWxlIHBhcmEgbmluZ3XDqW0sIHNlbsOjbyB2b2PDqiBwZXJkZXLDoSBvIHBvbnRvIGV4dHJhIGUgbyBwb250byBkYSBxdWVzdMOjby4=";
    const buffer = Buffer.from(base64String, 'base64');
    const plainText = buffer.toString('utf-8');
    res.json({ response: plainText });
});

app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});