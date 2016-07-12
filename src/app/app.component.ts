import { Component } from '@angular/core';
import {AnimationDemoComponent} from './animation-demo/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AnimationDemoComponent]
})
export class AppComponent {
  title = 'app works!';
}
