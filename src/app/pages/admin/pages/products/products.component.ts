import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { CmsService } from '../../../../services/cms.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, FormsModule, QuillModule],
  templateUrl: './products.component.html'
})
export class AdminProductsComponent implements OnInit {
  contents = new BehaviorSubject<any[]>([]);
  editableProducts = new BehaviorSubject<any[]>([]);
  message = '';

  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['clean'],
      ['link']
    ]
  };

  constructor(private cms: CmsService) { }

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.cms.getContent().subscribe(data => {
      this.contents.next(data);
      const productItem = this.contents.value.find(i => i.content_key === 'products_list');
      if (productItem) {
        try {
          this.editableProducts.next(JSON.parse(productItem.content_value));
        } catch (e) {
          this.editableProducts.next([]);
        }
      }
    });
  }

  addProduct() {
    this.editableProducts.next([...this.editableProducts.value, {
      id: 'new-product',
      type: 'NEW',
      name: 'New Product',
      shortDesc: 'Briefly describe this solution.',
      icon: '💡',
      features: ['Highlight Feature 1'],
      description: '<h2>Overview</h2><p>Extended details here...</p>',
      clients: []
    }]);
  }

  removeProduct(index: number) {
    this.editableProducts.next(this.editableProducts.value.filter((_, i) => i !== index));
  }

  addProductFeature(prodIndex: number) {
    if (!this.editableProducts.value[prodIndex].features) {
      this.editableProducts.value[prodIndex].features = [];
    }
    this.editableProducts.value[prodIndex].features.push('New Feature');
  }

  removeProductFeature(prodIndex: number, featureIndex: number) {
    this.editableProducts.value[prodIndex].features.splice(featureIndex, 1);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  saveProducts() {
    const productItem = this.contents.value.find((i: any) => i.content_key === 'products_list');
    if (productItem) {
      productItem.content_value = JSON.stringify(this.editableProducts);
      this.cms.updateContent(productItem).subscribe(() => {
        this.showMessage('Catalog updates published successfully!');
        this.loadContent();
      });
    }
  }

  showMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 3000);
  }
}
