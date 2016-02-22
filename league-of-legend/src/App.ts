import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';

import {ChampionListCmp} from './ChampionList/ChampionList.cmp.ts';
import {ChampionDetailViewCmp} from './ChampionDetailView/ChampionDetailView.cmp.ts';

@RouteConfig([
  {path: '/list', name: 'ChampionList', component: ChampionListCmp, useAsDefault: true},
  {path: '/details/:id', name: 'ChampionDetailView', component: ChampionDetailViewCmp }
])
@Component({
  selector: 'app',
  template:`
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1>Leage of Legend Database</h1>
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
export class AppCmp {

}

bootstrap(AppCmp);