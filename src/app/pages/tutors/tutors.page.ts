import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TutorInterface } from 'src/app/interfaces/tutor.interface';
import { TutorService } from 'src/app/services/tutor/tutor.service';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
})
export class TutorsPage implements OnInit {
  tutor: TutorInterface[] = null;
  constructor(private tutorService: TutorService, private router: Router) { }

  ngOnInit() {
    console.log(this.tutorService.getAllTutors());
    this.tutor = this.tutorService.getAllTutors();
    // this.getAllTopic();
  }

  goToTutor(id: string) {
    console.log('id: ', id);
    this.router.navigate(['/', 'tutor', id]);
  }
}
