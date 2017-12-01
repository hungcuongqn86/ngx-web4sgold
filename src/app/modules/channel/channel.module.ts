import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ChannelRoutingModule} from './channel.routing.module';
import {ChannelComponent} from './channel.component';
import {SharedModule} from '../../public/shared.module';

import {ChannelService} from '../../service/channel.service';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, ChannelRoutingModule, SharedModule],
    declarations: [
        ChannelComponent
    ],
    exports: [],
    providers: [ChannelService]
})
export class ChannelModule {
}
