// navbar.component.ts
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from 'src/app/public/services/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() pageTitle: string = '';
  private sidebarSubscription: Subscription = new Subscription();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarSubscription = this.sidebarService.getSidebarStatus().subscribe();
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  ngOnDestroy(): void {
    this.sidebarSubscription.unsubscribe();
  }
}
