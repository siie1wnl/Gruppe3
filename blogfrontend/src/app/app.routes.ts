import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { DetailsArticleComponent } from './details-article/details-article.component'
import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';

const routes: Routes = [
  {
    path: 'articles',
    component: ArticlesComponent,
    data: { title: 'Alle Artikel' }
  },
  {
    path: 'details-article/:id',
    component: DetailsArticleComponent,
    data: { title: 'Gesamter Artikel' }
  },
  {
    path: 'new-article',
    component: NewArticleComponent,
    data: { title: 'Artikel hinzufügen' }
  },
  {
    path: 'edit-article/:id',
    component: EditArticleComponent,
    data: { title: 'Artikel bearbeiten' }
  },
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
