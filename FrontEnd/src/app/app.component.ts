import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Quiescent Point';
  // baseUrl : string = "http://localhost:8080"

  // constructor(private router: Router){
  //   console.log(this.router.url);
  // }

  ngOnInit(): void {
    // this.checkWelcomePage()
  }

  // isWelcomePage: boolean = false;

  // checkWelcomePage(): void{
  //   if (this.router.url === "/") {
  //     this.isWelcomePage = true;
  //   }
  // }

}
