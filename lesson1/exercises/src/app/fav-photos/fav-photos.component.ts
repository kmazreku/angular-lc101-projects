import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-photos",
  templateUrl: "./fav-photos.component.html",
  styleUrls: ["./fav-photos.component.css"],
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Favorite Snaps";
  image1 =
    "https://i.pinimg.com/564x/c1/b1/60/c1b160716c03ac0253aa82684a66d930.jpg";

  image2 =
    "https://i.pinimg.com/564x/17/ac/38/17ac3871e47d170ff60151a9775fd4f9.jpg";
  image3 =
    "https://i.pinimg.com/564x/3d/fe/aa/3dfeaa8f0bddbb961e34483fd307f5ad.jpg";

  constructor() {}

  ngOnInit() {}
}
