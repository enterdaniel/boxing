import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoxeoPageRoutingModule } from './boxeo-routing.module';

import { BoxeoPage } from './boxeo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoxeoPageRoutingModule
  ],
  declarations: [BoxeoPage]
})
export class BoxeoPageModule {}
