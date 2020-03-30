import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2,
              public translate: TranslateService) {
    // translate.addLangs(['es', 'en', 'fr', 'it']);
    // translate.setDefaultLang('es');
   }

  ngOnInit() {
  }

  collapseMenu() {
    const main = document.getElementById('main');
    this.renderer.removeClass(main, 'nav-open');
    const navigateMenu = document.getElementById('navigation');
    // this.renderer.removeStyle(navigateMenu, 'transform');
    // transform: translate3d(120px, 0, 0);
    this.renderer.removeClass(navigateMenu, 'show');
    // this.renderer.addClass(navigateMenu, 'nav-closed');

    const burguerButton = document.getElementById('burgerButton');
    this.renderer.removeClass(burguerButton, 'toggled');
    this.renderer.addClass(burguerButton, 'collapsed');
  }

  changeMainImg(key: string) {
    const imgHTML = document.getElementById('mainImg') as HTMLImageElement;
    switch (key) {
      case 'es':
        imgHTML.src = 'assets/images/spain.png';
        break;
      case 'en':
        imgHTML.src = 'assets/images/britain.png';
        break;
      case 'fr':
        imgHTML.src = 'assets/images/france.png';
        break;
      case 'it':
        imgHTML.src = 'assets/images/italy.png';
        break;
      default:
        imgHTML.src = 'assets/images/spain.png';
        break;
    }
    this.translate.use(key);
  }

  // changeLang(language: string) {
  //   this.translate.use(language);
  // }

}
