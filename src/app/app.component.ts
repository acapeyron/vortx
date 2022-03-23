import { trigger, transition, style, animate, query, group} from '@angular/animations';
import { Component } from '@angular/core';

const fade = [
  query(':self', 
    [
      style({ opacity: 0 })
    ], 
    { optional: true }
  ),

  query(':self',
    [
      style({ opacity: 0 }),
      animate('.3s', style({ opacity: 1 }))
    ], 
    { optional: true }
  )
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimations', [
      transition('* => *', fade)
    ])
  ]
})

export class AppComponent {
  prepareRouteTransition(outlet:any) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}
