import {inject, Injectable} from '@angular/core';
import {apiUrls} from './apiUrls';
import {map} from 'rxjs';
import {MIM} from './mim.interface';
import {HttpClient} from '@angular/common/http';
import {XMLParser} from 'fast-xml-parser';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private http = inject(HttpClient);
  private parser =  new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",       // don't prefix attributes with @
    textNodeName: "value"          // name of the field for inner text
  });
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
  }

  setInformatiemodels() {
    for (const url of apiUrls) {
      this.http.get(url.url, {responseType: 'text'}).pipe(
        map(xmlString => this.parser.parse(xmlString))
      ).subscribe(a => {
        console.log(a)
        let mim: MIM = JSON.parse(JSON.stringify(a));
        console.log(mim);
        mim.name = url.naam;
        this.setItem(url.naam, mim);
      });
    }
  }

  getModels(): MIM[] {
    const array = new Array<MIM>();
    for (const url of apiUrls) {
      const mim = this.getItem<MIM>(url.naam);
      if (mim) {
        array.push(mim);
      }
    }
    return array;
  }

  setItem(key: string, value: any): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem<T>(key: string): T | null {
    if (isPlatformBrowser(this.platformId)) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) as T : null;
    }
    return null;
  }

  removeItem(key: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }
}
