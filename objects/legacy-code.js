//Object.prototype

let student = Object.create(Object.prototype);  //must declare Object.prototype or null (don't inherit) to establish 'inheritance' 
student.firstName = "Jane";
student.lastName = "Smith";
student.age = 23;

Object.prototype.hello = function() {
    console.log("Hello " + this.firstName + " from prototype");
}

let student2 = Object.create(student);
//student2.firstName = "Mark"; adding this declaration of the 'student2.firstName' property value results in a return of the new value since the value is provided before 'inheritance' needs to source the value from previous levels above

console.log(student2.firstName);  //returns: Jane
student2.hello();  //returns: Hello Jane from prototype; looks in student2 for 'hello', then student, then Object.prototype === "INHERITANCE"
student.hello(); //added this after creating concatenation with reference to 'this.firstName' in 'hello()' function; returns: Hello Jane from prototype

//CONSTRUCTOR: begins with capital letter (not incorrect)
function Student() {
    this.firstName = "Jack";
    //This can be achieved differently: this.firstName = first;

}

let student3 = new Student();
//And per the comment above: let student1 = new Student("Jack");


console.log(student3.firstName);  //returns: Jack