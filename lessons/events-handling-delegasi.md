## Tujuan Pembelajaran

- Menambahkan event listener

- Event object dan properties

- Event delegation untuk efisiensi

## Materi

### Event Listener

```
const btn = document.querySelector('#myBtn');

btn.addEventListener('click', function(event) {
    console.log('Diklik!');
    console.log(event.target);     // Elemen yang diklik
    console.log(event.type);       // "click"
    console.log(event.clientX);    // Posisi mouse X
});
```

### Common Events

```
// Mouse
element.addEventListener('click', handler);
element.addEventListener('mouseover', handler);
element.addEventListener('dblclick', handler);

// Keyboard
document.addEventListener('keydown', (e) => {
    console.log(e.key);    // "Enter", "a", etc.
    console.log(e.code);   // "KeyA", "Enter"
    console.log(e.ctrlKey); // true/false
});

// Form
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    const data = new FormData(form);
});
```

### Event Delegation

```
// ❌ Pasang listener ke setiap item (tidak efisien)
// items.forEach(item => item.addEventListener('click', handler));

// ✅ Delegation: 1 listener di parent
list.addEventListener('click', (e) => {
    if (e.target.matches('li.item')) {
        console.log(e.target.textContent);
    }
});
```

## Rangkuman

Pelajari events: handling dan delegasi dengan praktik langsung.
← Kembali