import {Component, Input} from 'angular2/core';
import {NgFor, NgIf} from 'angular2/common';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {IChampion} from '../IChampion.interface.ts';
import {LOLService} from '../LOLService.service.ts';

import {ChampionListItemCmp} from './ChampionListItem.cmp.ts';

@Component({
  selector: 'champion-list-view',
  template: `
  <div *ngIf="hasResult()">
    <champion-list-item *ngFor="#champion of result" [champion]="champion"></champion-list-item>
  </div>
  <div *ngIf="false == hasResult()">
    No champion, please change your search parameters
  </div>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    NgFor,
    ChampionListItemCmp,
    NgIf
  ]
})
export class ChampionListViewCmp {
  @Input() result: Array<any>;

  hasResult() {
    return this.result && this.result.length > 0;
  }
}