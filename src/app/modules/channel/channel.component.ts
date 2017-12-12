import {Component, OnInit, ViewChild} from '@angular/core';
import {ChannelService} from '../../service/channel.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {ProductsComponent} from './modal/products.component';
import {arrPageSize} from '../../lib/const';

@Component({
    selector: 'app-channel',
    templateUrl: './channel.component.html',
    styleUrls: ['./channel.component.css']
})

export class ChannelComponent implements OnInit {
    @ViewChild('form') form: any;
    private subs: any;
    public bsModalRef: BsModalRef;
    public config = {
        animated: true,
        keyboard: true,
        backdrop: true,
        ignoreBackdropClick: false
    };
    public maxSize = 5;
    public bigTotalItems = 175;
    public bigCurrentPage = 1;
    public arrPageSize = arrPageSize;

    constructor(public channelService: ChannelService, private modalService: BsModalService) {

    }

    ngOnInit() {
        this.getLazProduct();
    }

    public resetForm() {
        this.form.reset();
        this.getLazProduct();
    }

    public getLazProduct() {
        this.channelService.http.startLoad();
        this.subs = this.channelService.getLazProduct(this.channelService.search).subscribe(
            data => {
                console.log(data);
                this.channelService.http.endLoad();
            },
            error => {
                this.channelService.http.endLoad();
            }
        );
    }

    public prodDownload() {
        this.channelService.http.startLoad();
        this.subs = this.channelService.syncLazProduct().subscribe(
            data => {
                console.log(data);
                this.channelService.http.endLoad();
            },
            error => {
                this.channelService.http.endLoad();
            }
        );
    }

    public prodUpload() {
        const list = [
            'Open a modal with component',
            'Pass your data',
            'Do something else',
            '...'
        ];
        this.bsModalRef = this.modalService.show(ProductsComponent, Object.assign({}, this.config, {class: 'gray modal-90'}));
        this.bsModalRef.content.title = 'Modal with component';
        this.bsModalRef.content.list = list;
    }

    public pageChanged(event: any): void {
        this.channelService.search.page = event.page;
        this.getLazProduct();
    }

    public pageSizeChange() {
        this.getLazProduct();
    }
}
