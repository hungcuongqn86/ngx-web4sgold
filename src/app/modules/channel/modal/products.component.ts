import {Component} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-modal-content',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    title: string;
    list: any[] = [];

    constructor(public bsModalRef: BsModalRef) {
    }
}
