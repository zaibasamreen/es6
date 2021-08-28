const person = {
    name:"zaiba",
    place: "mysore",
    state:"karnataka",
}
const {fname,city,third} =person;
console.log(person);
const hello = person.name;
console.log(hello);


//object destructing
const number= [1,2,3]
const num2 = [,5,6,7]
const combine = [number+num2]
console.log(combine);

//spread operator
const spread = [...number, place="bangalore",...num2]
console.log(spread);