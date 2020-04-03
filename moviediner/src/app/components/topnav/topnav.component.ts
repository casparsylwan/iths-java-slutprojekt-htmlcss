import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  Heading:string = "Bio och Middag"

  //Classes
  line:string = "line";

  spinTheLines:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){

    this.spinTheLines = !this.spinTheLines;

  }

}
