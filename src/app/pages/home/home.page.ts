import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.querySelector("main").scrollTo(0, 0);
  }
}
