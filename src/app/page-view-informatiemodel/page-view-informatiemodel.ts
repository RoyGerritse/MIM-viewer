import {Component, inject, OnInit} from '@angular/core';
import {MIM} from '../../models/mim.interface';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from '../../services/local-storage';
import {InformatiemodelSidebar} from '../informatiemodel-sidebar/informatiemodel-sidebar';

@Component({
  selector: 'app-page-view-informatiemodel',
  imports: [
    InformatiemodelSidebar
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
      if (!page) return;
      this.page = page;
    });
  }

  public getDocument() {
    return this.documents.find(a => a.name == this.page);
  }
}
