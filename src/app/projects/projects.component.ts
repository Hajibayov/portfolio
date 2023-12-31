import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from './project.model';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  faGithub = faGithub;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    AOS.init({ once: true });
    this.projects = this.projectsService.getProjects();
  }
}
