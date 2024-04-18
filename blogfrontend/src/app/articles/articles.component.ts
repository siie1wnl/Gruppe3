import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  displayedColumns: string[] = ['title', 'author'];
  data: Article[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    //Use if you want to fake articles
    let testArticle: Article = new Article();
    testArticle._id = '1';
    testArticle.title = 'Test Article';
    testArticle.description = 'Description';
    testArticle.content = 'Test';
    testArticle.author = 'Kevin';
    testArticle.updatedAt = new Date();

    for (let i = 0; i < 5; i++) {
      this.data.push(testArticle);
    }
    //TODO comment in if you want to use real backend
    this.api.getArticles().subscribe(
      (res: any) => {
        console.log('Fetching data');
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      },
    );
  }

  deleteArticle(id: number) {
    const selectedArticleToDelete: Article | null = this.filterForArticle(id);

    if (selectedArticleToDelete !== null) {
      this.api.deleteArticle(id, selectedArticleToDelete);
    } else {
      console.log('Could not find article with id ' + id + ' to delete');
    }
  }

  filterForArticle(id: any): Article | null {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]._id === id) {
        return this.data[i];
      }
    }
    return null;
  }
}
