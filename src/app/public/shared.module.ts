import {ModuleWithProviders, NgModule} from '@angular/core';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';

import {BootstrapSelectDirective} from './bootstrap-select/bootstrap-select.directive';

@NgModule({
    imports: [],
    declarations: [BreadcrumbComponent,
        BootstrapSelectDirective],
    exports: [BreadcrumbComponent,
        BootstrapSelectDirective],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }

    constructor() {

    }
}
