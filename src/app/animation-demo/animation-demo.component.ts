import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-animation-demo',
  templateUrl: 'animation-demo.component.html',
  styleUrls: ['animation-demo.component.css'],
    animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.5)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AnimationDemoComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
