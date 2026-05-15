import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsService } from '../../services/cms.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  content: any = {
    portfolio_title: 'Our Portfolio',
    portfolio_subtitle: 'Showcasing our precision and expertise across diverse projects.'
  };

  // Modern Default Projects (Self-healing)
  projects: any[] = [
    { title: 'Enterprise ERP System', category: 'Custom Software', image: '/erp.png' },
    { title: 'Global Fintech Mobile App', category: 'Mobile Banking', image: '/fintech.png' },
    { title: 'E-commerce Marketplace', category: 'Web Development', image: '/ecommerce.png' },
    { title: 'Cloud Infrastructure Migration', category: 'Cloud Services', image: '/cloud-mig.png' },
    { title: 'Identity Management API', category: 'Cyber Security', image: '/api-sec.png' },
    { title: 'Startup MVP Platform', category: 'Product Engineering', image: '/startup.png' }
  ];

  constructor(private cms: CmsService) {}

  ngOnInit() {
    this.cms.getContent().subscribe(data => {
      const dbPortfolio = data.find(i => i.content_key === 'portfolio_list');
      if (dbPortfolio) {
        try {
          this.projects = JSON.parse(dbPortfolio.content_value);
        } catch (e) {
          console.error('Portfolio parse error', e);
        }
      }

      data.forEach(item => {
        if (item.page === 'portfolio' && item.content_key !== 'portfolio_list') {
          this.content[item.content_key] = item.content_value;
        }
      });
    });
  }

  getImageUrl(url: string) {
    if (url && url.startsWith('/uploads')) {
      return `${environment.serverUrl}${url}`;
    }
    return url || '/erp.png';
  }
}
