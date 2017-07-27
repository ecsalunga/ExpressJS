// DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sample');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});

// models
var userSchema = mongoose.Schema({
    name: String,
    email: String
});
var User = mongoose.model('Users', userSchema);

// server
var express         = require('express');
var app             = express();                                
var bodyParser      = require('body-parser');                  
var methodOverride  = require('method-override');               

app.use(express.static(__dirname + '/public'));                 // set the static files
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// Angular page
app.get('index.html', function(req, res) {
    res.sendfile('./public/index.html');
});

// Web API routes
var router = express.Router();   
router.route('/users')
.post(function(req, res) {
    var user = new User();      
    user.name = req.body.name;
    user.email = req.body.email;

    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: user.name + ' created!' });
    });
})
.get(function(req, res) {
    User.find(function(err, items) {
        if (err)
            res.send(err);

        res.json(items);
    });
});
app.use('/api', router);

app.listen(8087);
console.log("App listening on port 8087");