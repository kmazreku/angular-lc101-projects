import { Component, OnInit } from "@angular/core";

@Component({
  selector: "buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.css"],
})
export class ButtonsComponent implements OnInit {
  buttonHeading: string = "Buttons";
  inactive: boolean = false;
  inactiveSilver: boolean = false;
  inactiveCooper: boolean = false;
  constructor() {}

  ngOnInit() {}
  reactivate(x: boolean): void {
    this.inactive = x;
    this.inactiveSilver = x;
    this.inactiveCooper = x;
  }
}
