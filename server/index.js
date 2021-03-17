const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const MvpController = require("./controllers/Controller.js");
const path = require("path");
const port = 1000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "../public")));

app.post("/api/easy", MvpController.postEasyQuestion);
app.post("/api/medium", MvpController.postMediumQuestion);
app.post("/api/hard", MvpController.postHardQuestion);

app.get("/api/easy", MvpController.getEasyQuestion);
app.get("/api/medium", MvpController.getMediumQuestion);
app.get("/api/hard", MvpController.getHardQuestion);

app.patch("/api/easy/:id", MvpController.patchEasyQuestion);
app.patch("/api/medium/:id", MvpController.patchMediumQuestion);

//Contribution
app.post("/api/contribute", MvpController.postContribution);
app.get("/api/contribute", MvpController.getContribution);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
