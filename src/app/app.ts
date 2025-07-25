import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';
import {MIM} from './mim.interface';
import {XMLParser} from 'fast-xml-parser';
import {apiUrls} from './apiUrls';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private http = inject(HttpClient);

  private parser = new XMLParser();
  public documents: MIM[] = [];

  ngOnInit() {
    for (const url of apiUrls) {
      this.http.get(url.url, {responseType: 'text'}).pipe(
        map(xmlString => this.parser.parse(xmlString))
      ).subscribe(a => {
        let mim: MIM = JSON.parse(JSON.stringify(a));
        this.documents.push(mim);
      });
    }
  }
}
