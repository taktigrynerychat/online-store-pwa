import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterQuery } from '@datorama/akita-ng-router-store';
import { map } from 'rxjs/operators';
import { routerTransition } from './animations/router.animations';

@Component({
  selector: 'lol-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [routerTransition],
})
export class AppComponent {
  isFirstRoute$ = this.routerQuery.select(data => data.navigationId).pipe(map(data => data === 1));

  constructor(private routerQuery: RouterQuery) {
  }

  public _getState(outlet: RouterOutlet): any {
    return outlet.activatedRouteData && outlet.activatedRouteData.state;
  }

}
