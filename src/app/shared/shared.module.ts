
import { MaterialModule } from '../app-mat-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({
  declarations: [
      SideNavComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [

  ],
  entryComponents: [

  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
