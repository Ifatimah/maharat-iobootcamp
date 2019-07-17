import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.scss'],
})
export class TopicPage implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToTopics() {
    console.log('hi');
    this.router.navigate(['/courses']);
  }
}
