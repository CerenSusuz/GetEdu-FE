import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { LoginGuard } from './guards/login.guard';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomepageComponent},
  {path:"homepage/:loginModel",pathMatch:"full",component:HomepageComponent},
  {path:"homepage",pathMatch:"full",component:HomepageComponent},

  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"user/edit",component:EditUserComponent, canActivate:[LoginGuard]},
  {path:"categories",component:CategoryComponent, canActivate:[LoginGuard]},

  {path:"categories/filter/categoryParent/:parentCategoryId",component:HomepageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
