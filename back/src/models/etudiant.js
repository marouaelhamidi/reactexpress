var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EtudiantSchema   = new Schema({
    first_name: String,
    last_name: String,
    email:String,
    mobile:Number,
    fixe:Number,
    module:String,
    age:Number,
    niveau : Number,
    filliere : String
});

module.exports = mongoose.model('Etudiant', EtudiantSchema);