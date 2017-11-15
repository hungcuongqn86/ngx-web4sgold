import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {location} from './app.config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs([location]);
        translate.use(location);
    }
}
