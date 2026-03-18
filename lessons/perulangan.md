## Tujuan Pembelajaran

- Menggunakan for, while, do-while

- for...of dan for...in untuk iterasi

- break, continue, dan label

## Materi

### For Loop

```
// Traditional for
for (let i = 0; i < 5; i++) {
    console.log(i); // 0,1,2,3,4
}

// For...of (iterasi nilai) - untuk Array, String, Map, Set
const buah = ["apel", "jeruk", "mangga"];
for (const item of buah) {
    console.log(item);
}

// For...in (iterasi key/index) - untuk Object
const user = {nama: "Archon", umur: 25};
for (const key in user) {
    console.log(\`\${key}: \${user[key]}\`);
}
```

### While

```
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while (minimal 1x jalan)
do {
    console.log("Jalan sekali");
} while (false);
```

### Array Methods (Lebih Modern)

```
buah.forEach(item => console.log(item));
const hasil = buah.map(item => item.toUpperCase());
const filter = buah.filter(item => item !== "jeruk");
```

## Rangkuman

Pelajari perulangan: loop dengan praktik langsung.
← Kembali