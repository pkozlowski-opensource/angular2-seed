import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { NGB_DIRECTIVES, NGB_PRECOMPILE } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES, NGB_DIRECTIVES ],
  precompile: [ NGB_PRECOMPILE ],
  templateUrl: './app.html',
})
export class App {
  constructor() {}

}
