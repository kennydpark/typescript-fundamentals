"use strict";
// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple, for setting exact length and data type of array
// } = {
//   name: 'Kenny',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Kenny',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin'); // push method is somehow an exception
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
let favoriteActivities;
favoriteActivities = ['Sports', 1];
console.log('name:', person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); // works because it knows each hobby is a type string
    // console.log(hobby.map()); // error because data types are not arrays
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
