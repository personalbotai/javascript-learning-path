# DOM Manipulation Dasar

**ID**: `dom-manipulation-dasar`
**Duration**: 25-30 menit

## Materi

### Pilih Elemen
```javascript
document.querySelector('.class');
document.querySelector('#id');
document.querySelectorAll('div.item');
document.getElementById('id');
```

### Manipulasi
```javascript
const el = document.querySelector('#title');
el.textContent = "Teks baru";
el.innerHTML = "<strong>Bold</strong>";
el.style.color = "red";
el.classList.add('active');
el.classList.toggle('hidden');
```

### Buat & Hapus
```javascript
const div = document.createElement('div');
div.textContent = "Hello!";
div.classList.add('card');
document.body.appendChild(div);
div.remove();
```

## Rangkuman
- querySelector untuk pilih elemen
- classList untuk manipulasi class
- createElement untuk elemen baru
