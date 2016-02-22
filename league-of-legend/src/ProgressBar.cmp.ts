import {Component, Input} from 'angular2/core';

@Component({
  selector: 'progress-bar',
  template: `
  <div class="progress">
    <div class="progress-bar" role="progressbar" [style.width]="getCssWith()">
      <span class="sr-only">{{value}}% Complete</span>
    </div>
  </div>
  `,
  styles: [
    `.progress {
      margin-bottom: 0;
    }`
  ]
})
export class ProgressBarCmp {
  @Input() value: number;

  getCssWith() {
    if (this.value) return this.value.toString() + '%';
    return '0%';
  }
}