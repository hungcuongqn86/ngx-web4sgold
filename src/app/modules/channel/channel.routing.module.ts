import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ChannelComponent} from './channel.component';
import {LazProductDetailComponent} from './laz.product.detail.component';

const routes: Routes = [
    {path: '', component: ChannelComponent},
    {path: 'laz-products', component: ChannelComponent},
    {path: 'laz-product/:id', component: LazProductDetailComponent}
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
