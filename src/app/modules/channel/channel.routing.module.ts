import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ChannelComponent} from './channel.component';

const routes: Routes = [
    {path: '', component: ChannelComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    providers: [],
    exports: [RouterModule]
})

export class ChannelRoutingModule {
    constructor() {
    }
}
