import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //title = 'whats-sem-contato-app';
  
  constructor(private router: Router,
              private metaTagService: Meta,
              private title:Title) {
       
  }

  ngOnInit() {
    this.title.setTitle('Whats Sem Salvar Contato');
      this.setUpAnalytics();
  }

  setUpAnalytics() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
        .subscribe((event) => {
            let navigationEvent = event as NavigationEnd;
            gtag('config', 'G-H34009DMMD',
                {
                    page_path: navigationEvent.urlAfterRedirects
                }
            );
        });
}
}
