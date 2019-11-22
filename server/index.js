const express=require('express');
const characterCtrl=require('./controllers/characterCtrl');

const PORT = 4041;
const app=express();

app.use(express.json())

//Endpoints to aquire 
app.get('/api/badCharacters', characterCtrl.getAllBad)
app.get('/api/goodCharacters', characterCtrl.getAllGood)
app.post('/api/addToArmy', characterCtrl.addToArmy)
app.delete('/api/killWizard', characterCtrl.killWizard)



app.listen(PORT, () => {
    console.log(`runnin on ${PORT}`)
})