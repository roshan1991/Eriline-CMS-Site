import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetailComponent) },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];
