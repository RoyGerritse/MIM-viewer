import {Component, inject, OnInit} from '@angular/core';
import {InformatiemodelSidebar} from '../informatiemodel-sidebar/informatiemodel-sidebar';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from '../../services/local-storage';
import {MIM, MimObjecttype} from '../../models/mim.interface';

@Component({
  selector: 'app-page-view-object',
  imports: [
    InformatiemodelSidebar
  ],
  templateUrl: './page-view-object.html',
  styleUrl: './page-view-object.scss'
})
export class PageViewObject implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(LocalStorageService);
  public documents: MIM[] = [];
  public page: string = '';
  public object: string = '';

  ngOnInit() {
    this.documents = this.service.getModels();
    this.route.paramMap.subscribe(params => {
      const page = params.get('page');
      if (!page) return;
      this.page = page;
      const object = params.get('object');
      if (!object) return;
      this.object = object;
    });
  }

  public getDocument() {
    return this.documents.find(a => a.name == this.page)!;
  }

  public getObject(): MimObjecttype | undefined {
    const document = this.getDocument();
    const packages = document["mim:Informatiemodel"]["mim:packages"];
    const viewItems = packages["mim:View"] || [];
    const domeinItems = packages["mim:Domein"] || [];
    const allPackages = [...viewItems, ...domeinItems,];
    const allObjects = allPackages.flatMap(pkg => {
      if (pkg["mim:objecttypen"]) {
        return pkg["mim:objecttypen"]["mim:Objecttype"];
      }
      return [];
    });
    return allObjects.find(p => p.id == this.object);
  }
}
