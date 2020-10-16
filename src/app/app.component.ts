import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // option veriable
  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: false,
    headers: [],
    showTitle: true,
    title: 'asfasf',
    useBom: false,
    removeNewLines: true,
    keys: ['approved','age','name' ]
  };
  
  // This data will be generated in the csv file
  data = [
    {
      name: "Test, 1",
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 3',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    }
  ];
}