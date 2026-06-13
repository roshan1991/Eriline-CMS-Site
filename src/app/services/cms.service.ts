import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CmsService {
  private apiUrl = environment.apiUrl;

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
    return this.http.post<any>(`${this.apiUrl}/content/upload`, formData);
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

  sendInvoiceEmail(id: number) {
    return this.http.post<any>(`${this.apiUrl}/invoices/${id}/send-email`, {});
  }

  getScheduledInvoices() {
    return this.http.get<any[]>(`${this.apiUrl}/invoices/scheduled`);
  }

  createScheduledInvoice(data: any) {
    return this.http.post(`${this.apiUrl}/invoices/scheduled`, data);
  }

  deleteScheduledInvoice(id: number) {
    return this.http.delete(`${this.apiUrl}/invoices/scheduled/${id}`);
  }

  updateScheduledInvoiceStatus(id: number, status: string) {
    return this.http.patch(`${this.apiUrl}/invoices/scheduled/${id}/status`, { status });
  }

  triggerScheduledInvoice(id: number) {
    return this.http.post(`${this.apiUrl}/invoices/scheduled/${id}/trigger`, {});
  }

  sendContactMessage(data: any) {
    return this.http.post(`${this.apiUrl}/contact`, data);
  }
}
