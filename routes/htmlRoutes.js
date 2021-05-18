
const path = require('path');


module.exports = (app) => {

  app.get('/tickets', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/tickets.html'));
  });

  app.get('/patient', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/patient.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
