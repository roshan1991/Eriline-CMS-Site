import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { CmsService } from '../../../../services/cms.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-admin-content-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, QuillModule],
  templateUrl: './content-editor.component.html'
})
export class AdminContentEditorComponent implements OnInit {
  contents: any[] = [];
  filteredContents: any[] = [];
  selectedPage = 'home';
  selectedFile: File | null = null;
  uploading = false;
  message = '';
  gaTrackingId = '';

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

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean'],
      ['link']
    ]
  };

  constructor(private cms: CmsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.selectedPage = data['page'] || 'home';
      this.loadContent();
    });
  }

  loadContent() {
    this.cms.getContent().subscribe(data => {
      this.contents = data;
      this.filteredContents = this.contents.filter(item => item.page === this.selectedPage);
      
      // Load Analytics Tracking ID
      const gaItem = this.contents.find(i => i.content_key === 'ga_tracking_id');
      if (gaItem) {
        this.gaTrackingId = gaItem.content_value;
      } else {
        this.gaTrackingId = '';
      }
    });
  }

  saveContent(item: any) {
    this.cms.updateContent(item).subscribe(() => {
      this.showMessage('Content updated successfully!');
      this.loadContent();
    });
  }

  saveAnalytics() {
    this.cms.updateContent({ 
      content_key: 'ga_tracking_id', 
      content_value: this.gaTrackingId || '', 
      page: 'global' 
    }).subscribe(() => {
      this.showMessage('Analytics settings updated successfully!');
      this.loadContent();
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadCmsImage(key: string, page: string) {
    if (!this.selectedFile) return;
    this.uploading = true;
    this.cms.uploadImage(this.selectedFile).subscribe({
      next: (res) => {
        this.cms.updateContent({ 
          content_key: key, 
          content_value: res.url, 
          page: page 
        }).subscribe(() => {
          this.showMessage('Image uploaded successfully!');
          this.uploading = false;
          this.loadContent();
          this.selectedFile = null;
        });
      },
      error: () => {
        this.uploading = false;
        this.showMessage('Failed to upload image.');
      }
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
    setTimeout(() => this.message = '', 3500);
  }
}
