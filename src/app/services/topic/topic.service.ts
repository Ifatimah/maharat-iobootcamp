import { Injectable } from '@angular/core';
import { TopicInterface } from 'src/app/interfaces/topic.interface';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  topic: TopicInterface[] = [
    {
      id: '1',
      title: ' دروبال',
      imageURL: 'assets/drupal.png'
    },
    {
      id: '2',
      title: ' ايونيك',
      imageURL: 'assets/ionic.png'
    },
    {
      id: '3',
      title: ' التصميم',
      imageURL: 'assets/xd.png'
    },
    {
      id: '4',
      title: ' تطوير الواجهات الأمامية',
      imageURL: 'assets/html.png'
    }
  ];


  getAllTopic(): TopicInterface[] {
    return this.topic;
  }

  getTopicById(id: string): TopicInterface {
    return this.topic.filter((item: TopicInterface) => {
      return item.id === id;
    })[0];
  }

  constructor() { }
}
