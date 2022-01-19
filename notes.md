### Core Types
- **number**: `1, 5.3, -10` / all numbers, no differentiation between integers or floats
- **string**: `'Hi', "Hi", Hi (template literal)` / all text values
- **boolean**: `true, false` / just these two, no "truthy" or "falsy" values
- **object**: `{age: 30}` / any javascript object, more specific types (type of object) are possible
- **array**: `[1, 2, 3]` / any javascript array, type can be flexible or strict (regarding the element types)
- **tuple**: `[1, 2]` / added by Typescript: fixed-length array
- **enum**: `enum { NEW, OLD }` / added by Typescript: automatically enumerated global constant identifiers
- **any**: `*` / any kind of value, no specific type assignment

### 2.12
- JavaScript: **dynamic types** / (resolved at runtime)
- TypeScript is **static types** / (set during development)

### 2.13 - Important: Type Casing
- In TypeScript, you work with types like `string` or `number` all the time.
- **important**: It is `string` and `number` (etc.), **NOT** `String`, `Number` etc.
- The core primitive types in TypeScript are all lowercase!

### 2.17
- object types can also be created for **nested objects**.
- let's say you have this JS **object**:
```
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
```
- this would be the **type** of such an object:
```
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```
- so you have an object in an object type so to say.

### 2.25 - Type Aliases & Object Types
- Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.
- For example:
```
type User = { name: string; age: number };
const u1: User = { name: 'Kenny', age: 29 }; // this works!
```
- This allows you to avoid unnecessary repetition and manages types centrally.
- For example:
```
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }), checkAge: number) {
  return checkAge > user.age;
}
```
- To:
```
type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```
