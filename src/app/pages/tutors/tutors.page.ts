import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
})
export class TutorsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToTutor() {
    console.log('hi');
    this.router.navigate(['/tutor']);
  }

}
