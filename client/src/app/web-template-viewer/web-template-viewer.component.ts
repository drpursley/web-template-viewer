import { Component, Input, OnInit } from '@angular/core';
import { TemplatesService } from './templates.service';
import { BehaviorSubject, ReplaySubject, Subscription } from 'rxjs';
import { TemplateInfo } from '../template-info';

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
  public templates: TemplateInfo[] = [];
  public thumbnailsPerPage: number = 4;
  public selectedTemplateIndex$ = new BehaviorSubject<number>(0);
  public currentThumbnailIndex$ = new BehaviorSubject<number>(0);
  public displayedTemplate$ = new ReplaySubject<TemplateInfo>(1);

  constructor(
    private templatesService: TemplatesService
  ) { }

  ngOnInit(): void {
    this.templatesSub = this.templatesService.getTemplates(
      this.apiUrl,
      this.templatePath,
      this.templateListName
    ).subscribe((templates) => {
      this.templates = templates;
      this.displayedTemplate$.next(templates[0]);
    });
  }

  ngOnDestroy(): void {
    this.templatesSub?.unsubscribe();
  }
}
