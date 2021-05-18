

const ticketData = require('../data/ticketData');


module.exports = (app) => {


  app.get('/api/tickets', (req, res) => {
    const search = req.query.search.toLowerCase();
    if (search) {
      const tickets = ticketData.filter(ticket => ticket.patientID.toLowerCase().includes(search)||ticket.patientName.toLowerCase().includes(search)||ticket.patientDob.toLowerCase().includes(search))
      res.json(tickets)
    } else {res.json(ticketData)}
    });


  app.post('/api/tickets', (req, res) => {

      ticketData.push(req.body);
      res.json(true);
  });

  app.get('/api/patient', (req, res) => {
    const search = req.query.search.toLowerCase();
    if (search) {
      const tickets = ticketData.filter(ticket => ticket.patientID.toLowerCase().includes(search)||ticket.patientName.toLowerCase().includes(search)||ticket.patientDob.toLowerCase().includes(search))
      res.json(tickets)
    } else {res.json(ticketData)}
    });


  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    ticketData.length = 0;

    res.json({ ok: true });
  });
};
