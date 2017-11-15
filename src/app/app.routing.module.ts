import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppGuard} from './app.guard.service';

const appRoutes: Routes = [
    {path: '', redirectTo: 'channel', pathMatch: 'full'},
    {
        path: 'channel',
        loadChildren: './modules/channel/channel.module#ChannelModule',
        canActivate: [AppGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
