import { Injectable } from '@angular/core';
import { Product } from '../../Model/product.model';


Injectable();
export class Cart {

    // attributes
    public Lines: CartLine[] = [];
    public itemCount : number = 0;
    public cartPrice : number = 0;

    //mehtods
    addLine(product : Product, quantity : number = 1){

        let line = this.Lines.find(line => line.product.id == product.id);
        if(line != undefined){
            line.quantity += quantity
        }else{
            this.Lines.push(new CartLine(product, quantity))
        }
        
        this.recalculate();
    }

    updateQuantity(product : Product, quantity : number){

        let line = this.Lines.find(line => line.product.id == product.id);
        if(line != undefined){
            line.quantity = Number(quantity)
        }
       
        this.recalculate();
    }

    removeLine(id: number){
        let index = this.Lines.findIndex(line => line.product.id == id);
        this.Lines.splice(index, 1)
        
        this.recalculate();
    }

    clear(){
        this.Lines = [];
        this.cartPrice = 0;
        this.itemCount = 0;
    }

    //if we use private not accesable to outside the class (this is encapsulation)
    private recalculate(){

        this.itemCount = 0;
        this.cartPrice = 0;

        this.Lines.forEach(l => {
            this.itemCount += l.quantity;
            this.cartPrice += (l.quantity * l.product.price);
        })
    }
}




export class CartLine {

    constructor( public product: Product, public quantity: number){

    }

    get lineTotal() {

        return this.quantity * this.product.price;
    }
}