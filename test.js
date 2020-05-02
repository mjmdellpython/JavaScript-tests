const obj = {
    name:'mohammed',
    func: function(){
       console.log('Normal test: ' + obj.name);
    }
}
obj.func(); //In normanl way
//**************************************//

const objCall = {
    name:'mohammed',
    func: function(n){
        console.log('Call test: '+ this.name + ' and ' + n);
    }
}
//New object to test call method.
const objCalltest = {
    name:'hasan'
}

//Use the call method to active objCall as constant to use other objects
//call(name of object, other parameter ). the new object should has the same name
//of argument of the constant object.
objCall.func.call(objCalltest,'ahmed');

//*******************************************//

const objApply = {
    name: 'mohammed',
    func :function(n){
        console.log('Apply test: ' + this.name +'  '+ n);
    }
}

const objApplytest={
    name:'Rasha'
}
const arr = [1,2,3];

//Apply method is the same call with use the [] for array to call method as below:

objApply.func.apply(objApplytest ,['ahmed']);
//For use arr in Apply() method the same should use [].
objApply.func.apply(objApplytest,arr);//arr = arr[0] = 1

//***********************************************//
//the Original object
const objBind= {
    name:'moahmmed',
    func: function(x,y,z){
        return this.name +' '+ x +' '+ y +' '+ z;
    }
}
//the object for test
const objBindtest1 ={
    name:'binding value/',

}
//any other object can add to the new binding object for test
const objBindtest2 = {
    idHasan: 'add value 1, ',
    idAhmed: 'add value 2, ',
    idRasha: 'add value 3'

}

const binding = objBind.func.bind(objBindtest1);
console.log (binding(objBindtest2.idAhmed,
        objBindtest2.idHasan,
        objBindtest2.idRasha));
