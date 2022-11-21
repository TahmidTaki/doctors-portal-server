const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

//mongodb setup

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bvgttje.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const appointmentOptionCollection = client.db("doctorsPortal").collection("appointmentOptions");

    app.get("/", async (req, res) => {
      const query = {};
      const options = await appointmentOptionCollection.find(query).toArray();
    });
  } finally {
  }
}
run().catch(console.log);

app.get("/", async (req, res) => {
  res.send("doctors portal server is running");
});

app.listen(port, () => {
  console.log(`doctors portal running at port ${port}`);
});
