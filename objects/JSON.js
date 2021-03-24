let lamp = {
    type: "desk",
    //or "type-of-lamp": "desk" can allow for hyphenated keys
    //otherwise use camelCasing as below
    brightnessOfBulb: 60,
    turnedOn: true,
    manufacturer: {
        name: "Big Electric Company",
        model: "ABC1234",
        locations: ["USA", "Germany", "UK"]
    },
    turnLampOnOrOff: function() {
        console.log("The lamp will turn on or off")
    },
    lampReport: function() {
        console.log("This lamp is a " + this.type + " lamp");
        //Here, the 'this' keyword is used to reference the object key from within it.
    }
};


console.log(lamp.type);  //desk
console.log(lamp.brightnessOfBulb);  //60
console.log(lamp.turnedOn);  //true
console.log(lamp.manufacturer);  /*{
    name: 'Big Electric Company',
    model: 'ABC1234',
    locations: [ 'USA', 'Germany', 'UK' ]
  }*/
console.log(lamp.manufacturer.model); //ABC1234
lamp.turnLampOnOrOff(); //when an object key has a value of a function, calling the function as the property of the object will print to the console.
//The lamp will turn on or off
console.log(typeof lamp.brightnessOfBulb);  //number

lamp.lampReport();  //This lamp is a desk lamp
lamp.type = "overhead"; //can alter the key's value and return the updated value
lamp.lampReport();  //This lamp is a overhead lamp
