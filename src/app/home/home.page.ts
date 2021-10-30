import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public email:any;
public password:any;

  constructor(private router: Router) {}

  onClic(){
    this.router.navigate(['/tab-inicial'])
  }

}
