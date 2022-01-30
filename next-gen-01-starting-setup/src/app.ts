const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Kenny',
  age: 29
};

const copiedPerson = { ...person };

// rest params

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(1,2,3,4,5);
console.log(addedNumbers);

// destructuring

const [ hobby1, hobby2, ...remainingHobbies ] = hobbies;

const { firstName: userName, age } = person;
