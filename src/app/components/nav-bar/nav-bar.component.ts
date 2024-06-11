import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  
  toAboutMe() {
    document.getElementById("about-me")?.scrollIntoView();    
  }

  toExperience() {
    document.getElementById("experience")?.scrollIntoView();    
  }


  toProjects() {
    document.getElementById("projects")?.scrollIntoView();    
  }

  toEducation() {
    document.getElementById("education")?.scrollIntoView();    
  }

}
