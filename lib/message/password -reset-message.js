const sendEmail = require ("../helpers.js/sendEmail");

const clientURL = process.env.CLIENT_URL;

async function sendPasswordRest (email,token)