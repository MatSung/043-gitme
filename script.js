class Book{
    constructor(name, author, year){
        this.name = name;
        this.author = author;
        this.year = year;
        
    }
    nameAndAuthor(){
        console.log(this.name + " - " + this.author);
    }
    howOld(){
        let currentYear = new Date().getFullYear()
        let ageAsOfNow = currentYear - this.year;
        console.log(ageAsOfNow);
    }
}

let testBook = new Book("Knyga", "Autorius", 1999);
testBook.nameAndAuthor();
testBook.howOld();