let amount = 0;
let answer = "";
if(amount <= 0){
    answer = "ne grupė";
} else if(amount == 1){
    answer = "solo"
} else if(amount == 2){
    answer = "duetas";
}else if(amount == 3){
    answer = "trio";
} else if (amount == 4){
    answer = "kvartetas";
} else{
    answer = "didelė grupė";
} 
console.log(answer);