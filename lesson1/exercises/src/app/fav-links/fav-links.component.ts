import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-links",
  templateUrl: "./fav-links.component.html",
  styleUrls: ["./fav-links.component.css"],
})
export class FavLinksComponent implements OnInit {
  favLinks = [
    "https://www.uxpin.com/studio/blog/",
    "https://www.awwwards.com/",
  ];
  title = "Favorite Websites";
  constructor() {}

  ngOnInit() {}
}
