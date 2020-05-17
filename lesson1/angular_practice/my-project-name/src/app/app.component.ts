import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  name = "Kalinka Mazreku";
  itemList = ["item1", "item2", "item3", "item4"];
  title = "Kalinka's Sandbox";
  rectangle = {
    length: 5,
    width: 6,
    area: function () {
      return this.length * this.width;
    },
  };
}
