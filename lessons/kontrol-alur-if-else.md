## Tujuan Pembelajaran

- Menggunakan if/else if/else untuk percabangan
- Ternary operator untuk kondisi singkat
- Switch statement untuk multiple cases

## Materi

### If/Else

```
const umur = 25;
if (umur >= 18) {
 console.log("Dewasa");
} else if (umur >= 13) {
 console.log("Remaja");
} else {
 console.log("Anak-anak");
}
```

### Ternary Operator

```
// condition ? true : false
const status = umur >= 18 ? "Dewasa" : "Anak-anak";
const sapaan = nama ? \`Halo \${nama}\` : "Halo tamu";
```

### Switch

```
const hari = "Senin";
switch(hari) {
 case "Senin":
 console.log("Hari kerja");
 break;
 case "Sabtu":
 case "Minggu":
 console.log("Weekend");
 break;
 default:
 console.log("Hari lain");
}
```

## Rangkuman
Pelajari kontrol alur: if/else dengan praktik langsung.
← Kembali