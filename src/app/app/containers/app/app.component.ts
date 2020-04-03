import {Component, DoCheck} from '@angular/core';
import {Router, Event, NavigationStart, ActivatedRoute, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title: string;
  urls = ['home', 'products', 'add', 'detail', 'edit'];

  constructor(private router: Router) {
    this.router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationEnd) {
        this.urls.forEach(url => {
          if (this.router.url.includes(url)) {
            this.title = url.toUpperCase();
          }
        });
      }
    });
  }
}
