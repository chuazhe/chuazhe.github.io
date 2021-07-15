import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItems = [
    { title: 'Experience', pageUrl: 'experience' },
    { title: 'Education', pageUrl: 'education' },
    { title: 'Skills', pageUrl: 'skills' },
    { title: 'Projects', pageUrl: 'projects' },
    { title: 'Contact', pageUrl: 'contact-page' },
  ];
}
