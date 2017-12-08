import {Component, OnInit, ViewChild} from '@angular/core';
import {ChannelService} from '../../service/channel.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ModalDirective} from 'ngx-bootstrap/modal';

import {ProductsComponent} from './modal/products.component';

@Component({
    selector: 'app-channel',
    templateUrl: './channel.component.html',
    styleUrls: ['./channel.component.css']
})

export class ChannelComponent implements OnInit {
    private subs: any;
    bsModalRef: BsModalRef;
    config = {
        animated: true,
        keyboard: true,
        backdrop: true,
        ignoreBackdropClick: false
    };
    @ViewChild('autoShownModal') autoShownModal: ModalDirective;
    isModalShown = false;

    constructor(public channelService: ChannelService, private modalService: BsModalService) {

    }

    ngOnInit() {
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
        this.bsModalRef = this.modalService.show(ProductsComponent, Object.assign({}, this.config, {class: 'gray modal-lg'}));
        this.bsModalRef.content.title = 'Modal with component';
        this.bsModalRef.content.list = list;
    }


    showModal(): void {
        this.isModalShown = true;
    }

    hideModal(): void {
        this.autoShownModal.hide();
    }

    onHidden(): void {
        this.isModalShown = false;
    }
}
