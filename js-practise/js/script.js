let x = 118;

var a = 7;
var b = a;

//console.log("a: " + a);
//console.log("b: " + b);

b = 5;
//console.log("after b update:")
//console.log("a: " + a);
//console.log("b: " + b);

// Function Constructors
function Circle(radius){
    this.radius = radius;
}

Circle.prototype.getArea = 
function () {
    return Math.PI * Math.pow(this.radius, 2);
}
 
var myCircle = new Circle(10); // new Object
//console.log(myCircle);

var literalCircle = {
    radius: 10,

    getArea: function () {
        //console.log(this);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

//console.log(literalCircle.getArea())

function makeMultiplier (multiplier) {

    function b () {
        //console.log("Multiplier is: " + multiplier);
    }
    b();
    return (
        function (x) {
            return multiplier * x;
        }
    );
}

var doubleAll = makeMultiplier(2);
//console.log(doubleAll(10));

prathapGreeter.sayHello();