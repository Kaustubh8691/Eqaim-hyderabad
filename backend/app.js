const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connection/connect");
const cors = require("cors");
const dataRouter = require("./routes/Blog");
dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// const router = require("./routes/router");

app.get("/", (req, res) => {
  res.send("Server is running");
});

// app.use("/", router);
app.use("/",dataRouter);

const startDB = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`server is running and listening to port - ${port}`);
      console.log("DB connected");
    });
  } catch (error) {
    console.log(error);
  }
};
startDB();
















// const dotenv = require('dotenv');
// dotenv.config({path:'./.env'});
// require('./db');
// const express = require('express');
// const app = express();
// const Port  = 5000;
// const bodyParser = require('body-parser');
// const cors = require('cors');

// //middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// //routes

// app.use('/api/v1' ,require('./routes/Post'))

// app.get('/',(req,res)=>{
//     res.send("homepage")
// })

// app.listen(Port,()=>{
//     console.log(`server listening on port ${Port}`);
// })