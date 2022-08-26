import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P2PageRoutingModule } from './p2-routing.module';

import { P2Page } from './p2.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P2PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [P2Page]
})
export class P2PageModule {}
