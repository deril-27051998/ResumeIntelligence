import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.css']
})
export class CareerPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // image gallery
    // image gallery

    $("#slideshow > img:gt(0)").hide();

    setInterval(function () {
      $("#slideshow > img:first")
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo("#slideshow");
    }, 4000);



  }

}
