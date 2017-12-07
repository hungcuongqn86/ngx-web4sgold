import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ChannelRoutingModule} from './channel.routing.module';
import {ChannelComponent} from './channel.component';
import {SharedModule} from '../../public/shared.module';
import {ModalModule} from 'ngx-bootstrap/modal';

import {ChannelService} from '../../service/channel.service';
import {ProductsComponent} from './modal/products.component';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, ChannelRoutingModule, SharedModule, ModalModule.forRoot()],
    declarations: [
        ChannelComponent,
        ProductsComponent
    ],
    exports: [],
    providers: [ChannelService],
    entryComponents: [
        ProductsComponent
    ]
})
export class ChannelModule {
}
