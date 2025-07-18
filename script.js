const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

/* CASE 1 */

/* 
  Bruk .filter() for å hente ut alle produkter som koster mindre enn 200 gullmynter. 
  Disse varene selger hun ofte ut raskt, og hun vil gjerne ha dem samlet i en liste. 
*/

let newArr = products.filter((money) => money.price <= 200);
console.log(newArr);

/*
  Bruk .map() for å lage en liste som kun inneholder navnene på produktene. 
  Alva vil bruke denne listen til å skrive ut skilt i butikken.
*/

const names = products.map((items) => items.name);
console.log("names", names);

/*
  Alva elsker elektronikk, men hun har mistet oversikten over hva som finnes i denne kategorien. 
  Bruk en kjedet kombinasjon av .filter() og .map() for å lage en liste som kun inneholder navnene 
  til produktene i kategorien "electronics".
*/

const electronicNames = products.map((items) => items.category);
console.log(electronicNames);

/*
  Bruk .some() for å sjekke om det finnes produkter som koster mer enn 1000 gullmynter. 
  Hvis ja, vil Alva legge dem i et spesielt luksushjørne i butikken.
*/

const luxury = products.some((money) => money <= "price");
console.log("Costs more than 1000 gold coins:", luxury);

/* 
  Bruk .reduce() for å finne den totale kostnaden av alle produktene. 
  Alva må vite dette for å sette riktig pris på forsikringen av varene sine.
*/

const priceTotal = products.reduce(
  (acc, currentValue) => acc + currentValue.price,
  0
);
console.log(`Total Price in the shop: ${priceTotal}kr`);
