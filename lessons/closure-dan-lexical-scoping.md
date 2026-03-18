# Closure dan Lexical Scoping

**ID**: `closure-dan-lexical-scoping`  
**Type**: lesson  
**Duration**: 25-30 menit  
**Tags**: javascript, functions, scope, closure

## Tujuan Pembelajaran
- Memahami lexical scoping dalam JavaScript
- Memahami bagaimana closure bekerja
- Aplikasi praktis closure: data privacy, function factory, memoization

## Materi

### Lexical Scoping

JavaScript menggunakan **lexical scoping** — fungsi bisa mengakses variabel dari scope tempat ia **didefinisikan**, bukan tempat ia **dipanggil**.

```javascript
const luar = "dari luar";

function parent() {
    const dalam = "dari dalam";
    
    function child() {
        console.log(luar);   // ✅ Akses outer scope
        console.log(dalam);  // ✅ Akses parent scope
    }
    
    child();
}

parent();
// Output:
// dari luar
// dari dalam
```

### Apa itu Closure?

**Closure** adalah fungsi yang "mengingat" variabel dari scope tempat ia dibuat, bahkan setelah fungsi tersebut selesai dieksekusi.

```javascript
function counter() {
    let count = 0;  // Private variable
    
    return function() {
        count++;    // Masih bisa akses 'count'!
        return count;
    };
}

const hitung = counter();
console.log(hitung()); // 1
console.log(hitung()); // 2
console.log(hitung()); // 3

// 'count' tidak bisa diakses langsung
console.log(count); // ReferenceError!
```

### Aplikasi: Data Privacy

```javascript
function buatAkun(saldoAwal) {
    let saldo = saldoAwal;  // Private!
    
    return {
        setor: (j) => {
            if (j > 0) saldo += j;
            return saldo;
        },
        tarik: (j) => {
            if (j > 0 && j <= saldo) saldo -= j;
            return saldo;
        },
        cekSaldo: () => saldo
    };
}

const akun = buatAkun(100000);
akun.setor(50000);     // 150000
akun.tarik(20000);     // 130000
akun.cekSaldo();       // 130000
akun.saldo;            // undefined (private!)
```

### Aplikasi: Function Factory

```javascript
function buatPengali(faktor) {
    return (angka) => angka * faktor;
}

const kali2 = buatPengali(2);
const kali10 = buatPengali(10);

console.log(kali2(5));   // 10
console.log(kali10(5));  // 50
```

### Peringatan: Closure di Loop

```javascript
// ❌ MASALAH dengan var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (semua sama!)

// ✅ SOLUSI 1: gunakan let
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2

// ✅ SOLUSI 2: IIFE
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(() => console.log(j), 100);
    })(i);
}
// Output: 0, 1, 2
```

## Latihan

### Soal 1
Buat fungsi `buatCounter(start, step)` yang mengembalikan object dengan method `increment()`, `decrement()`, dan `getValue()`.

### Soal 2
Buat fungsi `memoize(fn)` yang meng-cache hasil pemanggilan fungsi untuk input yang sama.

## Rangkuman
- Closure = function + lexical environment
- Variabel tetap 'hidup' meskipun parent function sudah selesai
- Aplikasi: data privacy, function factory, memoization
- Hati-hati dengan closure di loop menggunakan var
