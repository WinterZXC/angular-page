import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  

  constructor (private http: HttpClient) {}

  response:any;
  
  ngOnInit(){
    this.http.get('https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee').subscribe((response)=>{
      this.response = response;
      console.log(this.response)
      })
  }
}