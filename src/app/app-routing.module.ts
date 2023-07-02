import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
import { AboutComponent } from './about/about.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: '', component: LogoComponent},
  {path: 'community', component: CommunityComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'location', component: LocationComponent},
  {path: 'about', component: AboutComponent},
  {path: 'recipes', component: RecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
