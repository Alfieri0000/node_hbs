var mongoose = require('mongoose');
var Producto = require('../models/Producto');

var productoController = {};

productoController.list = function(req, res) {

    Producto.find({}).exec(function(err, productos) {
        if( err ) {
            console.log('Error: ',err);
            return;
        }
        res.render('../views/producto/index',{productos: productos});
    });
};

productoController.create = function(req, res) {
    res.render('../views/producto/create' );    
};

productoController.save = function(req, res){
    var producto = new Producto( req.body );
    
    producto.save(function(err){
        if( err ){ 
            console.log('Error: ', err); 
            return; 
        }
        
        console.log("Producto creado exitosamente)");
        res.redirect("/productos/show/" + producto._id);
        //res.redirect("/usuarios");
    });
};

productoController.show = function(req, res) {

    Producto.findOne({ _id: req.params.id }).exec(function(err, producto) {
        if( err ) {
            console.log('Error: ',err);
            return;
        }
        res.render('../views/producto/show',{producto: producto});
    });
};

module.exports = productoController;
