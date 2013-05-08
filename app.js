var USER_OR_GROUP_NAME = 'friendlyswiss';
if (! USER_OR_GROUP_NAME) { 
  throw new Error(
    'You must set your GitHub username or group name in the app.js file'); 
}
var utils = require('./utils');
var app = utils.initializeWebApp();
var db = utils.connectToDatabase(USER_OR_GROUP_NAME);

//GET a collection of route resources
app.get('/routes/',         // TODO: change to suit your URI design. 
  function(req, res) {

    var item_type = 'route'; // TODO: change to the type of item you want.

    // Get all items of the specified type from the database.
    db.getAll(item_type, function(err, items) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 

      // Otherwise, use the returned data to render an HTML page.
      else {
        res.render(
          'routes',   // TODO: change to the name of your HTML template.
          { items: items }
        );
      }
    });
  }
);

//GET a collection of hiker resources
app.get('/hikers/',         // TODO: change to suit your URI design. 
  function(req, res) {

    var item_type = 'hiker'; // TODO: change to the type of item you want.

    // Get all items of the specified type from the database.
    db.getAll(item_type, function(err, items) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 

      // Otherwise, use the returned data to render an HTML page.
      else {
        res.render(
          'hikers',   // TODO: change to the name of your HTML template.
          { items: items }
        );
      }
    });
  }
);

//GET a collection of route resources, filtered by some criteria (i.e. searching)
app.get('/routes/',          // TODO: change to suit your URI design. 
  function(req, res) {

    var item_type = 'route'; // TODO: change to the type of item you want.

    // Get items of the specified type that match the query.
    db.getSome(item_type, req.query, function(err, items) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 

      // Otherwise, use the returned data to render an HTML page.
      else {
        res.render(
          'routes', // TODO: change to the name of your HTML template.
          { items: items }
        );
      }
    });
  }
);

//GET a single route resource
app.get('/routes/:id',       // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'route'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      } 

      // Otherwise, get the items potentially related to this item.
      else {
        
        var related_type = 'hiker'; // TODO: change to type of related item.

        // Get all items of the specified related type.
        db.getAll(related_type, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); } 

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
              'route', // TODO: change to name of your HTML template.
              { item: item, related_items: items }
            );
          }
        });
      }
    });
  }
);

//GET a single hiker resource
app.get('/hikers/:id',      // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'hiker'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      } 

      // Otherwise, get the related items associated with this item.
      else {
        
        var related_type = 'route'; // TODO: change to type of related item.

        // Set our query to find the items related to the requested item.
        req.query.hiker = item_id; // TODO: change `party` to reflect the
                                   // relation between the item fetched above
                                   // and the related items to be fetched below.

        // Get items of the specified type that match the query.
        db.getSome(related_type, req.query, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); } 

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
            'hiker', // TODO: change to the name of your HTML template.
              { item: item, related_items: items }
            );
          }
        });
      }
    });
  }
);

//Use PUT to create or update a route using the ID specified in the URI
app.put('/routes/:id',      // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item ID from the URI.
    var item_id = req.params.id;

    // Get the item info that was PUT from the input form.
    // See the form in `views/routes.ejs`.
    var item = req.body.item;
    
    item.type = 'route'; // TODO: change to the type of item you want

    // Save the new item to the database, specifying the ID.
    db.save(item_id, item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

//Use PUT to create or update a hiker using the ID specified in the URI
app.put('/hikers/:id',
  function(req, res) {
  
    // Get the item ID from the URI.
    var item_id = req.params.id;

    // Get the item info that was PUT from the input form.
    // See the form in `views/hikers.ejs`.
    var item = req.body.item;
    
    item.type = 'hiker'; // TODO: change to the type of item you want

    // Save the new item to the database, specifying the ID.
    db.save(item_id, item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

//POST a new resource
app.post('/routes/',
  function(req, res) {
  
    // Get the item info that was POSTed from the input form.
    // See the form in `views/one-party.ejs`.
    var item = req.body.item;

    item.type = 'route'; // TODO: change to the type of item you want

    // Save the new item to the database. (No ID specified, it will be created.)
    db.save(item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

// Handle GET of the "index" resource.
app.get('/', function(req, res) { res.render('index'); });

// Start listening for incoming HTTP connections.
app.listen(process.env.PORT);
