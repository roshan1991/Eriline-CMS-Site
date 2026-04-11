import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { CmsService } from './services/cms.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'eriline-frontend';
  isAdminPage = false;
  private hasInitializedAnalytics = false;

  constructor(
    private router: Router,
    private cms: CmsService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isAdminPage = event.url.startsWith('/admin');
    });

    this.initAnalytics();
  }

  initAnalytics() {
    this.cms.getContent().subscribe(data => {
      const gaConfig = data.find(i => i.content_key === 'ga_tracking_id');
      if (gaConfig && gaConfig.content_value && gaConfig.content_value.trim() !== '' && !this.hasInitializedAnalytics) {
        const trackingId = gaConfig.content_value.trim();
        
        const script1 = this.renderer.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        this.renderer.appendChild(this.document.head, script1);

        const script2 = this.renderer.createElement('script');
        script2.text = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}');
        `;
        this.renderer.appendChild(this.document.head, script2);

        this.hasInitializedAnalytics = true;
      }
    });
  }
}
