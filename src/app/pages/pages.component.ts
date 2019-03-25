import { Component, OnInit } from '@angular/core';
import { CardPipe } from '../ui/pipes/card.pipe';
@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  providers: [
    CardPipe
  ]
})
export class PagesComponent implements OnInit {

  statusText: string = "Status";
  constructor(private cardPipe: CardPipe) { }

  ngOnInit() {
   this.statusText =  this.cardPipe.transform(this.statusText, 'FromComponent Extension');
  }

}