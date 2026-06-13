import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CmsService } from '../../../../services/cms.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-admin-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.component.html'
})
export class AdminPortfolioComponent implements OnInit {
  contents: any[] = [];
  editablePortfolio: any[] = [];
  selectedFile: File | null = null;
  uploading = false;
  message = '';

  constructor(private cms: CmsService) {}

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.cms.getContent().subscribe(data => {
      this.contents = data;
      const portfolioItem = this.contents.find(i => i.content_key === 'portfolio_list');
      if (portfolioItem) {
        try {
          this.editablePortfolio = JSON.parse(portfolioItem.content_value);
        } catch (e) {
          this.editablePortfolio = [];
        }
      }
    });
  }

  addPortfolioItem() {
    this.editablePortfolio.push({ title: 'New Project', category: 'Software', image: '/startup.png' });
  }

  removePortfolioItem(index: number) {
    this.editablePortfolio.splice(index, 1);
  }

  savePortfolio() {
    const portfolioItem = this.contents.find(i => i.content_key === 'portfolio_list');
    if (portfolioItem) {
      portfolioItem.content_value = JSON.stringify(this.editablePortfolio);
      this.cms.updateContent(portfolioItem).subscribe(() => {
        this.showMessage('Portfolio updates published successfully!');
        this.loadContent();
      });
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadListItemImage(item: any) {
      if (!this.selectedFile) return;
      this.uploading = true;
      this.cms.uploadImage(this.selectedFile).subscribe({
          next: (res) => {
              item.image = res.url;
              this.savePortfolio();
              this.uploading = false;
              this.selectedFile = null;
          },
          error: () => this.uploading = false
      });
  }

  getImageUrl(url: string) {
    if (url && url.startsWith('/uploads')) {
      return `${environment.serverUrl}${url}`;
    }
    return url || '/hero.png';
  }

  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 3000);
  }
}
