import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mcna-legal-mentions",
  templateUrl: "./legal-mentions.component.html",
  styleUrls: ["./legal-mentions.component.scss"],
})
export class LegalMentionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.querySelector("main").scrollTo(0, 0);
  }
}
