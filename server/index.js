const express = require("express");
const characterCtrl = require("./controllers/characterCtrl");
const cors = require("cors");

const PORT = 4041;
const app = express();

app.use(cors());
app.use(express.json());

//Endpoints
app.get("/api/badWizards", characterCtrl.getAllBad);
app.get("/api/goodWizards", characterCtrl.getAllGood);

app.post("/api/addToArmy", characterCtrl.addToArmy);
app.get("/api/getArmy", characterCtrl.getArmy);

app.delete("/api/killWizard", characterCtrl.killWizard);

app.listen(PORT, () => {
  console.log(`runnin on ${PORT}`);
});
