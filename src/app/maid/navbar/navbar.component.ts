import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.clear()
    this.rout.navigate(['/login'])
  }

}