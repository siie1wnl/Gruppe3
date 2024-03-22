import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from '../article';

@Component({
  selector: 'app-new-article',

  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.css',
})
export class NewArticleComponent {
  title = '';
  author = '';
  description = '';
  content = '';
  isLoadingResults = false;

  fileToUpload: File | null = null;

  addArticleGroup = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    author: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    content: new FormControl<string>('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private api: ApiService,
  ) {}

  onFormSubmit() {
    this.isLoadingResults = true;
    if (this.addArticleGroup.valid) {
      const formValues = this.addArticleGroup.value;
      let newArticle: Article = new Article();

      newArticle._id = '';
      newArticle.updatedAt = new Date();

      newArticle.title = <string>formValues.title;
      newArticle.description = <string>formValues.description;
      newArticle.content = <string>formValues.content;
      newArticle.author = <string>formValues.author;

      this.api.addArticle(newArticle).subscribe(
        (res: any) => {
          this.router.navigate(['/']);
        },
        (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        },
      );
    }
  }

  handleFileInput(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileToUpload = file;
      console.log(file);
    }
  }
}
