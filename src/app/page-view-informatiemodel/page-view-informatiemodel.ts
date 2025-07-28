import {Component, inject, OnInit} from '@angular/core';
import {MIM} from '../mim.interface';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {LocalStorageService} from '../local-storage';
import {KeyValuePipe} from '@angular/common';

@Component({
  selector: 'app-page-view-informatiemodel',
  imports: [
    RouterLink,
    KeyValuePipe
  ],
  templateUrl: './page-view-informatiemodel.html',
  styleUrl: './page-view-informatiemodel.scss'
})
export class PageViewInformatiemodel implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(LocalStorageService);
  public documents: MIM[] = [];
  public page: string = "";

  ngOnInit() {
    this.documents = this.service.getModels();
    this.route.paramMap.subscribe(params => {
      const page = params.get('page');
      console.log('Route param page:', page);
      if (!page) return;
      this.page = page;
    });
  }

  public getDocument() {
    return this.documents.find(a => a.name == this.page);
  }
}
