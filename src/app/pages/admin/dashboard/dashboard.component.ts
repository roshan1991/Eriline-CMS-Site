import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  selectedPage = 'home';

  pages = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About Us', icon: 'ℹ️' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'portfolio', label: 'Portfolio', icon: '🎨' },
    { id: 'clients', label: 'Clients', icon: '🤝' },
    { 
      id: 'billing', 
      label: 'Invoices', 
      icon: '🧾',
      submenu: [
        { id: 'billing', label: 'Invoice Generator' },
        { id: 'scheduled-billing', label: 'Scheduled Maintenance' }
      ]
    },
    { id: 'contact', label: 'Contact', icon: '📧' },
    { id: 'seo', label: 'SEO Settings', icon: '🔍' }
  ];

  stats = [
    { label: 'Active Pages', value: '5', icon: '📄' },
    { label: 'Content Keys', value: '19', icon: '🔑' },
    { label: 'Live Projects', value: '6', icon: '🚀' }
  ];

  constructor(public auth: AuthService, private router: Router) {
    // Synchronize active menu state with route transitions
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlSegments = event.urlAfterRedirects.split('/');
        const lastSegment = urlSegments[urlSegments.length - 1];
        this.selectedPage = lastSegment || 'home';
      }
    });
  }

  ngOnInit() {
    // Initial sync
    const urlSegments = this.router.url.split('/');
    const lastSegment = urlSegments[urlSegments.length - 1];
    this.selectedPage = lastSegment && lastSegment !== 'dashboard' ? lastSegment : 'home';
  }

  isSubmenuActive(page: any): boolean {
    if (!page.submenu) return false;
    return page.submenu.some((sub: any) => sub.id === this.selectedPage);
  }

  selectPage(page: any) {
    if (page.submenu && page.submenu.length > 0) {
      this.router.navigate(['/admin/dashboard', page.submenu[0].id]);
    } else {
      this.router.navigate(['/admin/dashboard', page.id]);
    }
  }
}
