import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ProductsService} from '../../../service/products.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-modal-content',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    action = 'back';
    title: string;
    private subs: Subscription;
    public products: Array<any> = [];
    public selproducts: Array<any> = [];

    constructor(public bsModalRef: BsModalRef, public productsService: ProductsService) {
    }

    ngOnInit() {
        this.getProducts();
    }

    public getProducts() {
        this.productsService.http.startLoad();
        this.productsService.search.page_size = 10;
        this.subs = this.productsService.getProducts(this.productsService.search).subscribe(
            data => {
                this.products = data.data;
                this.productsService.http.endLoad();
            },
            error => {
                this.productsService.http.endLoad();
            }
        );
    }

    public addProduct(product) {
        this.selproducts.push(product);
    }

    public removeProduct(product) {

        console.log(this.selproducts, product);
    }

    public sync() {
        this.action = 'sync';
        this.bsModalRef.hide();
    }
}
