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
    public selproductsid: Array<any> = [];

    public maxSize = 5;
    public bigTotalItems = 0;

    constructor(public bsModalRef: BsModalRef, public productsService: ProductsService) {
    }

    ngOnInit() {
        this.getProducts();
    }

    public search() {
        this.productsService.search.page = 1;
        this.getProducts();
    }

    public getProducts() {
        this.productsService.http.startLoad();
        this.productsService.search.page_size = 10;
        this.subs = this.productsService.getProducts(this.productsService.search).subscribe(
            data => {
                this.products = data.data.result;
                this.bigTotalItems = data.data.paging.count;
                this.productsService.http.endLoad();
            },
            error => {
                this.productsService.http.endLoad();
            }
        );
    }

    public addProduct(product) {
        this.selproducts.push(product);
        this.selproductsid.push(product.id);
    }

    public removeProduct(product) {
        const index = this.selproducts.indexOf(product);
        this.selproducts.splice(index, 1);
        this.selproductsid.splice(index, 1);
    }


    public pageChanged(event: any): void {
        this.productsService.search.page = event.page;
        this.getProducts();
    }

    public sync() {
        this.subs = this.productsService.syncProducts(this.selproductsid.join(',')).subscribe(
            data => {
                this.action = 'sync';
                this.bsModalRef.hide();
            },
            error => {

            }
        );
    }
}
