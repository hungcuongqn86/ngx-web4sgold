import {ModuleWithProviders, NgModule} from '@angular/core';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';

@NgModule({
    imports: [],
    declarations: [BreadcrumbComponent],
    exports: [BreadcrumbComponent],
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
