import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registerr',
  templateUrl: './registerr.page.html',
  styleUrls: ['./registerr.page.scss'],
})
export class RegisterrPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToTopics() {
    console.log('hi');
    this.router.navigate(['/courses']);

  }

}
