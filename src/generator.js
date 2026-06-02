import fs from "fs";

export function generateDocument(templatePath, data) {
let content = fs.readFileSync(templatePath, "utf8");

for (const key in data) {
const regex = new RegExp(`\\[${key}\\]`, "g");
content = content.replace(regex, data[key]);
}

return content;
}
