const express = require("express");
const cors = require('cors');
require('dotenv').config();

const applyMiddleware = (app) => {
    app.use(cors({
        origin: ['http://localhost:5173', 'https://swift-plan-client.vercel.app', 'https://swift-plan-client.web.app'],
        credentials: true,
        optionsSuccessStatus: 200
    }));
    app.use(express.json());
}

module.exports = applyMiddleware;