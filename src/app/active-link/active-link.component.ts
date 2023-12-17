import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'active-link',
  standalone: true,
  imports: [],
  template: '<a [href]="href" [style]="style()" (click)="handleClick($event)">{{ title }}</a>',
  //templateUrl: './active-link.component.html',
  //styleUrl: './active-link.component.css'
})
export class ActiveLinkComponent {
  @Input({required: true}) title = '';
  @Input({required: true}) href = '';
  router = new Router();
  style() {
    return {
      'color': this.router.url===this.href?'#6600cc':'',
      cursor: this.router.url===this.href?'default':'pointer'
    }
  }
  handleClick(evt: MouseEvent) {
    evt.preventDefault();
    this.router.navigateByUrl(this.href)
  }
}
