import {Component, inject, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LocalStorageService} from './local-storage';
import {MIM} from './mim.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private service = inject(LocalStorageService);

  ngOnInit() {
    this.service.setInformatiemodels();
  }
}
