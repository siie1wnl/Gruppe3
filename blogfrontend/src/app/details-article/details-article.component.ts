import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Article } from '../article';


@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrl: './details-article.component.css'
})
export class DetailsArticleComponent {

  article: Article = { _id: '', title: '', author: '', description: '', content: '', updatedAt: new Date() };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.getArticleDetails(this.route.snapshot.params['id']);
  }

  getArticleDetails(id: string) {
    console.log("Get articleDateils ID " + id);
    this.api.getArticle(id)
      .subscribe((data: any) => {
        console.log('received data');
        console.log(data);
        this.article = data;
        this.isLoadingResults = false;
      });
  }

  deleteArticle(id: string) {
    console.log("delete article ID " + id);
    this.api.removeArticle(id)
      .subscribe((data: any) => {
        this.article = data;
        this.isLoadingResults = false;
        this.router.navigate(['/articles']);

      });
  }

}
