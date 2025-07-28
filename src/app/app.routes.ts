import {Routes} from '@angular/router';
import {PageViewInformatiemodel} from './page-view-informatiemodel/page-view-informatiemodel';
import {PageHome} from './page-home/page-home';
import {PageViewDomein} from './page-view-domein/page-view-domein';
import {PageViewView} from './page-view-view/page-view-view';
import {PageViewExtern} from './page-view-extern/page-view-extern';

export const routes: Routes = [
  {path: '', component: PageHome},
  {path: ':page/domein/:domein', component: PageViewDomein},
  {path: ':page/view/:view', component: PageViewView},
  {path: ':page/extern/:extern', component: PageViewExtern},
  {path: ':page', component: PageViewInformatiemodel}
];
