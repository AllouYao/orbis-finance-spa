import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'recover-password', loadChildren: () => import('./recover-password/recover-password.module').then(m => m.RecoverPasswordModule) },
  { path: 'confirm', loadChildren: () => import('./confirm/confirm.module').then(m => m.ConfirmModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
