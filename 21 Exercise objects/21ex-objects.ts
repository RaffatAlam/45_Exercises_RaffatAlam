/*They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/
interface personalData {
    Name : string;
    Age : number;
    Student : boolean;
    Address : string ;
    Email : string;
}

let personalData = {
    Name : "Raffat Alam",
    Age  : 30 ,
    Student : true ,
    Address : "H/No: 126 block 18, F B Area  Karachi",
    Email : "raffatkhanzadah@gmail.com",
};

console.log(personalData);