class PersonId{
 name = 'mohammed';

 constructor(){
     this.age = 37;
 }

 greeting(){
     console.log('My name is '+this.name+', My age is '+ this.age)
 }

}

//PersonId.greeting(); //in static classes
const test = new PersonId;
test.greeting();
//************************************************************ */

class Person{
    name = 'mohammed';
   
    constructor(){
        this.age = 37;
    }
   
    static greeting(){
        console.log('My name is '+this.name+', My age is '+ this.age)
        if(this.name || this.age === undefined){
            console.log('the static method incorrect');
        }
    }
   
   }

   Person.greeting();//static method dont use the constructor method.
   //******************************************************* */

function constructorFunc(){
    this.name='mohammed';
    this.age = 37;
    this.greeting = function(){//nested function in the constructor finction.
        console.log('My name is '+this.name+', My age is '+ this.age)
    }
    return this.greeting();

}
const conFunc = new constructorFunc();//apply constructor function such as normal class(not static class).
conFunc.greeting();

//*************************************************** */

/*
        Q/why we use new to identfy the function or class?
        A/ To get return form function or class even it dont have it in codes.
           Whatever, if the function or class has a return it will work correct.

        As new usually used with classes.
        
*/
