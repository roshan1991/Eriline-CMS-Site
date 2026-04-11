import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CmsService } from '../../services/cms.service';
import { Observable, map, switchMap, of, tap } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<any> | undefined;
  loading = true;

  defaultProducts = [
    { 
      id: 'pos', 
      type: 'POS', 
      name: 'Elara POS', 
      shortDesc: 'The next generation Point of Sale system for modern retail.', 
      description: '<h2>Advanced Inventory & Sales</h2><p>Elara POS provides real-time stock tracking, multi-branch support, and integrated payment processing.</p>',
      clients: [
        { name: 'TechFlow Systems', logo: '/client-1.png', industry: 'Retail Tech' },
        { name: 'GlobalLink Logistics', logo: '/client-2.png', industry: 'E-commerce' }
      ]
    },
    { 
      id: 'dms', 
      type: 'DMS', 
      name: 'Distribution Management', 
      shortDesc: 'End-to-end supply chain and logistics orchestration.', 
      description: '<h2>Global Supply Chain Control</h2><p>Manage warehouses, fleets, and orders across borders with precision.</p>',
      clients: [
        { name: 'SecureCore Freight', logo: '/client-3.png', industry: 'Logistics' },
        { name: 'GlobalLink Corp', logo: '/client-2.png', industry: 'Distribution' }
      ]
    },
    {
      id: 'logistics',
      type: 'Delivery',
      name: 'Logistics Tracker',
      shortDesc: 'Real-time transit visibility and fleet management.',
      description: '<h2>Fleet Orchestration</h2><p>GPS tracking, route optimization, and driver management in one dashboard.</p>',
      clients: [
        { name: 'TechFlow Global', logo: '/client-1.png', industry: 'Last Mile' }
      ]
    },
    { 
      id: 'studio', 
      type: 'Studio', 
      name: 'Media Studio', 
      shortDesc: 'High-performance digital asset management for media teams.', 
      description: '<h2>Media Asset HUB</h2><p>Organize, collaborate, and distribute your digital content at scale.</p>',
      clients: [
        { name: 'Creative Hub', logo: '/client-2.png', industry: 'Production' }
      ]
    },
    { 
      id: 'hrm', 
      type: 'HRM', 
      name: 'Human Resource Management', 
      shortDesc: 'A holistic approach to employee life-cycle management.', 
      description: '<h2>People First Platforms</h2><p>Manage your entire workforce effectively.</p>',
      clients: [
        { name: 'SecureCore Industries', logo: '/client-3.png', industry: 'Enterprise' }
      ]
    },
    { 
      id: 'ecommerce', 
      type: 'E-Commerce', 
      name: 'Web Store Pro', 
      shortDesc: 'Scalable cloud-ready e-commerce platform.', 
      description: '<h2>High-Conversion E-Commerce</h2><p>Custom themes and integrated payment gateways.</p>',
      clients: [
        { name: 'TrendSetter Shop', logo: '/client-1.png', industry: 'Fashion' }
      ]
    },
    { 
      id: 'cms', 
      type: 'CMS', 
      name: 'Content Hub', 
      shortDesc: 'Agile content management for enterprise websites.', 
      description: '<h2>Manage with Ease</h2><p>Giving non-technical users the power to update site content.</p>',
      clients: [
        { name: 'Global Media', logo: '/client-2.png', industry: 'Publishing' }
      ]
    },
    { 
      id: 'static', 
      type: 'Business', 
      name: 'Elite Profile', 
      shortDesc: 'Bespoke corporate presence for global brands.', 
      description: '<h2>Make your mark</h2><p>Ultra-responsive, high-performance landing pages.</p>',
      clients: [
        { name: 'Brand Builders', logo: '/client-3.png', industry: 'Consultancy' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute, private cms: CmsService) { }

  ngOnInit() {
    this.product$ = this.route.params.pipe(
      tap(() => this.loading = true),
      switchMap(params => {
        const id = params['id'];
        return this.cms.getContent().pipe(
          map(data => {
            const dbProductsItem = data.find(i => i.content_key === 'products_list');
            let productList = this.defaultProducts;

            if (dbProductsItem) {
              try { 
                const parsed = JSON.parse(dbProductsItem.content_value);
                if (Array.isArray(parsed) && parsed.length > 0) {
                  productList = parsed;
                }
              } catch (e) { }
            }

            let found = productList.find(p => 
              (p.id && p.id.toLowerCase() === id.toLowerCase()) || 
              (p.name && p.name.toLowerCase().replace(/ /g, '-') === id.toLowerCase())
            );

            if (!found) {
               found = this.defaultProducts.find(p => p.id === id);
            }

            this.loading = false;
            return found;
          })
        );
      })
    );
  }

  scrollToDesc() {
    document.getElementById('description')?.scrollIntoView({ behavior: 'smooth' });
  }
}
