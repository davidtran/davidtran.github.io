import {Component, Input} from 'angular2/core';
import {IChampion} from '../IChampion.interface.ts';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'champion-list-item',
  template: `
    <div class="row">
      <div class="col-md-2">
        <img [src]="champion.ImageUrl" class="img-responsive">
      </div>
      <div class="col-md-4">
        <a [routerLink]="['ChampionDetailView', {id: champion.Id}]">
          <strong>{{champion.Name}}</strong>
        </a>
      </div>
      <div class="col-md-2">
        {{champion.Role}}
      </div>
      <div class="col-md-1">
        {{champion.Attack}}
      </div>
      <div class="col-md-1">
        {{champion.Defense}}
      </div>
      <div class="col-md-1">
        {{champion.Ability}}
      </div>
      <div class="col-md-1">
        {{champion.Difficult}}
      </div>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class ChampionListItemCmp {
  @Input() champion;
}