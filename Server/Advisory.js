const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const agro = require('./Components/agro');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/AgroAdvisory");

app.post('/advisory', async(req, res) => {
  const advisory = req.body.advisory;
  const province = req.body.province
  const description_English = req.body.description_English
  const description_Urdu = req.body.description_Urdu

  const agrodata = new agro({
    Advisory: advisory,
    Province: province,
    Description_English: description_English,
    Description_Urdu: description_Urdu
  })

  try{
    await agrodata.save();
    res.send("Advisory inserted");
  } catch (err) {
    console.log(err, "error in inserting data");
  }
});

app.get('/displayAdvisory', async (req, res) => {
  const id = req.params.id;
  agro.find()
  .then(agro => res.json(agro))
  .catch(err => res.json(err))
});

app.delete('/deleteAdvisory/:id', (req, res) => {
  const id = req.params.id;
  agro.findByIdAndDelete({_id: id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
})

app.put('/UpdateAdvisory/:id', (req, res) => {
  const id = req.params.id;
  agro.findByIdAndUpdate({_id:id},{
    Advisory: req.body.name,
    Province: req.body.Province,
    Description_English: req.body.Description_English,
    Description_Urdu: req.body.Description_Urdu
  })
  .then(agro => res.json(agro))
  .catch(err => res.json(err))
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

