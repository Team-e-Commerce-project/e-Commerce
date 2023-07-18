import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./Users/dashboard/dashboard.component";
import { ProductsComponent } from "./Users/products/products.component";
import { AppRoutesName } from "./app.routes.name";
import { DetailProductComponent } from "./Users/detail-product/detail-product.component";

const routes: Routes =[
   {
    path : '**',
    component : DashboardComponent,
   },
   {
    path : AppRoutesName.products,
    component : ProductsComponent,
   },
   {
    path : AppRoutesName.detail,
    component : DetailProductComponent,
   }
];

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}
