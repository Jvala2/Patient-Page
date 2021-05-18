// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const ticketData = require('../data/ticketData');

// ROUTING

module.exports = (app) => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get('/api/tickets', (req, res) => {
    const search = req.query.search.toLowerCase();
    if (search) {
      const tickets = ticketData.filter(ticket => ticket.patientID.toLowerCase().includes(search)||ticket.patientName.toLowerCase().includes(search)||ticket.patientDob.toLowerCase().includes(search))
      res.json(tickets)
    } else {res.json(ticketData)}
    });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post('/api/tickets', (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
      ticketData.push(req.body);
      res.json(true);
  });


  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    ticketData.length = 0;

    res.json({ ok: true });
  });
};
