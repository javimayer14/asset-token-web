import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public opened: boolean = true;
  public mode: string = 'over';
  public side: any;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle(): void {
    console.log(this.side);
    this.opened = !this.opened;
  }

}
