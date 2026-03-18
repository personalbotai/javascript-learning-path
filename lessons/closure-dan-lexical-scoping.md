## Tujuan Pembelajaran

- Memahami lexical scoping

- Membuat dan menggunakan closure

- Aplikasi praktis: data privacy, function factory

## Materi

### Lexical Scoping

```
const luar = "dari luar";
function parent() {
    const dalam = "dari dalam";
    function child() {
        console.log(luar);   // ✅ Akses outer scope
        console.log(dalam);  // ✅ Akses parent scope
    }
    child();
}
```

### Closure: Function + Environment

```
function counter() {
    let count = 0;  // Private variable
    return function() {
        count++;    // Masih bisa akses 'count'!
        return count;
    };
}

const hitung = counter();
hitung(); // 1
hitung(); // 2
hitung(); // 3
// 'count' tidak bisa diakses langsung!
```

### Praktik: Data Privacy

```
function buatAkun(saldoAwal) {
    let saldo = saldoAwal;
    return {
        setor: (j) => saldo += j,
        tarik: (j) => j <= saldo ? saldo -= j : saldo,
        cekSaldo: () => saldo
    };
}
const akun = buatAkun(100000);
akun.setor(50000);   // 150000
console.log(akun.saldo); // undefined (private!)
```

### Closure di Loop

```
// ❌ Masalah dengan var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
} // Output: 3, 3, 3

// ✅ Solusi: gunakan let
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
} // Output: 0, 1, 2
```

## Rangkuman

Pelajari closure dan lexical scoping dengan praktik langsung.
← Kembali