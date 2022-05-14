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
    this.title.setTitle('Whats Sem Contato');
      this.setUpAnalytics();
    //   this.metaTagService.addTags([
    //     {name: 'url', content: 'https://whatssemcontato.io'},
    //     {name: 'description', content: 'Olha que legal! Aqui você consegue enviar mensagens para destinatários no WhatsApp sem adicionar o contato.'},
    //     {name: 'title', content: 'Olha que legal! Aqui você consegue enviar mensagens para destinatários no WhatsApp sem adicionar o contato.'},
    //     {name: 'autor', content: 'goliveira'},
    //     {name: 'keywords', content: 'Whatsapp, Salvar Contato, Whatsapp sem salvar contato'},
    //     {name:'thumbnail', content: '/assets/whatsapp-image.jpg'},
    //     {property: 'og:url', content: 'https://whatssemcontato.io'},
    //     {property: 'og:type', content: 'website'},
    //     {property: 'og:description', content: 'Olha que legal! Aqui você consegue enviar mensagens para destinatários no WhatsApp sem adicionar o contato.'},
    //     {property: 'og:title', content: 'Olha que legal! Aqui você consegue enviar mensagens para destinatários no WhatsApp sem adicionar o contato.'},
    //     {property:'og:image:type', content: 'image/jpeg'},
    //     {property:'og:image:width', content: '300'},
    //     {property:'og:image:height', content: '300'},
    //     {property:'og:image', content: 'https://whatssemcontato.io/assets/whatsapp-image.jpg'},
    //     {property:'og:site_name', content: 'Whats Sem Contato'},
    //     {property:'og:locale', content: 'pt_BR'},
    // ]);
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
