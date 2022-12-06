

checkAge(2);

function checkAge(age){
    return (age > 18) ? true : confirm("did parents allow you?");
}

function confirm(message){
    console.log(message);
}