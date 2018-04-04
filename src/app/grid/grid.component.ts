import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  constructor() {
  }
  matrix = [];
  key = Object.keys;
  value = Object.values;

  buildGrid(gridX:number, gridY:number ) {
    for (let x = 0; x < gridX; x++) {
      this.matrix[x] = [];
      for (let y = 0; y < gridY; y++) {
        this.matrix[x][y] = { //Creates objects full of the coords
          "x": x,
          "y": y,
          "contains": {
            "player": false
          }
        }
      }
    }
    console.log(this.matrix);
  }

  ngOnInit() {
    this.buildGrid(10, 10);
  }

}
