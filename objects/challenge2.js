class Auto {
    constructor(model, cylinders) {
        this.model = model;
        this.cylinders = cylinders;
    }

    get car() {
        return this.model;
    }

    get engine() {
        return this.cylinders;
    }

    start() {
        return "The engine was started"
    }

    accelerate() {
        return "The car is accelerating"
    }

    brake() {
        return "The car is braking"
    }
}

class Porsche extends Auto {
    constructor(name, model, cylinders) {  //need to pass parameters in to provide vehicles for name, model, and cylinders
        super(model, cylinders);  //these are inherited from Auto class
        this.name = name;  //need to implement a name value as it does not exist in the parent class
    }

    get carName() {
        return this.name;
    }

    start() {
        return "The " + this.carName + " " + this.model + " rumbles...";
    }

    accelerate() {
        return "The " + this.carName + " " + this.model + " is accelerating";
    }

    brake() {
        return "The " + this.carName + " " + this.model + " is braking";
    }

    cylinderCount() {
        return "The " + this.carName + " " + this.model + " has " + this.cylinders + " cylinders";
    }
}

let porsche = new Porsche("Porsche", "911", 8);
console.log(porsche.start());
console.log(porsche.accelerate());
console.log(porsche.brake());
console.log(porsche.cylinderCount());

class AMC extends Auto {
    constructor(name, model, cylinders) {  //need to pass parameters in to provide vehicles for name, model, and cylinders
        super(model, cylinders);  //these are inherited from Auto class
        this.name = name;  //need to implement a name value as it does not exist in the parent class
    }

    get carName() {
        return this.name;
    }

    start() {
        return "The " + this.carName + " " + this.model + " squeals and clatters";
    }

    accelerate() {
        return "The " + this.carName + " " + this.model + " is accelerating";
    }

    brake() {
        return "The " + this.carName + " " + this.model + " is braking";
    }

    cylinderCount() {
        return "The " + this.carName + " " + this.model + " has " + this.cylinders + " cylinders";
    }
}

let amc = new AMC("AMC", "Gremlin", 2);
console.log(amc.start());
console.log(amc.accelerate());
console.log(amc.brake());
console.log(amc.cylinderCount());

class Mazda extends Auto {
    constructor(name, model, cylinders) {  //need to pass parameters in to provide vehicles for name, model, and cylinders
        super(model, cylinders);  //these are inherited from Auto class
        this.name = name;  //need to implement a name value as it does not exist in the parent class
    }

    get carName() {
        return this.name;
    }

    start() {
        return "The " + this.carName + " " + this.model + " purrs";
    }

    accelerate() {
        return "The " + this.carName + " " + this.model + " is ZOOM ZOOM";
    }

    brake() {
        return "The " + this.carName + " " + this.model + " is smooth to a halt";
    }

    cylinderCount() {
        return "The " + this.carName + " " + this.model + " has " + this.cylinders + " cylinders";
    }
}

let mazda = new Mazda("Mazda", "6", 4);
console.log(mazda.start());
console.log(mazda.accelerate());
console.log(mazda.brake());
console.log(mazda.cylinderCount());

/*
The return is as follows:

The Porsche 911 rumbles...
The Porsche 911 is accelerating
The Porsche 911 is braking
The Porsche 911 has 8 cylinders
The AMC Gremlin squeals and clatters
The AMC Gremlin is accelerating
The AMC Gremlin is braking
The AMC Gremlin has 2 cylinders
The Mazda 6 purrs
The Mazda 6 is ZOOM ZOOM
The Mazda 6 is smooth to a halt
The Mazda 6 has 4 cylinders
*/