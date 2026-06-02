import { generateDocument } from "./generator.js";

const data = {
NAMA: "Budi Santoso",
NIK: "3201234567890001",
ALAMAT: "Jl. Melati No. 15, Bandung",
KOTA: "Bandung",
TANGGAL: "02 Juni 2026"
};

const output = generateDocument(
"templates/umum/surat-pernyataan.md",
data
);

console.log(output);
