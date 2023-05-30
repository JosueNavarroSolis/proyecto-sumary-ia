const router = require('express').Router();
const cohere = require('cohere-ai'); 


let texto2
cohere.init('3AwIkSIwZi6c4aFZZLQYug4QFgU0dfNISYZSpGJb'); // This is your trial API key

process.env.GOOGLE_APPLICATION_CREDENTIALS = 'C:/Users/User/Desktop/IA/Final/Node/sonorous-sign-387807-125648f99467.json';
const { Translate } = require('@google-cloud/translate').v2;

// Crea una instancia del cliente de traducción
const translate = new Translate();

router.post("/tranductor",async (req,res)=>{
    var texto = req.body.data.text;
    console.log('textooooooooooooooo');
    console.log(req.body.data.text);
    // Define el texto a traducir y el idioma de origen

    const sourceLanguage = 'en';

    // Define el idioma al que se desea traducir
    const targetLanguage = 'es';
    const response = await cohere.summarize({ 
        text: texto,
        length: 'auto',
        format: 'auto',
        model: 'summarize-xlarge',
        additional_command: '',
        temperature: 0.3,
      }); 
      let datos;
      texto2 = response.body.summary;
      console.log('Summary:', response.body.summary); 
      const textToTranslate = texto2;
      try {
        // Traduce el texto utilizando la API de Google Cloud
        const [translation] = await translate.translate(textToTranslate, targetLanguage);
    
        // Imprime la traducción
        console.log(`Texto original (${sourceLanguage}): ${textToTranslate}`);
        console.log(`Traducción (${targetLanguage}): ${translation}`);
        console.log('ajajajajajajaj');
        console.log(translation);
        let datos =[{traduc:translation,texto:texto2}]
        res.send(datos);
      } catch (error) {
        console.error('Error al traducir:', error);
      }
      
    
})


module.exports = router;