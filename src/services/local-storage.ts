import {inject, Injectable} from '@angular/core';
import {apiUrls} from './apiUrls';
import {map} from 'rxjs';
import {MIM} from '../models/mim.interface';
import {HttpClient} from '@angular/common/http';
import {XMLParser} from 'fast-xml-parser';
import {isPlatformBrowser} from '@angular/common';
import {PLATFORM_ID} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private http = inject(HttpClient);
  private parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
    textNodeName: "value"
  });
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
  }

  setInformatiemodels() {
    const arrayKeys = [
      "mim:Domein",
      "mim:View",
      "mim:Extern",
      "mim:Attribuutsoort",
      "mim:Gegevensgroeptype",
      "mim:Datatype",
      "mim:Objecttype",
      "mim:Relatiesoort"
    ];

    for (const url of apiUrls) {
      this.http.get(url.url, {responseType: 'text'}).pipe(
        map(xmlString => this.parser.parse(xmlString))
      ).subscribe(a => {
        this.enforceArrays(a, arrayKeys);
        let mim: MIM = JSON.parse(JSON.stringify(a));
        mim.name = url.naam;
        console.log(mim);
        this.setItem(url.naam, mim);
      });
    }
  }

  ensureArray = <T>(input: T | T[] | undefined): T[] =>
    input === undefined ? [] : Array.isArray(input) ? input : [input];

  enforceArrays = (obj: any, arrayKeys: string[]) => {
    if (typeof obj !== 'object' || obj === null) return;

    for (const key of Object.keys(obj)) {
      if (arrayKeys.includes(key)) {
        obj[key] = this.ensureArray(obj[key]);
      }

      // Recurse into the property if it's an object or array
      if (typeof obj[key] === 'object') {
        if (Array.isArray(obj[key])) {
          obj[key].forEach((item: any) => this.enforceArrays(item, arrayKeys));
        } else {
          this.enforceArrays(obj[key], arrayKeys);
        }
      }
    }
  };

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
