import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'web-template-viewer',
  templateUrl: './web-template-viewer.component.html',
  styleUrls: ['./web-template-viewer.component.scss']
})
export class WebTemplateViewerComponent implements OnInit {
  @Input() public apiUrl: string = '';
  @Input() public templatePath: string = '';
  @Input() public imagesPath: string = '';
  @Input() public templateListName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
