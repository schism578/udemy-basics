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
        if(this.turnedOn = true) {
            this.turnedOn = false;
        } else {
            this.turnedOn = true;
        }
        console.log(this.turnedOn);  //false
    },
    lampReport: function() {
        console.log("This lamp is a " + this.type + " lamp");
        //Here, the 'this' keyword is used to reference the object key from within it.
    },
    lampStateReport: function() {
        this.turnLampOnOrOff();
        if(this.turnedOn == true) {
            console.log("The lamp is turned on");
        } else {
            console.log("The lamp is turned off");
        }
    }
};

lamp.lampStateReport();  //The lamp is turned off