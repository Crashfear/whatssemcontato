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
              private meta: Meta,
              private title:Title) {
        this.meta.addTags([
            {name: 'description', content: 'Pagina, para enviar mensagens de whatsapp sem salvar o contato'},
            {name: 'autor', content: 'goliveira'},
            {name: 'keywords', content: 'Whatsapp, sem salvar contato, whatsapp sem salvar contato'}
        ]);

        this.title.setTitle('Whats Sem Contato');
  }

  ngOnInit() {
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
