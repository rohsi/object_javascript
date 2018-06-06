class Person{
    constructor(name, noOfYears, print){
        this.name=name;
        this.age = noOfYears;
        this.print = print
    }
    printMyName(){
        console.log(this.name+ " Aged "+ this.age);
    }
}

const person1=new Person("rohit", 24, function(){console.log("Namaskar I am "+ this.name)});

const person2 = new Person("Mohit ", 32, function(){console.log("Hello I am "+ this.name )})

person2.print()
person1.print()

