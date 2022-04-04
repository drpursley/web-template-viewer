import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TemplateInfo } from 'src/app/template-info';

@Component({
  selector: 'displayed-template',
  templateUrl: './displayed-template.component.html',
  styleUrls: ['./displayed-template.component.scss']
})
export class DisplayedTemplateComponent implements OnInit {
  @Input() public apiUrl: string;
  @Input() public imagesPath: string;
  @Input() public displayedTemplate$: Observable<TemplateInfo>;

  public templatesSub: Subscription;
  public displayedTemplate: TemplateInfo;
  public largeImagePath: string;

  constructor() { }

  ngOnInit(): void {
    this.templatesSub = this.displayedTemplate$.subscribe((displayedTemplate) => {
      this.displayedTemplate = displayedTemplate;

      this.largeImagePath = [
        this.apiUrl,
        this.imagesPath,
        'large',
        this.displayedTemplate.image
      ].join('/');
    });
  }

  ngOnDestroy(): void {
    this.templatesSub?.unsubscribe();
  }
}
