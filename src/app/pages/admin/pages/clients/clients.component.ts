import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CmsService } from '../../../../services/cms.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-admin-clients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clients.component.html'
})
export class AdminClientsComponent implements OnInit {
  contents: any[] = [];
  editableProducts: any[] = [];
  editableClients$ = new BehaviorSubject<any[]>([]);
  selectedFile: File | null = null;
  uploading$ = new BehaviorSubject<boolean>(false);
  message$ = new BehaviorSubject<string>('');

  constructor(private cms: CmsService, private router: Router) {}

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.cms.getContent().subscribe(data => {
      this.contents = data;
      
      // Parse products list for utilized products selection
      const productItem = this.contents.find(i => i.content_key === 'products_list');
      if (productItem) {
        try { this.editableProducts = JSON.parse(productItem.content_value); } catch (e) { this.editableProducts = []; }
      }

      // Parse clients list
      const clientsItem = this.contents.find(i => i.content_key === 'clients_list');
      if (clientsItem) {
        try { this.editableClients$.next(JSON.parse(clientsItem.content_value)); } catch (e) { this.editableClients$.next([]); }
      }
    });
  }

  addClient() {
    const clients = [...this.editableClients$.value];
    clients.push({ 
      name: 'New Client', 
      industry: 'Retail', 
      logo: '/client-1.png',
      address: '',
      phone: '',
      email: '',
      products: [] 
    });
    this.editableClients$.next(clients);
  }

  toggleClientProduct(client: any, productName: string) {
    if (!client.products) client.products = [];
    const index = client.products.indexOf(productName);
    if (index > -1) {
      client.products.splice(index, 1);
    } else {
      client.products.push(productName);
    }
    this.editableClients$.next([...this.editableClients$.value]);
  }

  isProductSelected(client: any, productName: string) {
    return client.products && client.products.includes(productName);
  }

  removeClient(index: number) {
    const clients = [...this.editableClients$.value];
    clients.splice(index, 1);
    this.editableClients$.next(clients);
  }

  quickInvoice(clientName: string) {
    this.router.navigate(['/admin/dashboard/billing'], { queryParams: { client: clientName } });
  }

  saveClients() {
    this.cms.updateContent({ content_key: 'clients_list', content_value: JSON.stringify(this.editableClients$.value), page: 'clients' }).subscribe(() => {
        this.showMessage('Client list published successfully!');
        this.loadContent();
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadListItemImage(item: any) {
      if (!this.selectedFile) return;
      this.uploading$.next(true);
      this.cms.uploadImage(this.selectedFile).subscribe({
          next: (res) => {
              item.logo = res.url;
              this.editableClients$.next([...this.editableClients$.value]);
              this.saveClients();
              this.uploading$.next(false);
              this.selectedFile = null;
          },
          error: () => this.uploading$.next(false)
      });
  }

  getImageUrl(url: string) {
    if (url && url.startsWith('/uploads')) {
      return `${environment.serverUrl}${url}`;
    }
    return url || '/hero.png';
  }

  showMessage(msg: string) {
    this.message$.next(msg);
    setTimeout(() => this.message$.next(''), 3000);
  }
}
