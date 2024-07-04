// sidebar.component.ts
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SidebarService } from 'src/app/public/services/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() pageTitle: string = '';
  isSidebarVisible: boolean = false;
  private sidebarSubscription: Subscription = new Subscription();

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.sidebarSubscription = this.sidebarService.getSidebarStatus().subscribe(
      (status: boolean) => {
        this.isSidebarVisible = status;
      }
    );
  }

  ngOnDestroy(): void {
    this.sidebarSubscription.unsubscribe();
  }
}
