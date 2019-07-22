import { Component, OnInit } from '@angular/core';
import { TutorInterface } from 'src/app/interfaces/tutor.interface';
import { TutorService } from 'src/app/services/tutor/tutor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.page.html',
  styleUrls: ['./tutor.page.scss'],
})
export class TutorPage implements OnInit {
  id: string;
  tutor: TutorInterface = null;

  constructor(private tutorService: TutorService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('Id');
    this.tutor = this.tutorService.getTutorById(this.id);
    console.log('tutor', this.tutor);
    // this.getTutorById(this.id);
  }
  toConfirm() {
    console.log('yes');
    this.router.navigate(['/booking']);
  }

}
