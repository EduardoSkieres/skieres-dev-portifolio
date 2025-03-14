import { Component } from '@angular/core';
import { introduction } from '../info-en';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  intro = introduction;
}
