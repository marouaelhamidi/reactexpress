var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ModuleSchema   = new Schema({
    libelle: String,
    nombre_h:Number,
    description:String
    
});

module.exports = mongoose.model('Module', ModuleSchema);