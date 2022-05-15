import { Component, OnInit } from '@angular/core';
import { SharedLinks } from '../model/shared-link.model';

@Component({
  selector: 'app-shared-links',
  templateUrl: './shared-links.component.html',
  styleUrls: ['./shared-links.component.scss']
})
export class SharedLinksComponent implements OnInit {

  sharedLinks: Array<SharedLinks> = [];
  constructor() { }

  ngOnInit(): void {
    this.initSharedLinks();
  }

  initSharedLinks(){
    this.sharedLinks.push(new SharedLinks({
      url: "https://www.facebook.com/sharer/sharer.php?u=https://whatssemcontato.io/",
      name: "Facebook",
      title: "Compartilhar no Facebook",
      imgSource: "/assets/Facebook.png"
    }));

    this.sharedLinks.push(new SharedLinks({
      url: "https://twitter.com/intent/tweet?url=https://whatssemcontato.io/&text=Olha%20que%20legal!%20Aqui%20voc%C3%AA%20consegue%20enviar%20mensagens%20para%20destinat%C3%A1rios%20no%20WhatsApp%20sem%20adicionar%20o%20contato.",
      name: "Twitter",
      title: "Compartilhar no Twitter",
      imgSource: "/assets/Twitter.png"
    }));

    this.sharedLinks.push(new SharedLinks({
      url: "https://www.linkedin.com/shareArticle?mini=true&url=https://whatssemcontato.io/&title=WhatsApp Sem Salvar Contato&summary=Olha que legal! Aqui você consegue enviar mensagens para destinatários no WhatsApp sem adicionar o contato.&source=",
      name: "LinkedIn",
      title: "Compartilhar no LinkedIn",
      imgSource: "/assets/LinkedIn.png"
    }));

    this.sharedLinks.push(new SharedLinks({
      url: "https://api.whatsapp.com/send?text= Olha que legal! Aqui você consegue enviar mensagens para destinatários no WhatsApp sem adicionar o contato.%0ahttps://whatssemcontato.io/",
      name: "WhatsApp",
      title: "Compartilhar no WhatsApp",
      imgSource: "/assets/whatsapp.png"
    }));
  }

}
