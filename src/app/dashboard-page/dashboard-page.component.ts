import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  result:string  = "0" 
  url:string="https://webchat.botframework.com/embed/aaappservice?s=2lPKl3IljkE.TeF2c91QEq-1VGD-wotnMQ3N1pWRCL2BdAhqPusJvmE&userid=";
  temp:string
  constructor() { }

  ngOnInit() {
  }
}
