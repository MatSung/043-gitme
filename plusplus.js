console.log(plusPlus(10,3));

function plusPlus(number, addedAmount){
    for (let i = 0; i < addedAmount; i++) {
        number++;
    }
    return number;
}