const express = require("express");
const characterCtrl = require("./controllers/characterCtrl");
const gradient = require('gradient-string')
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

app.post('/api/nameArmy', characterCtrl.nameArmy);
app.put('/api/updateArmyName', characterCtrl.updateArmyName);

app.delete("/api/killWizard/:id", characterCtrl.killWizard);

app.listen(PORT, () => console.log(gradient.rainbow(`runnin running, we're runnin runnin on ${PORT}`)))

