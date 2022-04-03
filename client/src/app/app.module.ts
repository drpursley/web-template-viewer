import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebTemplateViewerComponent } from './web-template-viewer/web-template-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    WebTemplateViewerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
