# DOM Manipulation Dasar

**ID**: `dom-manipulation-dasar`
**Type**: lesson
**Duration**: 25-30 menit
**Tags**: javascript, dom, browser, html

## Tujuan Pembelajaran
- Memilih dan memanipulasi elemen HTML
- Mengubah style, class, dan atribut
- Membuat dan menghapus elemen

## Materi

### Memilih Elemen
```javascript
// Modern (direkomendasikan)
document.querySelector('.class');
document.querySelector('#id');
document.querySelectorAll('div.item');

// Legacy
document.getElementById('id');
document.getElementsByClassName('class');
```

### Manipulasi Konten
```javascript
const el = document.querySelector('#title');
el.textContent = "Teks baru";
el.innerHTML = "<strong>Bold</strong>";
el.style.color = "red";
el.classList.add('active');
el.classList.toggle('hidden');
```

### Membuat & Menghapus
```javascript
const div = document.createElement('div');
div.textContent = "Hello!";
div.classList.add('card');
document.body.appendChild(div);

div.remove(); // Hapus
```

## Latihan
Buat script yang membuat card element dengan title dan description, lalu tambahkan ke halaman.

## Rangkuman
- querySelector untuk memilih elemen
- classList untuk manipulasi class
- createElement/appendChild untuk menambah elemen
