const express = require('express');
const bodyParser = require('body-parser');

const route = require('./routes/route');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use((req, res, next) => {
//     let date = new Date();
//     let newDate = date.getDate() + 1;
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear() + 1
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();

//     console.log(year + "-" + month + "-" + newDate + " " + hour + ":" + minute + ":" + second);
//     console.log(req.originalUrl);
//     // console.log(req.connection.remoteAddress);
//     console.log(req.ip);
//     // console.log(req.socket.remoteAddress);
//     next();
// })

mongoose.connect("mongodb+srv://Rajshekhar:Rajshekhar123@cluster0.t8gms.mongodb.net/test", { useNewUrlParser: true })
    .then(() => console.log('mongo is connected'))
    .catch(error => console.log(error))


const moment = require('moment');
let time = moment();
app.use(function (req, res, next) {
    let url = req.originalUrl
    console.log(url)
    let ip = req.ip
    console.log(ip)
    console.log(time.format('h:mm:ss a'));
    console.log(time.format('YYYY,MM,DD'));
    next()
})


app.use('/', route);

app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});