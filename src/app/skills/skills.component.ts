import { Component } from '@angular/core';
import { skillsSection } from '../info-en';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = skillsSection;
  softwareSkills = skillsSection.softwareSkills;
  skillsSectionHeading = skillsSection.softwareSkillsHeader;
}
