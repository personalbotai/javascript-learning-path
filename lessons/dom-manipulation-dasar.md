# DOM Manipulation Dasar

**ID**: `dom-manipulation-dasar`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami konsep dom manipulation dasar dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

DOM (Document Object Model) adalah representasi tree dari HTML yang bisa dimanipulasi JavaScript.

### Memilih Elemen
```javascript
// Modern (direkomendasikan)
document.querySelector('.class');
document.querySelector('#id');
document.querySelectorAll('div.item');

// Legacy
document.getElementById('id');
```

### Mengubah Elemen
```javascript
const el = document.querySelector('#title');
el.textContent = "Teks baru";       // Aman dari XSS
el.innerHTML = "<strong>Bold</strong>"; // Hati-hati XSS!
el.style.color = "red";
el.style.fontSize = "20px";
```

### Class Manipulation
```javascript
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('dark-mode');
el.classList.contains('active'); // true/false
```

### Attribute
```javascript
el.setAttribute('data-id', '123');
el.getAttribute('class');
el.removeAttribute('hidden');
```

### Buat & Hapus
```javascript
const div = document.createElement('div');
div.textContent = "Hello!";
div.classList.add('card');
document.body.appendChild(div);

div.remove(); // Hapus
```

## Latihan
Buat kode yang menggunakan dom manipulation dasar.

## Rangkuman
- DOM Manipulation Dasar adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs
