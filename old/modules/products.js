export class Products{
    constructor(name, price, initialSalePrice, category){
        this.name = name;
        this.price = price;
        this.initialSalePrice = initialSalePrice;
        this.category = category;
    }

    get currentPrice(){
        return (this.amIOnSale() ? this.initialSalePrice : this.price);
    }

    get salePrice(){
        if(this.initialSalePrice < 0){
            return "Akcija netaikoma";
        }
        return Math.round(this.initialSalePrice / this.price * 100) + "%";
    }
    set salePrice(amount){
        this.initialSalePrice = amount;
    }

    amIOnSale(){
        if(this.initialSalePrice < 0){
            return false;
        }
        return true;
    }
    displayMe(){
        return "Title: " + this.name + ", Current price: " + this.currentPrice + "EUR";
    }
}