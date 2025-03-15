import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  softwareSkills = [
    {
      skillName: 'html-5',
      badgeURL:
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    },
    {
      skillName: 'css3',
      badgeURL:
        'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    },
    {
      skillName: 'JavaScript',
      badgeURL:
        'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
    },
    {
      skillName: 'TypeScript',
      badgeURL:
        'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
    },
    {
      skillName: 'Angular',
      badgeURL:
        'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white',
    },
    {
      skillName: 'Node.js',
      badgeURL:
        'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
    },
    {
      skillName: 'Postgres',
      badgeURL:
        'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
    },
    {
      skillName: 'MongoDB',
      badgeURL:
        'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
    },
    {
      skillName: 'Git',
      badgeURL:
        'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white',
    },
    {
      skillName: '.Net Core',
      badgeURL:
        'https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white',
    },
    {
      skillName: 'Redis',
      badgeURL:
        'https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white',
    },
    {
      skillName: 'Swagger',
      badgeURL:
        'https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white',
    },
  ];

}
