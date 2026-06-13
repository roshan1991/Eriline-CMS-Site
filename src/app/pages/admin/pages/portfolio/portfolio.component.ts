import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CmsService } from '../../../../services/cms.service';
import { environment } from '../../../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.component.html'
})
export class AdminPortfolioComponent implements OnInit {
  contents = new BehaviorSubject<any[]>([]);
  editablePortfolio = new BehaviorSubject<any[]>([]);
  selectedFile: File | null = null;
  uploading = false;
  message = '';

  constructor(private cms: CmsService) { }

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.cms.getContent().subscribe(data => {
      this.contents.next(data);
      const portfolioItem = this.contents.value.find(i => i.content_key === 'portfolio_list');
      if (portfolioItem) {
        try {
          this.editablePortfolio.next(JSON.parse(portfolioItem.content_value));
        } catch (e) {
          this.editablePortfolio.next([]);
        }
      }
    });
  }

  addPortfolioItem() {
    this.editablePortfolio.next([...this.editablePortfolio.value, { title: 'New Project', category: 'Software', image: '/startup.png' }]);
  }

  removePortfolioItem(index: number) {
    this.editablePortfolio.next(this.editablePortfolio.value.filter((_, i) => i !== index));
  }

  savePortfolio() {
    const portfolioItem = this.contents.value.find(i => i.content_key === 'portfolio_list');
    if (portfolioItem) {
      portfolioItem.content_value = JSON.stringify(this.editablePortfolio.value);
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
