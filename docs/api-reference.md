# API Reference

Dokumentasi ini menjelaskan fungsi utama dalam folder `src/`.

## generateDocument

Digunakan untuk membuat dokumen dari template Markdown.

### Import

```js
import { generateDocument } from "../src/generator.js";
```

### Usage

```js
const data = {
  NAMA: "Budi Santoso",
  ALAMAT: "Jl. Melati No. 15, Bandung",
  KOTA: "Bandung",
  TANGGAL: "2 Juni 2026"
};

const output = generateDocument(
  "templates/umum/surat-pernyataan.md",
  data
);

console.log(output);
```

## validateData

Digunakan untuk memvalidasi data input.

### Import

```js
import { validateData } from "../src/validator.js";
```

### Usage

```js
const result = validateData({
  NAMA: "Budi Santoso",
  ALAMAT: "Jl. Melati No. 15, Bandung"
});

console.log(result);
```

## formatDate

Digunakan untuk mengubah tanggal menjadi format Indonesia.

### Import

```js
import { formatDate } from "../src/utils.js";
```

### Usage

```js
const date = formatDate(new Date());
console.log(date);
```

## generateDocumentNumber

Digunakan untuk membuat nomor dokumen otomatis.

### Import

```js
import { generateDocumentNumber } from "../src/utils.js";
```

### Usage

```js
const number = generateDocumentNumber("SURAT");
console.log(number);
```
