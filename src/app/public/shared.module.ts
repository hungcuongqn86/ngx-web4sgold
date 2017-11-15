import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
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
