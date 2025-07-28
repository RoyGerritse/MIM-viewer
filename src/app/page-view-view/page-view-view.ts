import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from '../../services/local-storage';
import {MIM} from '../../models/mim.interface';
import {InformatiemodelSidebar} from '../informatiemodel-sidebar/informatiemodel-sidebar';

@Component({
  selector: 'app-page-view-view',
  imports: [
    InformatiemodelSidebar
  ],
  templateUrl: './page-view-view.html',
  styleUrl: './page-view-view.scss'
})
export class PageViewView implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(LocalStorageService);
  public documents: MIM[] = [];
  public page: string = '';
  public view: string = '';

  ngOnInit() {
    this.documents = this.service.getModels();
    this.route.paramMap.subscribe(params => {
      const page = params.get('page');
      if (!page) return;
      this.page = page;
      const view = params.get('view');
      if (!view) return;
      this.view = view;
    });
  }

  public getDocument() {
    return this.documents.find(a => a.name == this.page)!;
  }

  public getView() {
    return this.getDocument()['mim:Informatiemodel']["mim:packages"]["mim:View"].find(a => a.id == this.view)!;
  }
}
