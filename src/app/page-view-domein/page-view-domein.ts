import {Component, inject, OnInit} from '@angular/core';
import {InformatiemodelSidebar} from '../informatiemodel-sidebar/informatiemodel-sidebar';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {LocalStorageService} from '../../services/local-storage';
import {MIM} from '../../models/mim.interface';

@Component({
  selector: 'app-page-view-domein',
  imports: [
    InformatiemodelSidebar,
    RouterLink
  ],
  templateUrl: './page-view-domein.html',
  styleUrl: './page-view-domein.scss'
})
export class PageViewDomein implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(LocalStorageService);
  public documents: MIM[] = [];
  public page: string = '';
  public domein: string = '';

  ngOnInit() {
    this.documents = this.service.getModels();
    this.route.paramMap.subscribe(params => {
      const page = params.get('page');
      if (!page) return;
      this.page = page;
      const domein = params.get('domein');
      if (!domein) return;
      this.domein = domein;
    });
  }

  public getDocument() {
    return this.documents.find(a => a.name == this.page)!;
  }

  public getDomein() {
    return this.getDocument()['mim:Informatiemodel']["mim:packages"]["mim:Domein"].find(a => a.id == this.domein)!;
  }
}
