import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic/topic.service';
import { TopicInterface } from 'src/app/interfaces/topic.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  topic: TopicInterface[] = null;

  constructor(private topicService: TopicService, private router: Router) { }

  ngOnInit() {
    console.log(this.topicService.getAllTopic());
    this.topic = this.topicService.getAllTopic();
    // this.getAllTopic();
  }
  goToTutors(){
    console.log('hi');
    this.router.navigate(['/tutors']);

  }

}
