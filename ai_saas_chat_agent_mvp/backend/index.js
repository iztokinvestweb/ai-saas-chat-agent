// Entry point for backend API
const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.send('Backend is running'));

app.listen(3001, () => console.log('Backend running on port 3001'))