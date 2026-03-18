# Closure dan Lexical Scoping

**ID**: `closure-dan-lexical-scoping`
**Duration**: 25 menit

## Materi

### Closure
```javascript
function counter() {
    let count = 0;
    return () => ++count;
}
const hitung = counter();
console.log(hitung()); // 1
console.log(hitung()); // 2
```

### Privacy
```javascript
function buatAkun(saldo) {
    return {
        cekSaldo: () => saldo,
        setor: (j) => saldo += j
    };
}
```

## Rangkuman
- Closure = function + lexical environment
- Variabel tetap hidup setelah parent selesai
