require('dotenv').config();
const express = require('express');
const authRouter = require('./routes/auth');
const uploadRouter = require('./routes/upload');
const app = express();
require('./db/connection');

app.use(express.json());

// atur routing di sini
app.use('/api/auth', authRouter);
app.use('/api/upload', uploadRouter);
app.listen(3000);
