import {Routes} from '@angular/router';
import {PageViewInformatiemodel} from './page-view-informatiemodel/page-view-informatiemodel';
import {PageHome} from './page-home/page-home';

export const routes: Routes = [
  {path: '', component: PageHome},
  {path: ':page', component: PageViewInformatiemodel}
];
