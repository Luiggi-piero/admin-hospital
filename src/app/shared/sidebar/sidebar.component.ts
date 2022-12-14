import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      .has-arrow.waves-effect.waves-dark.active {
        background: transparent;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor(private sidebarService: SidebarService) {
    this.menuItems = this.sidebarService.menu;
    // console.log(this.menuItems);
  }

  ngOnInit(): void {}
}
