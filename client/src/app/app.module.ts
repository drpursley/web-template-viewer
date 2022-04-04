import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WebTemplateViewerComponent } from './web-template-viewer/web-template-viewer.component';
import { DisplayedTemplateComponent } from './web-template-viewer/displayed-template/displayed-template.component';

@NgModule({
  declarations: [
    AppComponent,
    WebTemplateViewerComponent,
    DisplayedTemplateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
