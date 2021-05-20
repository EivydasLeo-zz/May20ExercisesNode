const { add } = require("./js/oneFunction");
const { text } = require("./js/secondFunction");

console.log("first function:", add(2, 3, 4));
console.log("second function:", text("besikopusteliaudamas"));
// 12N pasikurit 2 js failus is ju exportuoti po 2 funkicjas su module.exports
// yas importuoti app.js faile. kol sita darom pasileidziam app.js su nodemon
// funkcijos turetu kazka paskaiciuoti su argumentais arba pagrazinti texta
