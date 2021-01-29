import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'jobs' },
  { path: 'createpost', loadChildren: () => import('./features/createpost/createpost.module').then(m => m.CreatepostModule) },

  { path: 'search/:keyword', loadChildren: () => import('./features/jobad-list/jobad-list.module').then(m => m.JobadListModule) },
  { path: 'category/:name', loadChildren: () => import('./features/jobad-list/jobad-list.module').then(m => m.JobadListModule) },
  { path: 'category', loadChildren: () => import('./features/jobad-list/jobad-list.module').then(m => m.JobadListModule) },
  { path: 'jobs', loadChildren: () => import('./features/jobad-list/jobad-list.module').then(m => m.JobadListModule) },
  
  

  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) },

  

  { path: 'category/:name/jobads/:id', loadChildren: () => import('./features/jobad-details/jobad-details.module').then(m => m.JobadDetailsModule) },
  { path: 'category/jobads/:id', loadChildren: () => import('./features/jobad-details/jobad-details.module').then(m => m.JobadDetailsModule) },
  { path: 'jobs/jobads/:id', loadChildren: () => import('./features/jobad-details/jobad-details.module').then(m => m.JobadDetailsModule) },
  { path: 'jobads/:id', loadChildren: () => import('./features/jobad-details/jobad-details.module').then(m => m.JobadDetailsModule) },

  { path: 'userdetail/:username', loadChildren: () => import('./features/user-details/user-details.module').then(m => m.UserDetailsModule) },
  { path: 'userdetail/:username/jobads', loadChildren: () => import('./features/user-details/user-details.module').then(m => m.UserDetailsModule) },
  
  { path: 'updateProfile', loadChildren: () => import('./features/update-profile/update-profile.module').then(m => m.UpdateProfileModule) },
  
  { path: 'updateJobad/:id', loadChildren: () => import('./features/update-jobads/update-jobads.module').then(m => m.UpdateJobadsModule) },
  
  { path: 'chat', loadChildren: () => import('./features/chat/chat.module').then(m => m.ChatModule) },
  
  { path: '**', redirectTo: 'jobs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
