import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {NgIf} from 'angular2/common';
import {ProgressBarCmp} from '../ProgressBar.cmp.ts';
import {IChampion} from '../IChampion.interface.ts';
import {LOLService} from '../LOLService.service.ts';

@Component({
  selector: 'champion-detail-view',
  template: `
    <div class="champion-detail-view" *ngIf="champion != null">
      <div class="row">
        <div class="col-md-6">
          <h3>{{champion.Name}}</h3>
          Role: <strong>{{champion.Role}}</strong>
          <br/>

          Alias: <strong>{{champion.Alias}}</strong>
          <br/>

          Attack:
          <progress-bar [value]="getPercentFromSkillValue(champion.Attack)"></progress-bar>

          Defense:
          <progress-bar [value]="getPercentFromSkillValue(champion.Defense)"></progress-bar>

          Ability:
          <progress-bar [value]="getPercentFromSkillValue(champion.Ability)"></progress-bar>

          Difficult:
          <progress-bar [value]="getPercentFromSkillValue(champion.Difficult)"></progress-bar>

        </div>
        <div class="col-md-6">
          <img [src]="champion.ImageUrl" class="img-responsive champion-image">
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <p>{{champion.Description}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .champion-image {
    margin: 0 auto;
  }
  `],
  directives: [NgIf, ProgressBarCmp],
  providers: [LOLService]
})
export class ChampionDetailViewCmp implements OnInit {
  private champion: IChampion;
  constructor(private routeParams: RouteParams,
              private lolService: LOLService) {
    this.champion = null;
  }

  ngOnInit() {
    var Id = parseInt(this.routeParams.params['id']);
    if (Id) {
      this.champion = this.lolService.getChampionById(Id);
    } else {
      this.champion = null;
    }
  }

  getPercentFromSkillValue(skillValue: number) {
    return skillValue * 10;
  }
}