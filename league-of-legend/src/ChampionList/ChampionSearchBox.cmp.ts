import {Component, Output, EventEmitter} from 'angular2/core';
import {NgFormControl, Control} from 'angular2/common';

@Component({
  selector: 'champion-search-box',
  template: `
    <form role="form">
      <div class="form-group">
        <input type="text" class="form-control" [ngFormControl]="keywordControl" placeholder="Search champion by name">
      </div>
    </form>
  `
})
export class ChampionSearchBoxCmp {
  @Output('onKeywordChange') onKeywordChange = new EventEmitter();
  private keywordControl = new Control();

  constructor() {
    this.keywordControl.valueChanges.subscribe(keyword => this.onKeywordChange.emit(keyword));
  }
}