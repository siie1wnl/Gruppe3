import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Article } from '../article';
import { Comment } from '../comment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrl: './details-article.component.css'
})


export class DetailsArticleComponent {
  article: Article = {
    _id: '',
    title: '',
    author: '',
    description: '',
    content: '',
    comments: [''],
    updatedAt: new Date(),
  };

  allComments: Comment[] = [];

  addComment = new FormGroup({
    id: new FormControl<string>('', [Validators.required]),
    comment: new FormControl<string>('', [Validators.required])
  });


  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  generateID(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.getArticleDetails(this.route.snapshot.params['id']);
  }

  getArticleDetails(id: string) {
    console.log('Get articleDateils ID ' + id);
    this.api.getArticle(id).subscribe((data: any) => {
      console.log('received data');
      console.log(data);
      this.article = data;
      this.getComments(id);
    });
  }

  getComments(id: string) {
    console.log('Get comments corresponding to ID ' + id);
  
    const requests = this.article.comments.map(element => {
      return this.api.getComments(element);
    });
  
    forkJoin(requests).subscribe((responses: any[]) => {
      console.log('Received all Comments data');
      console.log(responses);
  
      const allComments = responses.reduce((acc, response) => acc.concat(response), []);
  
      this.allComments = allComments;
      this.isLoadingResults = false;
    });
  }

  onParentCommentSubmit() {

    if (this.addComment.value.comment != null) {
      this.isLoadingResults = true;
      let comment: Comment = new Comment();
      comment._id = this.generateID(24);
      comment.author = "anonymous"
      comment.content = this.addComment.value.comment;
      comment.childComments = [];
      this.article.comments.push(comment._id);
      console.log("the id is: " + this.route.snapshot.params['id'])
      this.api.updateArticle(this.route.snapshot.params['id'],this.article).subscribe((data: any) => {
        this.api.addComment(comment).subscribe((data: any) => {
          console.log('received Comments data');
          console.log(data);
          this.allComments.push(comment);
          this.addComment.reset();
          this.isLoadingResults = false;
        });
      });;

    }
  }
  onNewChild(comment: Comment) {
    console.log("received the Comment:" + comment._id)
    this.allComments.forEach( (element) => {
      if (element._id == comment._id && this.addComment.value.comment != null) {
        this.isLoadingResults = true;
        element.childComments.push(this.addComment.value.comment)
        this.api.updateComment(element._id , element).subscribe((data:any) => {
          this.addComment.reset();
          this.isLoadingResults = false;
        })
      }
    })
  }
}
