import { NgModule } from '@angular/core';
import { AssociateDetailsComponent } from './associate-details/associate-details.component';
import { MaterialModule } from '../app-mat-module';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './dialog/dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AssociateDetailsComponent,
    DialogComponent
  ],

  imports: [
    MaterialModule,
    BrowserModule,
    SharedModule
  ],

  exports: [
    AssociateDetailsComponent
  ],

  providers: [
      
  ],

  entryComponents:[
    DialogComponent
      
  ],

  bootstrap: []
})
export class ComponentModule { }