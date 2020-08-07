const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const credentials = require('./email');

let url = `smtps://${credentials.email}%40gmail.com:${credentials.pass}@smtp.gmail.com:465`;
let transporter = nodemailer.createTransport(url);

exports.sendEmail = functions.https.onRequest( (req, res) => {
    cors(req, res, () => {
        let from = '"Spa Saude" <spasaude.fisio@gmail.com>';
        let to = 'larissatf@yahoo.com.br';
        let subject = 'Reserva de Horário';
        let text = `Olá, gostaria de reservar ${req.complete} Massagens Completas, ${req.stones} Massagem com Pedras, ${req.relax} Massagem Relaxante, e ${req.celulite} Tratamento
            para Celulite, para ${req.date.toString()}.`;
        let html = `Olá, gostaria de reservar ${req.complete} Massagens Completas, ${req.stones} Massagem com Pedras, ${req.relax} Massagem Relaxante, e ${celulite} Tratamento
            para Celulite, para ${req.date.toString()}.`;

        let email = {
            from,
            to,
            subject,
            text,
            html,
        }

        transporter.sendMail(email, (e, info) => {
            if (e) {
                return console.log(e);
            }
            return console.log('Mensagem enviada');
        });
    });
});



