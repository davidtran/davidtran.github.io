import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IChampion} from '../IChampion.interface.ts';
import {LOLService} from '../LOLService.service.ts';

import {ChampionSearchBoxCmp} from './ChampionSearchBox.cmp.ts';
import {ChampionListViewCmp} from './ChampionListView.cmp.ts';

@Component({
  selector: 'champion-list',
  template: `
  <div class="row">
    <div class="col-md-12">
      <champion-search-box (onKeywordChange)="onKeywordChange($event)"></champion-search-box>
      <champion-list-view [result]="searchResults"></champion-list-view>
    </div>
  </div>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    ChampionListViewCmp,
    ChampionSearchBoxCmp
  ],
  providers: [LOLService]
})
export class ChampionListCmp {
  private searchResults: Array<IChampion>;

  constructor(private lolService: LOLService) {
    this.searchResults = this.lolService.search(null);
  }

  onKeywordChange(keyword) {
    this.searchResults = this.lolService.search(keyword);
  }
}