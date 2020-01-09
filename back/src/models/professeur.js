var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProfesseurSchema   = new Schema({
    first_name: String,
    last_name: String,
    email:String,
    mobile:Number,
    fixe:String,
    module:String
});

module.exports = mongoose.model('Professeur', ProfesseurSchema);