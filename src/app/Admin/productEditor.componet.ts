import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Product} from 'src/Model/product.model';
import {ProductRepositry} from 'src/Model/product.repositry';


@Component({
    templateUrl: 'productEditor.componet.html'
})


export class ProductEditorComponent {

    editing: boolean = false;
    product: Product = new Product();

    constructor(private repositry: ProductRepositry, 
        private router: Router, activateRoute: ActivatedRoute){

            this.editing = activateRoute.snapshot.params["mode"] == "edit";
            if(this.editing){
                Object.assign(this.product, repositry.getProduct(activateRoute.snapshot.params["id"]));
            }            
        }
    
        save(form: NgForm){
            this.repositry.saveProduct(this.product)
            this.router.navigateByUrl("/admin/main/products");
        }
}