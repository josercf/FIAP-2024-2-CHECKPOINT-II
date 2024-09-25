const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

app.use(express.json());

// Swagger definition
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Calculator API',
            version: '1.0.0',
            description: 'A simple calculator API',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            },
        ],
    },
    apis: ['./index.js'], // Path to the API docs
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

/**
 * @swagger
 * components:
 *   schemas:
 *     Operation:
 *       type: object
 *       required:
 *         - a
 *         - b
 *       properties:
 *         a:
 *           type: number
 *         b:
 *           type: number
 */

/**
 * @swagger
 * /add:
 *   post:
 *     summary: Add two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Operation'
 *     responses:
 *       200:
 *         description: The result of the addition
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    const result = a + b;
    res.json({ result });
});

/**
 * @swagger
 * /subtract:
 *   post:
 *     summary: Subtract two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Operation'
 *     responses:
 *       200:
 *         description: The result of the subtraction
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */
app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    const result = a - b;
    res.json({ result });
});

/**
 * @swagger
 * /multiply:
 *   post:
 *     summary: Multiply two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Operation'
 *     responses:
 *       200:
 *         description: The result of the multiplication
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */
app.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    const result = a * b;
    res.json({ result });
});

/**
 * @swagger
 * /divide:
 *   post:
 *     summary: Divide two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Operation'
 *     responses:
 *       200:
 *         description: The result of the division
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *       400:
 *         description: Division by zero is not allowed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
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