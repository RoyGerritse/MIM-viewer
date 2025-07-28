import {Component, inject, OnInit} from '@angular/core';
import {InformatiemodelSidebar} from "../informatiemodel-sidebar/informatiemodel-sidebar";
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from '../../services/local-storage';
import {MIM} from '../../models/mim.interface';

@Component({
  selector: 'app-page-view-extern',
    imports: [
        InformatiemodelSidebar
    ],
  templateUrl: './page-view-extern.html',
  styleUrl: './page-view-extern.scss'
})
export class PageViewExtern implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(LocalStorageService);
  public documents: MIM[] = [];
  public page: string = '';
  public extern: string = '';

  ngOnInit() {
    this.documents = this.service.getModels();
    this.route.paramMap.subscribe(params => {
      const page = params.get('page');
      if (!page) return;
      this.page = page;
      const extern = params.get('extern');
      if (!extern) return;
      this.extern = extern;
    });
  }

  public getDocument() {
    return this.documents.find(a => a.name == this.page)!;
  }

  public getExtern() {
    return this.getDocument()['mim:Informatiemodel']["mim:packages"]["mim:Extern"].find(a=> a.id == this.extern)!;
  }
}
