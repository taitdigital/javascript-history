import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-example';
  data = null;

  constructor(private http: HttpClient) {}

  makeRequest($event) {
    this.http.get('http://localhost/frontend-frameworks/data/data.json').subscribe((res) => {
      const resArray = [];

      const iterate = (obj) => {
        Object.entries(obj).forEach(([key, value]) => {
          if (obj.hasOwnProperty(key)) {
            resArray.push(`${key}: ${value}`);

            if (typeof value === 'object') {
              iterate(value);
            }
          }
        });
      };

      iterate(res);

      this.data = resArray;
    });
  }
}
