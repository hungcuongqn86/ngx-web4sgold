import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './layouts/header.component';
import {SidebarComponent} from './layouts/sidebar.component';
import {FooterComponent} from './layouts/footer.component';

import {routing} from './app.routing.module';
import {SharedModule} from './public/shared.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppGuard} from './app.guard.service';

import {environment} from '../environments/environment';
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, environment.basename + '/assets/i18n/', '.json?v=1.0.0');
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        routing,
        SharedModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        })
    ],
    providers: [AppGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
