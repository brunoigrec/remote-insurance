import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ri-portal-layout',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalLayoutComponent implements OnInit {
  public sidebarOpen = false;

  constructor() {}

  ngOnInit(): void {}
}
