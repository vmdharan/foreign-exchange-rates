import { Component, Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  title: string = 'foreign-exchange-rates';
  currencyList: any;   

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.getRates().subscribe(r => {
      if(r) {
        console.log(r);
        this.currencyList = r;
      }
    });
  }

  getRates() {
    return this.http.get('https://api.exchangeratesapi.io/latest?base=AUD')
  }
}
