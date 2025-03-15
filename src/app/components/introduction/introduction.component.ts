import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SkillsComponent } from "../../shared/components/skills/skills.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-introduction',
  imports: [TranslateModule, SkillsComponent,NgFor],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {
  introductionText = [0, 1, 2, 3];
}

