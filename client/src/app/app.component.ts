import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public apiUrl = 'api';
  public templatePath = 'data';
  public imagesPath = 'images';
  public templateListName = 'templates.json';
}
