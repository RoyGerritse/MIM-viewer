import {Component, inject, OnInit} from '@angular/core';
import {MIM} from '../../models/mim.interface';
import {RouterLink} from '@angular/router';
import {LocalStorageService} from '../../services/local-storage';

@Component({
  selector: 'app-page-home',
  imports: [
    RouterLink
  ],
  templateUrl: './page-home.html',
  styleUrl: './page-home.scss'
})
export class PageHome implements OnInit {
  private service = inject(LocalStorageService);
  public documents: MIM[] = [];

  ngOnInit() {
    this.documents = this.service.getModels();
  }
}
