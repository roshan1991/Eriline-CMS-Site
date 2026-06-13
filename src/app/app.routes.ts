import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetailComponent) },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin/login', component: LoginComponent },
  { 
    path: 'admin/dashboard', 
    component: DashboardComponent, 
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./pages/admin/pages/content-editor/content-editor.component').then(m => m.AdminContentEditorComponent), data: { page: 'home' } },
      { path: 'about', loadComponent: () => import('./pages/admin/pages/content-editor/content-editor.component').then(m => m.AdminContentEditorComponent), data: { page: 'about' } },
      { path: 'products', loadComponent: () => import('./pages/admin/pages/products/products.component').then(m => m.AdminProductsComponent) },
      { path: 'portfolio', loadComponent: () => import('./pages/admin/pages/portfolio/portfolio.component').then(m => m.AdminPortfolioComponent) },
      { path: 'clients', loadComponent: () => import('./pages/admin/pages/clients/clients.component').then(m => m.AdminClientsComponent) },
      { path: 'billing', loadComponent: () => import('./pages/admin/pages/billing/billing.component').then(m => m.AdminBillingComponent) },
      { path: 'scheduled-billing', loadComponent: () => import('./pages/admin/pages/scheduled-billing/scheduled-billing.component').then(m => m.AdminScheduledBillingComponent) },
      { path: 'contact', loadComponent: () => import('./pages/admin/pages/content-editor/content-editor.component').then(m => m.AdminContentEditorComponent), data: { page: 'contact' } },
      { path: 'seo', loadComponent: () => import('./pages/admin/pages/content-editor/content-editor.component').then(m => m.AdminContentEditorComponent), data: { page: 'seo' } }
    ]
  },
  { path: '**', redirectTo: '' }
];
