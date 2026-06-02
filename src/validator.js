export function validateData(data) {
const requiredFields = [
"NAMA",
"ALAMAT"
];

const errors = [];

requiredFields.forEach(field => {
if (!data[field] || data[field].trim() === "") {
errors.push(`${field} is required`);
}
});

return {
valid: errors.length === 0,
errors
};
}
