import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CmsService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getContent() {
    return this.http.get<any[]>(`${this.apiUrl}/content`);
  }

  updateContent(data: { content_key: string, content_value: string, page: string }) {
    return this.http.post(`${this.apiUrl}/content`, data);
  }

  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }

  // --- Invoicing ---
  getInvoices() {
    return this.http.get<any[]>(`${this.apiUrl}/invoices`);
  }

  createInvoice(data: any) {
    return this.http.post(`${this.apiUrl}/invoices`, data);
  }

  deleteInvoice(id: number) {
    return this.http.delete(`${this.apiUrl}/invoices/${id}`);
  }

  updateInvoiceStatus(id: number, status: string) {
    return this.http.patch(`${this.apiUrl}/invoices/${id}/status`, { status });
  }

  sendContactMessage(data: any) {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }
}
