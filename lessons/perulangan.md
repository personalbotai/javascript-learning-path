# Perulangan: Loop

**ID**: `perulangan`
**Duration**: 20-25 menit

## Materi

### For Loop
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### For...of (values)
```javascript
const buah = ["apel", "jeruk", "mangga"];
for (const item of buah) {
    console.log(item);
}
```

### For...in (keys)
```javascript
const user = {nama: "Archon", umur: 25};
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}
```

### While
```javascript
let i = 0;
while (i < 3) {
    console.log(i++);
}
```

### Array Methods
```javascript
buah.forEach(x => console.log(x));
buah.map(x => x.toUpperCase());
```
