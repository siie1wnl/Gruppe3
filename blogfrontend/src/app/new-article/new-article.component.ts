import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-new-article',

  templateUrl: './new-article.component.html',
  styleUrl: './new-article.component.css'
})


export class NewArticleComponent {

  articleForm: FormGroup;
  title = '';
  author = '';
  description = '';
  content = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
    this.articleForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'author': [null, Validators.required],
      'description': [null, Validators.required],
      'content': [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.api.addArticle(this.articleForm.value)
      .subscribe((res: any) => {
        const id = res._id;
        this.isLoadingResults = false;
        this.router.navigate(['/details-article', id]);
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
