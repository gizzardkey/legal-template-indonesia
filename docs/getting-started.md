# Getting Started

Panduan ini membantu Anda mulai menggunakan Indonesia Legal Templates.

## Installation

Clone repository:

```bash
git clone https://gizzardkey/legal-template-indonesia.git
cd legal-template-indonesia
```

Install dependencies:

```bash
npm install
```

## Basic Usage

Jalankan contoh generator:

```bash
npm start
```

Generator akan membaca template Markdown dan mengganti placeholder seperti `[NAMA]`, `[ALAMAT]`, `[TANGGAL]`, dan `[KOTA]`.

## Repository Structure

```text
templates/
├── bisnis/
├── ketenagakerjaan/
├── legal/
└── umum/

data/
├── template-list.json
├── categories.json
└── placeholders.json

src/
├── index.js
├── generator.js
├── validator.js
└── utils.js
```

## Example

Template:

```md
Nama: [NAMA]
Alamat: [ALAMAT]
```

Data:

```js
{
  NAMA: "Budi Santoso",
  ALAMAT: "Jl. Melati No. 15, Bandung"
}
```

Output:

```md
Nama: Budi Santoso
Alamat: Jl. Melati No. 15, Bandung
```
