import { ProjectsComponent } from './components/projects/projects.component';
import { Routes } from '@angular/router';
import { IntroductionComponent } from '@app/components/introduction/introduction.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';

export const routes: Routes = [
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },

  { path: 'introduction', component: IntroductionComponent },
  { path: 'experience', component: WorkExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'projects', component: ProjectsComponent },

];
