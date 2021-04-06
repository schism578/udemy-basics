//notice curly braces without parentheses in class declaration
class Person {
    constructor() {  //"default constructor"
        this.firstName = "Mark";
        this.lastName = "Jones";
    }
    /*
    We can apply parameters too:
    constructor(first, last) {  
        this.firstName = first;
        this.lastName = last;
    }
    By utilizing INHERITANCE, we can dynamically evoke properties through our code with this kind of method
    */

    //for functions WITHIN a constructor (remember React module and apps), no 'function' keyword needs to be used
    hello() {
        console.log("Hello " + this.firstName + " from the object");
        console.log("Hello " + this.firstName + " your major is " + this.major);
    }
}

class Student extends Person {
    constructor(first, last, major) {

        super(first, last);
        this.major = major;
        this.tuitionPaid;
    } 

    get studentFirstName() {
        return this.firstName;
    }

    set payment(amount) {
        if(amount >= 100) {
            this.tuitionPaid = amount;
        } else {
            console.log("Amount paid must be over $100");
        }
    }

    get payment() {
        if(this.tuitionPaid >= 100) {
            console.log("The amount you paid is $" + this.tuitionPaid);
        } else {
            return this.tuitionPaid;
        }
    }
}

//notice parentheses here in instatiation of new class object
let person = new Person();
person.hello();  //returns: Hello Mark from the object AND Hello Mark your major is undefined; 'undefined' occurs because 'major' is not instantiated until the Student class is created later

let student1 = new Student("Mark", "Jones", "Math")
student1.hello();  //returns: Hello Mark from the object AND Hello Mark your major is Math; since we have 'major' instantiated within the Student class, Mark's major becomes declared
console.log(student1.studentFirstName);  //returns: Mark; through 'get' method
//assigning the value here calls the 'setter' method
student1.payment = 75;  //returns: Amount paid must be over $100
student1.payment = 150;  //returns: The amount you paid is $150
//calling the property here calls the 'getter' method
student1.payment;  //returns: The amount you paid is $150