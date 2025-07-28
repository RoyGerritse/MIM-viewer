import {Routes} from '@angular/router';
import {PageViewInformatiemodel} from './page-view-informatiemodel/page-view-informatiemodel';
import {PageHome} from './page-home/page-home';
import {PageViewDomein} from './page-view-domein/page-view-domein';

export const routes: Routes = [
  {path: '', component: PageHome},
  {path: ':page/domein/:domein', component: PageViewDomein},
  {path: ':page/view/:view', component: PageViewDomein},
  {path: ':page/extern/:extern', component: PageViewDomein},
  {path: ':page', component: PageViewInformatiemodel}
];
