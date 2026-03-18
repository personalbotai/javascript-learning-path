# Events: Handling dan Delegasi

**ID**: `events-handling-delegasi`
**Type**: lesson
**Duration**: 20-25 menit
**Tags**: javascript

## Tujuan Pembelajaran
- Memahami events: handling dan delegasi dalam JavaScript
- Menerapkan best practices
- Praktik dengan contoh kode

## Materi

Event handling adalah cara JavaScript merespons interaksi user seperti klik, scroll, dan input.

```javascript
const btn = document.querySelector('#submit');

// Add event listener
btn.addEventListener('click', function(event) {
    console.log('Clicked!');
    console.log(event.target);
});

// Common events
el.addEventListener('mouseover', handler);
el.addEventListener('keydown', (e) => {
    console.log(e.key); // 'Enter', 'a', etc.
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
});
```

### Event Delegation
```javascript
// 1 listener untuk semua children
document.querySelector('#list').addEventListener('click', (e) => {
    if (e.target.matches('li.item')) {
        console.log(e.target.textContent);
    }
});
```

## Latihan
Buat contoh kode yang menggunakan events: handling dan delegasi.

## Rangkuman
- Events: Handling dan Delegasi adalah konsep penting dalam JavaScript
- Praktikkan dengan kode sendiri
- Referensi: MDN Web Docs
