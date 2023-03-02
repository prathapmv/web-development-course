//IIFE - Immediately Invoked Function Expression
(function (window) {
    var prathapGreeter = {};

    prathapGreeter.name = "Prathap";
    prathapGreeter.sayHello = function () {
        console.log("Hello " + prathapGreeter.name);
    }

    window.prathapGreeter = prathapGreeter;

}) (window);