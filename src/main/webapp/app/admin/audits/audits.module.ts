import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SunrisewebsocketappSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [SunrisewebsocketappSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent],
})
export class AuditsModule {}
