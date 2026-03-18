## Tujuan Pembelajaran

- Memilih dan memanipulasi elemen HTML
- Mengubah style, class, dan atribut
- Membuat dan menghapus elemen

## Materi

### Memilih Elemen

```
// Modern (direkomendasikan)
document.querySelector('.class');
document.querySelector('#id');
document.querySelectorAll('div.item');

// Legacy
document.getElementById('id');
document.getElementsByClassName('class');
```

### Manipulasi Konten

```
const el = document.querySelector('#title');

// Teks dan HTML
el.textContent = "Teks baru";
el.innerHTML = "**HTML baru**";

// Atribut
el.setAttribute('data-id', '123');
el.getAttribute('class');

// Style
el.style.color = 'red';
el.style.fontSize = '20px';

// Class
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('dark-mode');
```

### Buat & Hapus Elemen

```
// Buat elemen baru
const div = document.createElement('div');
div.textContent = "Hello!";
div.classList.add('card');
document.body.appendChild(div);

// Hapus elemen
el.remove();
// atau parent.removeChild(el);
```

## Rangkuman
Pelajari dom manipulation dasar dengan praktik langsung.
← Kembali