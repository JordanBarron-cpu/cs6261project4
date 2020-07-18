import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})
export class ResistanceComponent implements OnInit {
  public colors: string[];

  constructor() { }

  ngOnInit(): void {
    this.colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue',
                'violet', 'grey', 'white', 'gold', 'silver', 'none'];
  }

  trackColorBySlot(index, color) {
    return color.index;
  }

}
