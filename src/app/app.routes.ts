import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  { path: '',   redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'skills', component: SkillsComponent },
];
