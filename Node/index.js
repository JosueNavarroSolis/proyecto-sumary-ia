const express = require("express")
const app = express()
const PORT = 3001
const traductor = require('./controlador/traductor')
const cors = require('cors')
app.use(cors())

app.use(express.json({limit: "50mb"}))
app.use('/traductor',traductor)

app.get('/',(req,res) =>{
  res.send('aja');
})

/*app.listen(PORT, () =>{
	console.log(`Server is listening at http://localhost:${PORT}`)
})


const express = require('express');
const { Translate } = require('node-google-translate-skidz');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/translate', async (req, res) => {
  const { text, targetLanguage } = req.body;

  try {
    const translation = await Translate({
      text,
      target: targetLanguage,
    });

    res.json({ translation });
  } catch (error) {
    res.status(500).json({ error: 'Error en la traducción' });
  }
});

app.listen(port, () => {
  console.log(`La API de traducción está escuchando en http://localhost:${port}`);
});
*/