const express = require('express');
const app = express();
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
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});