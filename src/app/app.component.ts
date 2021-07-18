import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isScrolled = false;

  menuItems = [
    { title: 'Experience', pageUrl: 'experience' },
    { title: 'Education', pageUrl: 'education' },
    { title: 'Skills', pageUrl: 'skills' },
    { title: 'Projects', pageUrl: 'projects' },
    { title: 'Contact', pageUrl: 'contact-page' },
  ];

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event: any): void => {
    var n = event.srcElement.scrollTop;
    if (n > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  };
}
