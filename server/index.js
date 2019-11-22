const express=require('express');
const characterCtrl=require('./controllers/characterCtrl');

const PORT = 4041;
const app=express();

app.use(express.json())


app.get('/api/badCharacters', characterCtrl.getAllBad)
app.get('/api/goodCharacters', characterCtrl.getAllGood)


app.listen(PORT, () => {
    console.log(`runnin on ${PORT}`)
})