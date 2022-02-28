const names: Array<string> = ['Kenny', 'Bob']; // string[]
names[0].split(' ');
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

promise.then(data => {
  data.split(' ');
})

// specifying data type that'll be stored as incoming data for better TS support whenever workign w/ generics
