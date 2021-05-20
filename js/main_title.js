export default function mainTitle(title) {
  if (!title) throw new Error("prasom paduoti antrastes pavadinima");
  const h1El = document.createElement("h1");
  h1El.textContent = title;
  h1El.className = "klase";
  return h1El;
}

console.log(mainTitle);
// node butu

// module.exports = {
//   mainTitle
// }
