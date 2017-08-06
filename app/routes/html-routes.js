// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // add code to send the view.html file
  app.use("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/homefill.html"));
  });

 

};
