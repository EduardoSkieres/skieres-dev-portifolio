import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import { socialMediaLinks } from '../../info-en';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-media',
  imports: [FontAwesomeModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  socialMediaLinks = socialMediaLinks;

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope
}
