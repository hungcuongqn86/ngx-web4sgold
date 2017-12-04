import {Component, OnInit} from '@angular/core';
import {AppService} from '../service/app.service';

@Component({
    selector: 'app-layouts-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    private subs: any;

    constructor(public appService: AppService) {
    }

    ngOnInit() {
        this.getSidebar();
    }

    private getSidebar() {
        this.appService.http.startLoad();
        this.subs = this.appService.getSidebar().subscribe(
            data => {
                console.log(data);
                this.appService.http.endLoad();
            },
            error => {
                this.appService.http.endLoad();
            }
        );
    }
}
