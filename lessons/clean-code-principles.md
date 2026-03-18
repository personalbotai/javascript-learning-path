# Clean Code Principles

**ID**: `clean-code-principles`
**Type**: lesson  
**Duration**: 25-30 menit
**Tags**: javascript, best-practices, clean-code

## Tujuan Pembelajaran
- Memahami prinsip clean code dalam JavaScript
- Menulis kode yang mudah dibaca dan dipelihara
- Menghindari common anti-patterns

## Materi

### Naming Conventions
```javascript
// ❌ Buruk
const x = 5;
const d = new Date();
function f(a, b) { return a * b * 0.1; }

// ✅ Baik
const taxRate = 0.1;
const currentDate = new Date();
function calculateTotalWithTax(price, quantity) {
    return price * quantity * taxRate;
}
```

### Function Size
```javascript
// ❌ Function terlalu besar
function processUser(user) {
    // validasi... 20 lines
    // transformasi... 30 lines
    // API call... 25 lines
    // logging... 10 lines
}

// ✅ Pisahkan menjadi fungsi kecil
function validateUser(user) { /* ... */ }
function transformUserData(user) { /* ... */ }
async function saveUser(user) { /* ... */ }
function logUserAction(action) { /* ... */ }
```

### DRY (Don't Repeat Yourself)
```javascript
// ❌ Duplikasi
function calculateCircleArea(r) { return 3.14 * r * r; }
function calculateCylinderVolume(r, h) { return 3.14 * r * r * h; }

// ✅ Reuse
const PI = 3.14;
function circleArea(r) { return PI * r * r; }
function cylinderVolume(r, h) { return circleArea(r) * h; }
```

### Error Handling
```javascript
// ❌ Silent failure
try { JSON.parse(data); } catch(e) {}

// ✅ Proper handling
try {
    const parsed = JSON.parse(data);
} catch (e) {
    console.error('Parse failed:', e.message);
    throw new ValidationError('Invalid JSON format');
}
```

## Latihan
Refactor kode berikut menjadi clean code dengan prinsip yang telah dipelajari.

## Rangkuman
- Gunakan nama deskriptif untuk variabel dan fungsi
- Pisahkan fungsi besar menjadi fungsi kecil
- Hindari duplikasi kode
- Handle error dengan jelas
