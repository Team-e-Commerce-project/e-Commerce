import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Users/dashboard/dashboard.component';
import { ProductsComponent } from './Users/products/products.component';
import { AdminNavbarComponent } from './NavBar/admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './NavBar/user-navbar/user-navbar.component';
import { AppRoutingModule } from './app.routing';
import { AppRoutesName } from './app.routes.name';
import { DetailProductComponent } from './Users/detail-product/detail-product.component';

// const routes = [
//   {
//     path: AppRoutesName.dashboard,
//     loadChildren: () => import('./Users/dashboard').then(m => m.PrestataireModule),
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
