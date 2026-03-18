# DOM Manipulation

**ID**: `dom-manipulation-dasar`
**Duration**: 25 menit

## Materi

### Pilih Elemen
```javascript
document.querySelector('#id');
document.querySelectorAll('.class');
```

### Manipulasi
```javascript
el.textContent = "Teks baru";
el.style.color = "red";
el.classList.add('active');
```

### Buat Elemen
```javascript
const div = document.createElement('div');
div.textContent = "Hello!";
document.body.appendChild(div);
```

## Rangkuman
- querySelector = pilih elemen
- classList = manipulasi class
