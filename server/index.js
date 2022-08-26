const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Action = require("./model/userAction");

/* 
to connect to your own MongoDB, create a .env file in the server's
root directory (stonks/server) and provide your own DB details (MONGO_URI):
///////////////
.env:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.isflmwj.mongodb.net/?retryWrites=true&w=majority

///////////////
which are used in config/db.js
I will provide you with a usname and pw created for testing purposes in the submission emails.
Just replace <username> and <password> with the provided credentials
and place this line in your newly created .env file.
*/

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

// uncomment to see logs in console:

// app.post("/", (request, response) => {
//   console.log(request.body);
//   response.send(request.body);
// });

// posting to mongoDB
app.post("/", (request, response) => {
  const {
    requestTimestamp,
    companyName,
    closingPrices,
    candleTimestamps,
    dateFrom,
    dateTo,
  } = request.body;
  if (
    !requestTimestamp ||
    !companyName ||
    !closingPrices ||
    !candleTimestamps ||
    !dateFrom ||
    !dateTo
  ) {
    response.status(400);
    throw new Error("Not all required data has been sent");
  } else {
    const action = new Action({
      requestTimestamp,
      companyName,
      closingPrices,
      candleTimestamps,
      dateFrom,
      dateTo,
    });

    action.save();
    response.status(200).json(action);
    console.log("Data saved successfully");
  }
});

//go to localhost:3001/get after posting to check on newly logged user actions
app.get("/get", async (request, response) => {
  try {
    const actions = await Action.find();
    response.json(actions);
  } catch (error) {
    response.status(500);
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("Listen on the port 3001...");
});
