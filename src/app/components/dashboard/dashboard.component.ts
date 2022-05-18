import { Component } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  destroyed = new Subject<void>();
  layout: any;
  deviceSize: string = "Large";
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.setLayout();
  }

  setLayout() {

    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {            
            this.deviceSize = this.displayNameMap.get(query) ?? 'Unknown';
            if (this.deviceSize === 'Xsmall') {
              this.layout = {
                        columns: 1,
                        miniCard: { cols: 1, rows: 1 },
                        chart: { cols: 1, rows: 2 },
                        table: { cols: 1, rows: 4 },
                      }
            } else {
              this.layout = {
                      columns: 4,
                      miniCard: { cols: 1, rows: 1 },
                      chart: { cols: 2, rows: 2 },
                      table: { cols: 4, rows: 4 },
                    }
            }            
          }
        }
      });
  }

}
