import { Injectable } from '@angular/core';
import { TutorInterface } from 'src/app/interfaces/tutor.interface';

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  tutor: TutorInterface[] = [
    {
      id: '1',
      name: ' يسري يحمد',
      description: 'خبير دروبال',
      imageURL: 'assets/avatar/yosri.jpg',
      topic_id: '1',
    },
    {
      id: '2',
      name: ' أحمد أبوغزالة',
      description: 'التطوير باستخدام ايونيك',
      imageURL: 'assets/avatar/ahmad_aboghazalah.jpg',
      topic_id: '2',
     },
     {
      id: '3',
      name: ' عبدالله التايه',
      description: 'التطوير باستخدام ايونيك',
      imageURL: 'assets/avatar/abdullah.jpg',
      topic_id: '2',
     },
    {
      id: '4',
      name: 'أحمد أبو يحيى',
      description: ' تطوير الواجهات الأمامية',
      imageURL: 'assets/avatar/ahmad_aboyahia.jpg',
      topic_id: '4',
    }
    ,
    {
      id: '5',
      name: 'عبدالرحمن إبراهيم ',
      description: ' خبير دروبال  ',
      imageURL: 'assets/avatar/abdulrahman.jpg',
      topic_id: '4',
    }
  ];
  getAllTutors(): TutorInterface[] {
    return this.tutor;
  }

  getTutorById(id: string): TutorInterface {
    return this.tutor.filter((item: TutorInterface) => {
      return item.id === id;
    })[0];
  }
  constructor() { }
}
