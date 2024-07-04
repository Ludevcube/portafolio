// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SidebarService } from './public/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'portafolio';
  pageTitle: string = '';
  isSidebarVisible: boolean = false;

  constructor(private router: Router,
              private sidebarService: SidebarService) {
    this.sidebarService.getSidebarStatus().subscribe((status: boolean) => {
      this.isSidebarVisible = status;
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.root.snapshot;
        this.pageTitle = this.getTitle(currentRoute);
      });
  }

  getTitle(routeSnapshot: any): string {
    let title = routeSnapshot.data && routeSnapshot.data.title ? routeSnapshot.data.title : '';
    if (routeSnapshot.firstChild) {
      title = this.getTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }
  
  toggleSidebar() {
    this.sidebarService.toggleSidebar();  
  }
}
