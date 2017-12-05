import {Component, OnInit} from '@angular/core';
import {ChannelService} from '../../service/channel.service';

@Component({
    selector: 'app-channel',
    templateUrl: './channel.component.html',
    styleUrls: ['./channel.component.css']
})

export class ChannelComponent implements OnInit {
    private subs: any;

    constructor(public channelService: ChannelService) {

    }

    ngOnInit() {
        this.getLazProduct();
    }

    public getLazProduct() {
        this.channelService.http.startLoad();
        this.subs = this.channelService.getLazProduct(this.channelService.search).subscribe(
            data => {
                // console.log(data);
                this.channelService.http.endLoad();
            },
            error => {
                this.channelService.http.endLoad();
            }
        );
    }

    public prodSync() {
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
}
