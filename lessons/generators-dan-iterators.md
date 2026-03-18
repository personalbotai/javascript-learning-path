## Tujuan Pembelajaran

- Membuat generator function dengan function*
- Yield untuk lazy evaluation
- Custom iterators dengan Symbol.iterator

## Materi

### Generator Function

```
function* counter() {
 yield 1;
 yield 2;
 yield 3;
}

const gen = counter();
gen.next(); // {value: 1, done: false}
gen.next(); // {value: 2, done: false}
gen.next(); // {value: 3, done: false}
gen.next(); // {value: undefined, done: true}

// Iterasi
for (const val of counter()) {
 console.log(val); // 1, 2, 3
}
```

### Infinite Generator

```
function* fibonacci() {
 let [a, b] = [0, 1];
 while (true) {
 yield a;
 [a, b] = [b, a + b];
 }
}

const fib = fibonacci();
fib.next().value; // 0
fib.next().value; // 1
fib.next().value; // 1
fib.next().value; // 2
```

### Custom Iterator

```
const range = {
 from: 1, to: 5,
 [Symbol.iterator]() {
 let current = this.from;
 const last = this.to;
 return {
 next() {
 return current 
## Rangkuman
Pelajari generators dan iterators dengan praktik langsung.
← Kembali