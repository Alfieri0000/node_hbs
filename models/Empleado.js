var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    dni: {type: String, required: true},
    sexo: {type: String, required: true},
    telefono: {type: String, required: true},
    created_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Empleado',EmpleadoSchema);