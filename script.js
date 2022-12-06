let kvartetas = 0;
let atsakymas = "";
if(kiekis <= 0){
    atsakymas = "ne grupė";
} else if(kiekis == 1){
    atsakymas = "solo"
} else if(kiekis == 2){
    atsakymas = "duetas";
}else if(kiekis == 3){
    atsakymas = "trio";
} else if (kiekis == 4){
    atsakymas = kvartetas;
} else{
    atsakymas = "didelė grupė";
} 
console.log(atsakymas);