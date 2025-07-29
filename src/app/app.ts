import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LocalStorageService} from '../services/local-storage';
import {AccordionModule} from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AccordionModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private service = inject(LocalStorageService);

  public ngOnInit() {
    this.service.setInformatiemodels();
  }
}
