// 1. Sukurkite objektų kūrimo konstruktorių (ES6 būdu) pavadinimu Products. Jo pagrindu sukurkite 5 produktus (apranga), kurie turės šias savybės: name, price, salePrice, category(bus kaip masyvas, jame vardijamos kategorijos, prie kurių jis priskiriamas, galimos "T-shirts", "Pants", "Sweaters", "Shoes") ir metodus, kurie atlikas šias funkcijas:

// 1.1. pateiks produkto prisistatymą su pavadinimu ir kaina (arba akcijine kaina) (Pvz. "Nike pants": 59.00 Eur");

// 1.2. patikrins ar produktas turi akciję kainą ir jeigu turi gražins akcijinę kainą, jeigu neturi, grąžins tekstą, kuriame nurodoma, kad šiam produktui akcija netaikoma;

// 2. Sukurkite masyvą, pavadinimo currentProducts, kurima bus patalpinti 5 produktai;

// 3. Filtrus, kurie padės vartotojams filtruoti prekes pagal:

// 3.1. Kainą (turi būti sukuriama funkcija (turės tris argumentus pvz.: 1 argumentas - produktai, 2 - visada bus skaičius, 3 argumentas - gali būti skaičius arba string "nuo" / "iki"), kuri leis vartotojui nurodyti:
//  kainą nuo/iki (funkcja priims tis argumentus: produktų masyvas, kaina nuo, kaina iki)
//  arba nurodyti kainą nuo ir rodys prekes nuo tos kainos iki maksimalios galimos
//  arba kainą iki ir rodys prekes nuo minimalios galimos iki tos kainos kurią nurodė;

// 3.2. Kategoriją (turi būti sukuriama funkcija, kuri leis vartotjui kaip argumentą nurodyti vieną iš kategorijų ir jam atvaizduos tas prekes, kurios turi tą kategoriją);

// 3.3. Akcijas, kuri parodys tas prekes, kurios turi akcijinę kainą;

// 4. Patobulinkite objektų kūrimo kontsruktoriaus Products metododą aptartą 1.2. punkte, kad jis turėtų tokį funkcionalumą: patikrins ar produktas turi akciję kainą ir jeigu turi gražins tą nuolaidą kaip procentinę išraišką (pvz. produkto kaina 10 Eur, akcijinė kaina 7 Eur, gražins "Produktui "Nike pants" taikoma 30% nuuolada").

import { Products } from "./old/modules/products.js";

function filterByPrice(products, price, limit){
  let result = [];
  if(limit == "from"){
    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      if(element.currentPrice >= price){
        result.push(element);
      }
    }
  } else if (limit == "upto"){
    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      if(element.currentPrice <= price){
        result.push(element);
      }
    }
  } else if (Number.isInteger(limit)){
    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      if(element.currentPrice >= price && element.currentPrice <= limit){
        result.push(element);
      }
    }
  }
  return result;
}

function filterByCategory(products, category){
  let result = [];
  products.forEach(element => {
    if(element.category.includes(category)){
      result.push(element);
    }
  });
  return result;
}

function filterByOnSale(products){
  let result = [];
  products.forEach(element => {
    if(element.amIOnSale()){
      result.push(element);
    }
  });
  return result;
}


let products = [
  [
    "Nike šukos",
    12,
    10,
    ["higieninė prekė", "stilinga prekė"]
  ],
  [
    "BMW paspirtukas",
    100,
    50,
    ["transportas", "stilinga prekė"]
  ],
  [
    "Giovanni Giorgio",
    2000,
    -1,
    ["žmogus"]
  ],
  [
    "Kebabas su česnakiniu padažu",
    4,
    -1,
    ["maistas", "stilinga prekė"]
  ],
  [
    "Optima linija trumpikės",
    13,
    9,
    ["higieninė prekė", "stilinga prekė", "apatiniai"]
  ]
];

let currentProducts = [];

for (let i = 0; i < products.length; i++) {
  let item = products[i];
  let element = new Products(item[0],item[1],item[2],item[3]);
  currentProducts.push(element);
}

// uzd 1.1 - parodyti mane
currentProducts.forEach(element => {
  console.log(element.displayMe());
});

// uzd 1.2 - parodyti akcijine kaina
// uzd 4 - parodyti akcija procentais
currentProducts.forEach(element => {
  console.log(element.salePrice);
});

// uzd 3.1 - filter pagal kaina
console.log(filterByPrice(currentProducts,10,50));

//uzd 3.2 - filter pagal kategorija
// pvz - "stilinga prekė" "higieninė prekė" "apatiniai"
console.log(filterByCategory(currentProducts,"maistas"));

// uzd 3.3 - filter pagal ar yra akcija
console.log(filterByOnSale(currentProducts));