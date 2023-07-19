import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserNavbarComponent } from './NavBar/user-navbar/user-navbar.component';
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // ProductsComponent,
    UserNavbarComponent,
    // AdminNavbarComponent,
    // DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
