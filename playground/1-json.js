const fs = require('fs');
// const book = {
//     title: "Hello",
//     author: "Evan"
// }


// const jBook = JSON.stringify(book);
// fs.writeFileSync('1-json.json', jBook)
const buffer = fs.readFileSync('1-json.json');
const data = JSON.parse(buffer.toString());
data["name"] = "Evan";
data["age"] = "14";
fs.writeFileSync('1-json.json', JSON.stringify(data));