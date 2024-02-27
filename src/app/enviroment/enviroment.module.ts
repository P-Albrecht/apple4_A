import { NgModule } from '@angular/core';import { EnviromentComponent } from './enviroment.component';
import { CommonModule } from '@angular/common';
import {SettingsComponent} from 'src/app/settings/settings.component';

@NgModule({
  declarations: [
    EnviromentComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [EnviromentComponent],
  providers: [
  ]
})
export class EnviromentModule { }