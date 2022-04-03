import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {
  constructor(
    private http: HttpClient
  ) {}

  public getTemplates(apiUrl: string, templatePath: string, templateListName: string): Observable<any[]> {
    const url = [apiUrl, templatePath, templateListName].join('/');
    return this.http.get<any[]>(url);
  }
}
