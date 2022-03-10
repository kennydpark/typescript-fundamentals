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


function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

// console.log(merge({ name: 'Kenny' }, {age: 29 }));

const mergedObj = merge({ name: 'Kenny', hobbies: ['Tennis'] }, {age: 30});
console.log(mergedObj.age)

// the 2 types are set dynamically when the function is called
