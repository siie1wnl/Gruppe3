import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Article } from './article';
import { Comment } from './comment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const apiUrl = 'https://glowing-lamp-xqj494xvgpvf99vp-3000.app.github.dev/article';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // wir loggen auf der Konsole
      return of(result as T);
    };
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(apiUrl).pipe(
      tap((article) => console.log('fetched articles')),
      catchError(this.handleError('getArticles', [])),
    );
  }

  getArticle(id: string): Observable<Article> {
    const url = `${apiUrl}/${id}`;
    console.log('getArticle ' + url);
    return this.http.get<Article>(url).pipe(
      tap((_) => console.log(`fetched article id=${id}`)),
      catchError(this.handleError<Article>(`getArticle id=${id}`)),
    );
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(apiUrl, article, httpOptions).pipe(
      tap((art: Article) => console.log(`added article w/ id=${art._id}`)),
      catchError(this.handleError<Article>('addArticle')),
    );
  }

  updateArticle(id: any, article: Article): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, article, httpOptions).pipe(
      tap((_) => console.log(`updated article id=${id}`)),
      catchError(this.handleError<any>('updateArticle')),
    );
  }

  getComments(id: string): Observable<Article> {
    const apiUrl = 'https://glowing-lamp-xqj494xvgpvf99vp-3000.app.github.dev/comment';

    const url = `${apiUrl}/${id}`;
    console.log('getComment ' + url);
    return this.http.get<Article>(url).pipe(
      tap((_) => console.log(`fetched comment id=${id}`)),
      catchError(this.handleError<Article>(`getComment id=${id}`)),
    );
  }

  addComment(comment: Comment): Observable<Comment> {
    const apiUrlComments = 'https://glowing-lamp-xqj494xvgpvf99vp-3000.app.github.dev/comment';

    return this.http.post<Comment>(apiUrlComments, comment, httpOptions).pipe(
      tap((art: Comment) => console.log(`added comment w/ id=${art._id}`)),
      catchError(this.handleError<Comment>('addComment')),
    );
  }

  updateComment(id:string, comment: Comment): Observable<Comment> {
    const apiUrlComments = 'https://glowing-lamp-xqj494xvgpvf99vp-3000.app.github.dev/comment';
    const url = `${apiUrlComments}/${id}`;

    console.log("trying to reach following URL: " + url)
    return this.http.put<Comment>(url, comment, httpOptions).pipe(
      tap((art: Comment) => console.log(`updated comment w/ id=${art._id}`)),
      catchError(this.handleError<Comment>('updatedComment')),
    );
  }
}
