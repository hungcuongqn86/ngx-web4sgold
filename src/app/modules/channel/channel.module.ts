import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ChannelRoutingModule} from './channel.routing.module';
import {ChannelComponent} from './channel.component';
import {SharedModule} from '../../public/shared.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {PaginationModule} from 'ngx-bootstrap/pagination';

import {ChannelService} from '../../service/channel.service';
import {ProductsService} from '../../service/products.service';
import {ProductsComponent} from './modal/products.component';
import {LazProductDetailComponent} from './laz.product.detail.component';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, ChannelRoutingModule, SharedModule, ModalModule.forRoot(),
        TooltipModule.forRoot(),
        PaginationModule.forRoot()
    ],
    declarations: [
        ChannelComponent,
        LazProductDetailComponent,
        ProductsComponent
    ],
    exports: [],
    providers: [ChannelService, ProductsService],
    entryComponents: [
        ProductsComponent
    ]
})
export class ChannelModule {
}
