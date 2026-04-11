import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmsService } from '../../services/cms.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  content: any = {
    products_title: 'Digital Solutions',
    products_subtitle: 'Premium engineering tailored for enterprise-grade performance.'
  };

  products: any[] = [
    { 
      id: 'pos', type: 'POS', name: 'Elara POS', icon: '🏪',
      shortDesc: 'The next generation Point of Sale system for modern retail.', 
      features: ['Real-time stock tracking', 'Multi-branch support', 'Cloud-based sync'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'dms', type: 'DMS', name: 'Distribution Management', icon: '🚚',
      shortDesc: 'End-to-end supply chain and logistics orchestration.', 
      features: ['Global Supply Chain Control', 'Warehouse Management', 'Cross-border precision'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'logistics', type: 'Delivery', name: 'Logistics Tracker', icon: '📍',
      shortDesc: 'Real-time transit visibility and fleet management.', 
      features: ['Fleet Orchestration', 'GPS tracking', 'Route optimization'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'studio', type: 'Studio', name: 'Media Studio', icon: '🎬',
      shortDesc: 'High-performance digital asset management for media teams.', 
      features: ['Media Asset HUB', 'Collab workflow', 'Distribute at scale'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'hrm', type: 'HRM', name: 'Human Resource Management', icon: '👥',
      shortDesc: 'A holistic approach to employee life-cycle management.', 
      features: ['People First Platforms', 'Payroll automation', 'Performance tracking'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'ecommerce', type: 'E-Commerce', name: 'Web Store Pro', icon: '🛒',
      shortDesc: 'Scalable cloud-ready e-commerce platform.', 
      features: ['High-Conversion', 'Custom themes', 'Mobile-first design'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'cms', type: 'CMS', name: 'Content Hub', icon: '📝',
      shortDesc: 'Agile content management for enterprise websites.', 
      features: ['Manage with Ease', 'Role-based access', 'Real-time publishing'],
      description: '<p>Extended details here...</p>' 
    },
    { 
      id: 'static', type: 'Business', name: 'Elite Profile', icon: '⚡',
      shortDesc: 'Bespoke corporate presence for global brands.', 
      features: ['Ultra-responsive', 'High-performance SEO', 'Premium animations'],
      description: '<p>Extended details here...</p>' 
    }
  ];

  constructor(private cms: CmsService) {}

  ngOnInit() {
    this.cms.getContent().subscribe(data => {
      const dbProducts = data.find(i => i.content_key === 'products_list');
      if (dbProducts) {
        try {
          this.products = JSON.parse(dbProducts.content_value);
        } catch (e) {
          console.error('Products parse error', e);
        }
      }

      data.forEach(item => {
        if (item.page === 'products' && item.content_key !== 'products_list') {
          this.content[item.content_key] = item.content_value;
        }
      });
    });
  }
}
