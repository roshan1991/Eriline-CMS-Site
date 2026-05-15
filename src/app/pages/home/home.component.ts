import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CmsService } from '../../services/cms.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  contentMap: any = {
    hero_title: 'Empowering the Future with Premium Software Solutions',
    hero_subtitle: 'Leading the digital transformation with scalable custom software, cross-platform mobile apps, and secure cloud infrastructure.',
    hero_image_url: '/hero.png'
  };

  coreServices = [
    {
      title: 'Custom Software Development',
      description: 'Tailor-made applications designed specifically for your business logic and workflows.',
      icon: '💻'
    },
    {
      title: 'Web Application Development',
      description: 'Scalable, responsive web portals, dashboards, and e-commerce solutions.',
      icon: '🌐'
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform iOS and Android apps using Flutter and React Native.',
      icon: '📱'
    },
    {
      title: 'API Development',
      description: 'Robust API design and seamless integration between disparate systems.',
      icon: '🔌'
    }
  ];

  cloudServices = [
    { title: 'Cloud Migration', desc: 'Moving from on-premise to AWS, Azure, or GCP.' },
    { title: 'SaaS Development', desc: 'Building cloud-native SaaS solutions.' },
    { title: 'DevOps & CI/CD', desc: 'Infrastructure as code and automated pipelines.' },
    { title: 'Cloud Security', desc: 'Ensuring compliant and secure cloud operations.' }
  ];

  stats = [
    { label: 'Solutions Delivered', value: '120+' },
    { label: 'Satisfied Clients', value: '80+' },
    { label: 'Lines of Code', value: '5M+' },
    { label: 'Team Members', value: '45+' }
  ];

  constructor(private cms: CmsService) {}

  ngOnInit() {
    this.cms.getContent().subscribe(data => {
      data.forEach(item => {
        if (item.page === 'home') {
          this.contentMap[item.content_key] = item.content_value;
        }
      });
    });
  }

  getHeroImage() {
    const url = this.contentMap['hero_image_url'];
    if (url.startsWith('/uploads')) {
      return `${environment.serverUrl}${url}`;
    }
    return url;
  }
}
