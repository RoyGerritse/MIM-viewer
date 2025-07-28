import {Component, Input} from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {MIM} from '../mim.interface';

@Component({
  selector: 'app-informatiemodel-sidebar',
  imports: [
    RouterLink,
    RouterModule
  ],
  templateUrl: './informatiemodel-sidebar.html',
  styleUrl: './informatiemodel-sidebar.scss'
})
export class InformatiemodelSidebar {
  @Input()
  mim!: MIM;
}
