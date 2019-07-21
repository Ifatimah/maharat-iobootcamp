import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'topic', 
    loadChildren: './pages/topic/topic.module#TopicPageModule' },
  { path: 'courses', 
    loadChildren: './pages/courses/courses.module#CoursesPageModule' },
  { path: 'tutors', loadChildren: './pages/tutors/tutors.module#TutorsPageModule' },
  { path: 'tutor', loadChildren: './pages/tutor/tutor.module#TutorPageModule' },
  { path: 'firstpage', loadChildren: './pages/firstpage/firstpage.module#FirstpagePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registerr', loadChildren: './pages/registerr/registerr.module#RegisterrPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
