const names: Array<string> = ['Kenny', 'Bob']; // string[]
names[0].split(' ');
const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

promise.then(data => {
  data.split(' ');
})

// specifying data type that'll be stored as incoming data for better TS support whenever workign w/ generics


function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

// console.log(merge({ name: 'Kenny' }, {age: 29 }));

const mergedObj = merge({ name: 'Kenny', hobbies: ['Tennis'] }, {age: 30});
console.log(mergedObj)

// the 2 types are set dynamically when the function is called

// use 'extends' keyword to guarantee a certain datatype (setting constraints on generic types)

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got ' + 1 + ' element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));

// ^ unspecified data type, just as long as it has a length property from the constraint
