export function formatDate(date = new Date()) {
return date.toLocaleDateString("id-ID", {
day: "numeric",
month: "long",
year: "numeric"
});
}

export function generateDocumentNumber(prefix) {
const year = new Date().getFullYear();

const random = Math.floor(
1000 + Math.random() * 9000
);

return `${prefix}/${year}/${random}`;
}
