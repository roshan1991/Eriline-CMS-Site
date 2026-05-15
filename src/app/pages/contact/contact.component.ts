import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CmsService } from '../../services/cms.service';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  content: any = {
    contact_title: 'Contact Us',
    contact_subtitle: 'Get in touch with our engineering experts today.',
    contact_address: 'Colombo 06, Sri Lanka',
    contact_phone: '+94 71 919 5591',
    contact_email: 'info@eriline.lk'
  };

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitting = new BehaviorSubject<boolean>(false);
  successMessage = '';

  constructor(private cms: CmsService) { }

  ngOnInit() {
    this.cms.getContent().subscribe({
      next: (data) => {
        data.forEach(item => {
          if (item.page === 'contact') {
            this.content[item.content_key] = item.content_value;
          }
        });
      },
      error: (err) => console.error('Failed to load CMS content', err)
    });
  }

  onSubmit() {
    if (this.submitting.value) return;
    this.submitting.next(true);
    this.cms.sendContactMessage(this.formData).subscribe({
      next: () => {
        this.submitting.next(false);
        this.successMessage = 'Thank you! Your message has been sent to our engineering team.';
        this.formData = { name: '', email: '', message: '' };
        setTimeout(() => this.successMessage = '', 6000);
      },
      error: () => {
        this.submitting.next(false);
        alert('Failed to send message. Please try again later.');
      }
    });
  }
}
