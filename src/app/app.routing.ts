import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutesName } from "./app.routes.name";

const routes: Routes =[
  {
    path: AppRoutesName.user,
    loadChildren: () => import('./Users/users.module').then(m => m.UsersModule),
  },

  {
    path: '',
    redirectTo: AppRoutesName.user,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/user'
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
