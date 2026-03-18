# Array Higher-Order Functions

**ID**: `array-higher-order-functions`
**Duration**: 25 menit

## Materi

### map
```javascript
const angka = [1, 2, 3];
const kuadrat = angka.map(x => x * x); // [1, 4, 9]
```

### filter
```javascript
const genap = angka.filter(x => x % 2 === 0); // [2]
```

### reduce
```javascript
const total = angka.reduce((a, b) => a + b, 0); // 6
```

### Chaining
```javascript
angka.filter(x => x > 1).map(x => x * 10); // [20, 30]
```

## Rangkuman
- map = transform, filter = saring, reduce = akumulasi
