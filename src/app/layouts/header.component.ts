import {Component} from '@angular/core';
import {AppService} from '../service/app.service';
import {rootUrl} from '../app.config';

@Component({
    selector: 'app-layouts-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    private subs: any;
    public profile = {full_name: '', url_img: ''};
    public rootUrl = rootUrl;

    constructor(public appService: AppService) {
        this.getProfile();
    }

    private getProfile() {
        this.appService.http.startLoad();
        this.subs = this.appService.getProfile().subscribe(
            data => {
                this.profile = data.data;
            },
            error => {
                this.appService.http.endLoad();
            }
        );
    }
}
