import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TemplateInfo } from 'src/app/template-info';

type TemplateThumbnail = {
  id: string;
  title: string;
  src: string;
  alt: string;
};

@Component({
  selector: 'thumbnail-filmstrip',
  templateUrl: './thumbnail-filmstrip.component.html',
  styleUrls: ['./thumbnail-filmstrip.component.scss']
})
export class ThumbnailFilmstripComponent implements OnInit {
  @Input() public apiUrl: string;
  @Input() public imagesPath: string;
  @Input() public templates: TemplateInfo[];
  @Input() public currentThumbnailIndex$: Observable<number>;
  @Input() public thumbnailsPerPage: number = 4;
  @Input() public displayedTemplate$: Observable<TemplateInfo>;

  public templatesSub: Subscription;
  public indexSub: Subscription;
  public selectedThumbnailId: string;
  public currentThumbnailIndex: number;
  public displayedTemplates: TemplateThumbnail[];
  public isFirstPage: boolean = false;
  public isLastPage: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.templatesSub = this.displayedTemplate$.subscribe((displayedTemplate) => this.selectedThumbnailId = displayedTemplate.id);
    this.indexSub = this.currentThumbnailIndex$.subscribe((currentThumbnailIndex) => this.updateDisplayedTemplates(currentThumbnailIndex));
  }

  ngOnDestroy(): void {
    this.templatesSub?.unsubscribe();
    this.indexSub?.unsubscribe();
  }

  public selectTemplate(id: string) {
    console.log('selectTemplate', id); //stub
  }

  public previous() {
    console.log('previous'); //stub
  }

  public next() {
    console.log('next'); //stub
  }

  private updateDisplayedTemplates(currentThumbnailIndex: number) {
    const templateCount = this.templates.length;

    this.currentThumbnailIndex = currentThumbnailIndex;
    this.isFirstPage = currentThumbnailIndex === 0;
    this.isLastPage = (this.currentThumbnailIndex + this.thumbnailsPerPage) > templateCount;
    const lastTemplateIndex = this.isLastPage ? templateCount : this.currentThumbnailIndex + this.thumbnailsPerPage;

    this.displayedTemplates = this.templates.slice(this.currentThumbnailIndex, lastTemplateIndex).map((template) => {
      return {
        id: template.id,
        title: template.title,
        src: this.getThumbnailSrc(template.thumbnail),
        alt: this.getThumbnailAlt(template.thumbnail)
      };
    });
  }

  private getThumbnailSrc(thumbnailName: string): string {
    return [
      this.apiUrl,
      this.imagesPath,
      'thumbnails',
      thumbnailName
    ].join('/');
  }

  private getThumbnailAlt(thumbnailName: string): string {
    return thumbnailName.substring(0, thumbnailName.lastIndexOf('.')) || thumbnailName;
  }
}
