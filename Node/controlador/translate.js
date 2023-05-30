const cohere = require('cohere-ai'); 
const texto = 'Sobre el amo: “Eros”\n\nSueños de sol escarlata,\ncumplidos bajo la cómplice luna,\nSueños de un amor candente y fugaz\nque solo el tiempo comprende\ny deshace por gustos y jugarretas motivadas por nuestros actos.\nMira como el mar blanco paz\nde un Ágape comprensivo, se consume\nen la cristalinidad de los sentimientos de pasión y deseo,\nde un oscuro anochecer\nel cual ocurre las veces que deseemos en la vida.\n\nMira al Eros, \nMira sus ojos negros y penetrantes,\nEscucha sus latidos macabros y candentes.\nSolo busca trofeos,\nEs una búsqueda eterna de placer, \nes un demonio\nque solo nos busca para un placer temporal y efímero.\n\nMe persigue,\nY huyo,\nSe me acerca\nY mi corazón explota.\n¿Qué es esto?\nNo conocía esta faceta,\nEste ardor, emoción y deseo,\nNo es normal\nPero me gusta\n\nPánico, \nNo sé qué dirán de mí\nPero no me importa,\nLo amo.\nPero tampoco es una opción que lo sepa,\n¿Y cómo él sabrá?\n\nEs fácil\nJugare con él, \nReiré coquetamente\nY lo miraré,\nCuando el me vea,\nQuitare mi mirada.\n\nEste es juego putrefacto, \nDonde quien demuestra el amor pierde\nEs como un demonio,\nSus alas son negras y oscuras,\nSus palabras filosas y seductoras,\nSu apariencia tosca pero atractiva\n\nLo veo llegar y tiemblo,\nCuando lo veo de frente,\nSe acerca,\nY pierdo…\n\nDespués de dejarme llevare por deseos más primitivos,\nMas profundos y ser libre,\nMe doy cuenta de que me (encadene) yo sola,\n\nPánico,\nLo busco y no esta\n¿Lo demás lo vieron partir, a dónde?\nMe dejo sola, \n¿Me uso?\n¿Este es mi pago, por entregar mi amor?\n\nY tú, \n(como vez al Eros?\nComo un atractivo demonio que te seduce en una noche de pasión,\nComo un amor carnal y fugaz que nadie entenderá,\nComo una pareja que sabe que todo terminara porque son incapaz de amar,\nO como una enamorada que se deja ilusionar con promesas vacías\nPromesas carnales,\nPromesas temporales,\nPromesas como Eros\n'
let texto2
cohere.init('3AwIkSIwZi6c4aFZZLQYug4QFgU0dfNISYZSpGJb'); // This is your trial API key

process.env.GOOGLE_APPLICATION_CREDENTIALS = 'C:/Users/User/Desktop/IA/Final/Node/sonorous-sign-387807-125648f99467.json';
const { Translate } = require('@google-cloud/translate').v2;

// Crea una instancia del cliente de traducción
const translate = new Translate();

// Define el texto a traducir y el idioma de origen

const sourceLanguage = 'en';

// Define el idioma al que se desea traducir
const targetLanguage = 'es';


async function resumen(){
(async () => { 
  const response = await cohere.summarize({ 
    text: texto,
    length: 'auto',
    format: 'auto',
    model: 'summarize-xlarge',
    additional_command: '',
    temperature: 0.3,
  }); 
  
  console.log('Summary:', response.body.summary); 
  texto2 = response.body.summary;
  const textToTranslate = texto2;
  try {
    // Traduce el texto utilizando la API de Google Cloud
    const [translation] = await translate.translate(textToTranslate, targetLanguage);

    // Imprime la traducción
    console.log(`Texto original (${sourceLanguage}): ${textToTranslate}`);
    console.log(`Traducción (${targetLanguage}): ${translation}`);
  } catch (error) {
    console.error('Error al traducir:', error);
  }
})();
}


async function translateText() {
  try {
    // Traduce el texto utilizando la API de Google Cloud
    const [translation] = await translate.translate(textToTranslate, targetLanguage);

    // Imprime la traducción
    console.log(`Texto original (${sourceLanguage}): ${textToTranslate}`);
    console.log(`Traducción (${targetLanguage}): ${translation}`);
  } catch (error) {
    console.error('Error al traducir:', error);
  }
}

// Ejecuta la función de traducción
resumen();
//translateText();
