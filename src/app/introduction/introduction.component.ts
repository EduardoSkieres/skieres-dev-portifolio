import { Component } from '@angular/core';
import { introduction } from '../info-en';
import { SocialMediaComponent } from '../components/social-media/social-media.component';

@Component({
  selector: 'app-introduction',
  imports: [SocialMediaComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  intro = introduction;
}
