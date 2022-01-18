### Core Types
- **number**: `1, 5.3, -10` / all numbers, no differentiation between integers or floats
- **string**: `'Hi', "Hi", Hi (template literal)` / all text values
- **boolean**: `true, false` / just these two, no "truthy" or "falsy" values
- **object**: `{age: 30}` / any javascript object, more specific types (type of object) are possible

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
