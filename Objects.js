// let obj={
//     name:"Jyoshna"

// }
// console.log(obj);

let person={
    name:"Jyoshna",
    email:"jyo@gmail.com",
    age:21,
    status:true,
    children:{
        name:"joy"
    },
    hobbies:['Reading',"writing",true,100,null]
};
let clickedName='name';
console.log(person[clickedName]);
console.log(person.clickedName);

// console.log(typeof person.name);
// console.log(typeof person.status);
// console.log(person['age']); //person.age
// console.log(person[children]);

person['country']="India";
console.log(typeof person.hobbies);
