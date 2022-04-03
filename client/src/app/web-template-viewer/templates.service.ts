import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TemplateInfo } from '../template-info';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {
  constructor(
    private http: HttpClient
  ) {}

  public getTemplates(apiUrl: string, templatePath: string, templateListName: string): Observable<TemplateInfo[]> {
    const url = [apiUrl, templatePath, templateListName].join('/');
    return this.http.get<TemplateInfo[]>(url);
  }
}
