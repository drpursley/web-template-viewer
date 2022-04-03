import { Component, Input, OnInit } from '@angular/core';
import { TemplatesService } from './templates.service';
import { Subscription } from 'rxjs';

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

  public templatesSub: Subscription;
  public templates: any[] = [];

  constructor(
    private templatesService: TemplatesService
  ) { }

  ngOnInit(): void {
    this.templatesSub = this.templatesService.getTemplates(
      this.apiUrl,
      this.templatePath,
      this.templateListName
    ).subscribe((templates) => this.templates = templates);
  }

  ngOnDestroy(): void {
    this.templatesSub?.unsubscribe();
  }

}
