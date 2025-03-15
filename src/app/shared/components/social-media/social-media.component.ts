import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-media',
  imports: [FontAwesomeModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent {
socialMediaLinks = {
    github: 'https://github.com/EduardoSkieres',
    linkedin: 'https://www.linkedin.com/in/eduardo-skieres/',
    gmail: 'eduardoskieres@gmail.com',
  };

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
}
