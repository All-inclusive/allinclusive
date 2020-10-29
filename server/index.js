const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

//database connection 
const Url ='mongodb+srv://oussamaheni:oussama23146875@clusterallinclusive.pthxb.mongodb.net/allinclusive?retryWrites=true&w=majority'
mongoose.connect(Url,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false,
  useCreateIndex:true
}, () => console.log('DB is connected'))

//Routes middlewares
app.use('/api/user', require('./routes/auth.js'));
app.use('/api/event',require('./routes/events.js'))
app.use('/api/company', require('./routes/company.js'));
app.use('/api/seller',require('./routes/company.js'))
app.use('/api/userevent',require('./routes/userevent.js'))
app.use('/api/message',require('./routes/messages.js'))





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});