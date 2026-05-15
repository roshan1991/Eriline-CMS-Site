import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsService } from '../../services/cms.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  content: any = {
    about_title: 'Engineering the Future',
    about_subtitle: 'We blend art and logic to create world-class digital experiences.',
    about_story_text: 'Eriline is a premier software development house dedicated to building high-quality digital products...',
    about_mission_text: 'Our mission is to empower businesses with the right technology stack, ensuring they remain competitive in an ever-evolving digital landscape.',
    about_vision_text: 'To be the most trusted global partner for high-performance software engineering.',
    about_image_url: '/about-hero.png'
  };

  values = [
    { title: 'Innovation', desc: 'Pushing boundaries with cutting-edge tech.', icon: '🚀' },
    { title: 'Quality', desc: 'Obsessive attention to code craftsmanship.', icon: '💎' },
    { title: 'Trust', desc: 'Long-term partnerships built on transparency.', icon: '🤝' },
    { title: 'Scale', desc: 'Systems designed to grow with your ambition.', icon: '📈' }
  ];

  constructor(private cms: CmsService) {}

  ngOnInit() {
    this.cms.getContent().subscribe(data => {
      data.forEach(item => {
        if (item.page === 'about') {
          this.content[item.content_key] = item.content_value;
        }
      });
    });
  }

  getImageUrl() {
    const url = this.content['about_image_url'];
    if (url && url.startsWith('/uploads')) {
      return `${environment.serverUrl}${url}`;
    }
    return url || '/about-hero.png';
  }
}
