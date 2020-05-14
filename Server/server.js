const express = require('express');
const todoRoutes = express.Router();
const bodyParser = require('body-parser');
var cors = require('cors');
var fs = require('fs'); 
const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://yogita:Yogit@2923@cluster0-rxev7.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true },{ useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("CovidTracker").collection("AddPatient");
  let count=0;
  collection.insertOne({count:count})
  // perform actions on the collection object
  console.log(`"Database Connected" ${collection}`)
  client.close();
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
var data = JSON.parse(fs.readFileSync('fakeData.json', 'utf8')); 
  res.send({ data });
});

app.post('/save', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body}`,
  );
});