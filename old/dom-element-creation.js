// Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.

// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:


	
// <h2> tag’as su tekstu;
	
// <p> tag’as su tekstu;
	
// <ul> tag’as, kurio viduje yra vienas <li>;
	
// <p> tag’as su tekstu.

let mainDiv = document.querySelector("#main");

let newH2 = document.createElement("h2");
newH2.textContent = "Mano H2";
mainDiv.append(newH2);

let newParagraph = document.createElement("p");
newParagraph.textContent = "Mano paragrafas su tekstu.";
mainDiv.append(newParagraph);

let newList = document.createElement("ul");
let newListItem = document.createElement("li");
newListItem.textContent = "Mano saraso itemas";
newList.append(newListItem);
mainDiv.append(newList);

let otherNewParagraph = document.createElement("p");
otherNewParagraph.textContent = "Mano kitas paragrafas";
mainDiv.append(otherNewParagraph);

