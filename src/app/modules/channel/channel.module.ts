import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {ChannelComponent} from './channel.component';
import {SharedModule} from '../../public/shared.module';

@NgModule({
  imports: [CommonModule, FormsModule, HttpModule, SharedModule],
  declarations: [
      ChannelComponent
  ],
  exports: [],
  providers: []
})
export class ChannelModule {
}
