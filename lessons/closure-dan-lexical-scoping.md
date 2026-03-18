# Closure dan Lexical Scoping

**ID**: `closure-dan-lexical-scoping`
**Type**: lesson
**Duration**: 25-30 menit
**Tags**: javascript, closure, scope, functions

## Tujuan Pembelajaran
- Memahami lexical scoping
- Membuat dan menggunakan closure
- Aplikasi praktis: privacy, factory, memoization

## Materi

### Lexical Scoping
```javascript
function parent() {
    const dalam = "dari dalam";
    
    function child() {
        console.log(dalam); // ✅ Akses parent scope
    }
    
    child();
}
```

### Closure = Function + Environment
```javascript
function counter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const hitung = counter();
console.log(hitung()); // 1
console.log(hitung()); // 2
console.log(hitung()); // 3
// 'count' tidak bisa diakses langsung!
```

### Data Privacy
```javascript
function buatAkun(saldoAwal) {
    let saldo = saldoAwal;
    
    return {
        setor: (j) => saldo += j,
        tarik: (j) => j <= saldo ? saldo -= j : saldo,
        cekSaldo: () => saldo
    };
}

const akun = buatAkun(100000);
akun.setor(50000);
console.log(akun.cekSaldo()); // 150000
akun.saldo; // undefined (private!)
```

### Closure di Loop
```javascript
// ❌ var problem
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
} // 3, 3, 3

// ✅ let solution
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
} // 0, 1, 2
```

## Latihan
Buat fungsi `memoize(fn)` yang cache hasil untuk input yang sama.

## Rangkuman
- Closure = function + lexical environment
- Variabel tetap hidup setelah parent selesai
- Aplikasi: privacy, factory, memoization
