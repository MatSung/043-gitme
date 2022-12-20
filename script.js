// arašykite funkciją getPosts, kuri gražina Promise, kuriame yra išgaunami post'ai iš https://jsonplaceholder.typicode.com/posts panaudojant vieną iš galimų AJAX būdų: XMLHttpRequest, fetch, jQuery, axios. Užsibaigus Promise atvaizduokite gautus duomenys HTML lentelėje.


function getData(url) {
    return fetch(url)
        .then((response) => response.json())
    //.then((data) => {console.log(data);});
}


function fillTable(data, users) {
    let table = document.getElementById("table");
    let tableHeadRow = document.createElement("tr");
    let objectKeys = Object.keys(data[0]);

    // prideti Name prie heade
    let nameOfPosterHead = document.createElement("th");
    nameOfPosterHead.textContent = "Name";
    tableHeadRow.append(nameOfPosterHead);
    ///////////////////////////////////

    objectKeys.forEach(element => {
        let newHeadCell = document.createElement("th");
        newHeadCell.textContent = element;
        tableHeadRow.append(newHeadCell);
    });
    table.append(tableHeadRow);
    data.forEach(element => {
        let newRow = document.createElement("tr");

        // prideti varda prie kiekvieno posto
        let nameTd = document.createElement("td");
        nameTd.textContent = users[element.userId];
        newRow.append(nameTd);
        ///////////////////////////////////

        for (const key in element) {
            if (Object.hasOwnProperty.call(element, key)) {
                const item = element[key];
                let newTd = document.createElement("td");
                newTd.textContent = item;
                newRow.append(newTd);
            }
        }
        table.append(newRow);
    });
}

function getUsers(data) {
    let users = {};
    data.forEach((element, index) => {
        users[element.id] = element.name;
    });
    return users;
}

getData("https://jsonplaceholder.typicode.com/users")
    .then(data => getUsers(data))
    .then(users => {
        getData('https://jsonplaceholder.typicode.com/posts')
            .then(data => { fillTable(data,users) });
    })


//Papildikite prieš tai darytą užduotį: panaudojant gautą userId parodykite vartotojo vardą šalia "post" informacijos.