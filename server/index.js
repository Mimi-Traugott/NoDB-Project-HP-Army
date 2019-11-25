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

app.post("/api/myArmy", characterCtrl.addToArmy);
app.get("/api/allArmy", characterCtrl.getArmy);

app.post('/api/firstArmyName', characterCtrl.nameArmy);
app.put('/api/yourArmyName', characterCtrl.updateArmyName);

app.delete("/api/avadakedavra/:id", characterCtrl.killWizard);

app.listen(PORT, () => console.log(gradient.rainbow(`runnin wild on ${PORT}`)))

