const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const nodemailer = require('nodemailer');
const credentials = require('./email');

let url = `smtps://${credentials.email}%40gmail.com:${credentials.pass}@smtp.gmail.com:465`;
let transporter = nodemailer.createTransport(url);

exports.sendEmail = functions.https.onRequest(async (req, res) => {
    console.log(req.body);

    const complete = req.body.complete;
    const stones = req.body.stones;
    const relax = req.body.relax;
    const celulite = req.body.celulite;
    const date = req.body.date.toString();

    let from = '"Spa Saude" <spasaude.fisio@gmail.com>';
    let to = 'williamguilhermesouza@gmail.com';
    let subject = 'Reserva de Horário';
    let text = `Olá, gostaria de reservar ${complete} Massagens Completas, ${stones} Massagem com Pedras, ${relax} Massagem Relaxante, e ${celulite} Tratamento
        para Celulite, para ${date}.`;
    let html = `Olá, gostaria de reservar ${complete} Massagens Completas, ${stones} Massagem com Pedras, ${relax} Massagem Relaxante, e ${celulite} Tratamento
        para Celulite, para ${date}.`;

    let email = {
        from: from,
        to: to,
        subject: subject,
        text: text,
        html: html,
    }

    transporter.sendMail(email, (e, info) => {
        if (e) {
            return console.log(e + info);
        }
        return console.log('Mensagem enviada');
    });
});



