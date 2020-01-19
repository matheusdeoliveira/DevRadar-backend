const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setWebSocket } = require( './websocket' )

const app = express();
const server = http.Server(app);

setWebSocket( server )

mongoose.connect('mongodb+srv://omnistack2020:badmdado@cluster0-86akr.mongodb.net/week10?retryWrites=true&w=majority',{

    useNewUrlParser: true,
    useUnifiedTopology: true

});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


