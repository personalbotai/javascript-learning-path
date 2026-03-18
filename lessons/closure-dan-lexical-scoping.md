# Closure dan Lexical Scoping

**ID**: `closure-dan-lexical-scoping`
**Duration**: 25-30 menit

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

### Closure
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
```

### Data Privacy
```javascript
function buatAkun(saldoAwal) {
    let saldo = saldoAwal;
    return {
        setor: (j) => saldo += j,
        cekSaldo: () => saldo
    };
}
const akun = buatAkun(100000);
akun.setor(50000);
console.log(akun.cekSaldo()); // 150000
```

## Rangkuman
- Closure = function + lexical environment
- Variabel tetap hidup setelah parent selesai
