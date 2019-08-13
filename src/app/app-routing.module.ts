import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviesComponent } from './movies/movies.component';
import { CategoriesComponent } from './categories/categories.component';
import { DayProposalsComponent } from './day-proposals/day-proposals.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'movies', component: MoviesComponent, children: [
      { path: 'movie-details:', component: MovieDetailsComponent }
    ]
  },
  { path: 'categories', component: CategoriesComponent },
  { path: 'dayprop', component: DayProposalsComponent },

  { path: 'not-found', component: PageNotFoundComponent },

  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
