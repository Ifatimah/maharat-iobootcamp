import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToTutors(){
    console.log('hi');
    this.router.navigate(['/tutors']);

  }

}
