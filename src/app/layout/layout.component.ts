import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  public colors: string[] = [
    "#000000",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
    "#ffffff"
  ];

  public textColor: string = "#000000";
  public backgroundColor: string = "#FFFFFF";

  constructor() {}

  ngOnInit() {}

  public changeTextColor($event: ColorEvent) {
    if ($event.color.hex.match(this.backgroundColor)) {
      return;
    }
    this.textColor = $event.color.hex;
  }

  public changeBackgroundColor($event: ColorEvent) {
    if ($event.color.hex.match(this.textColor)) {
      return;
    }
    this.backgroundColor = $event.color.hex;
  }

  public undo() {
    this.textColor = "#000000";
    this.backgroundColor = "#FFFFFF";
  }
}
