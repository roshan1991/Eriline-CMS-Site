import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CmsService } from '../../../services/cms.service';
import { AuthService } from '../../../services/auth.service';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, QuillModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  contents: any[] = [];
  filteredContents: any[] = [];
  selectedPage = 'home';
  selectedFile: File | null = null;
  uploading = false;
  message = '';

  editableProducts: any[] = [];
  editablePortfolio: any[] = [];
  gaTrackingId: string = '';
  
  richTextKeys = [
    'hero_subtitle', 
    'about_title',
    'about_subtitle',
    'about_story_text', 
    'about_mission_text', 
    'about_vision_text', 
    'products_subtitle', 
    'portfolio_subtitle', 
    'contact_subtitle'
  ];

  pages = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About Us', icon: 'ℹ️' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'portfolio', label: 'Portfolio', icon: '🎨' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  stats = [
    { label: 'Active Pages', value: '5', icon: '📄' },
    { label: 'Content Keys', value: '19', icon: '🔑' },
    { label: 'Live Projects', value: '6', icon: '🚀' }
  ];

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean'],
      ['link']
    ]
  };

  constructor(private cms: CmsService, public auth: AuthService) {}

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.cms.getContent().subscribe(data => {
      this.contents = data;
      this.stats[1].value = data.length.toString();
      this.filterPage(this.selectedPage);
    });
  }

  filterPage(pageId: string) {
    this.selectedPage = pageId;
    this.filteredContents = this.contents.filter(item => item.page === pageId);
    
    // Analytics ID extraction
    const gaItem = this.contents.find(i => i.content_key === 'ga_tracking_id');
    if (gaItem) this.gaTrackingId = gaItem.content_value;
    else this.gaTrackingId = '';

    // Products
    const productItem = this.filteredContents.find(i => i.content_key === 'products_list');
    if (productItem) {
      try { this.editableProducts = JSON.parse(productItem.content_value); } catch (e) { this.editableProducts = []; }
    }

    // Portfolio
    const portfolioItem = this.filteredContents.find(i => i.content_key === 'portfolio_list');
    if (portfolioItem) {
      try { 
        this.editablePortfolio = JSON.parse(portfolioItem.content_value); 
        this.stats[2].value = this.editablePortfolio.length.toString();
      } catch (e) { this.editablePortfolio = []; }
    }
  }

  saveAnalytics() {
    this.cms.updateContent({ content_key: 'ga_tracking_id', content_value: this.gaTrackingId || '', page: 'global' }).subscribe(() => {
      this.showMessage('Analytics settings updated successfully!');
      this.loadContent();
    });
  }

  saveContent(item: any) {
    this.cms.updateContent(item).subscribe(() => {
      this.showMessage('Content updated successfully!');
      this.loadContent();
    });
  }

  saveProducts() {
    const productItem = this.contents.find(i => i.content_key === 'products_list');
    if (productItem) {
      productItem.content_value = JSON.stringify(this.editableProducts);
      this.saveContent(productItem);
    }
  }

  savePortfolio() {
    const portfolioItem = this.contents.find(i => i.content_key === 'portfolio_list');
    if (portfolioItem) {
      portfolioItem.content_value = JSON.stringify(this.editablePortfolio);
      this.saveContent(portfolioItem);
    }
  }

  addPortfolioItem() {
    this.editablePortfolio.push({ title: 'New Project', category: 'Software', image: '/startup.png' });
  }

  removePortfolioItem(index: number) {
    this.editablePortfolio.splice(index, 1);
  }

  addProduct() {
    this.editableProducts.push({
      id: 'new-product',
      type: 'NEW',
      name: 'New Product',
      shortDesc: 'Briefly describe this solution.',
      icon: '💡',
      features: ['Highlight Feature 1'],
      description: '<h2>Overview</h2><p>Extended details here...</p>',
      clients: []
    });
  }

  removeProduct(index: number) {
    this.editableProducts.splice(index, 1);
  }

  addProductFeature(prodIndex: number) {
    if (!this.editableProducts[prodIndex].features) {
      this.editableProducts[prodIndex].features = [];
    }
    this.editableProducts[prodIndex].features.push('New Feature');
  }

  removeProductFeature(prodIndex: number, featureIndex: number) {
    this.editableProducts[prodIndex].features.splice(featureIndex, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 3000);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadCmsImage(key: string, page: string) {
    if (!this.selectedFile) return;
    this.uploading = true;
    this.cms.uploadImage(this.selectedFile).subscribe({
      next: (res) => {
        this.cms.updateContent({ content_key: key, content_value: res.url, page: page }).subscribe(() => {
          this.showMessage('Image updated successfully!');
          this.uploading = false;
          this.loadContent();
          this.selectedFile = null;
        });
      },
      error: () => this.uploading = false
    });
  }

  // Handle uploading image for a specific list item (product or portfolio)
  uploadListItemImage(item: any, listType: 'products' | 'portfolio') {
      if (!this.selectedFile) return;
      this.uploading = true;
      this.cms.uploadImage(this.selectedFile).subscribe({
          next: (res) => {
              item.image = res.url;
              if (listType === 'portfolio') this.savePortfolio();
              else this.saveProducts();
              this.uploading = false;
              this.selectedFile = null;
          },
          error: () => this.uploading = false
      });
  }

  getImageUrl(url: string) {
    if (url && url.startsWith('/uploads')) {
      return `http://localhost:5000${url}`;
    }
    return url || '/hero.png';
  }
}
