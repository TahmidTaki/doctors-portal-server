const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();

app.use(cors());
app.use(express.json());

//mongodb setup

const uri =
  "mongodb+srv://<username>:<password>@cluster0.bvgttje.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get("/", async (req, res) => {
  res.send("doctors portal server is running");
});

app.listen(port, () => {
  console.log(`doctors portal running at port ${port}`);
});
