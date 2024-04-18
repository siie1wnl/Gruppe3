import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticleComponent } from './edit-article.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Data } from '@angular/router';
import axios from 'axios';
import { ArticlesComponent } from '../articles/articles.component';

describe('EditArticleComponent', () => {
  let component: EditArticleComponent;
  let fixture: ComponentFixture<EditArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a dummy article', () => {

  const mockArtikel = {
    _id: 'mockID',
    title: 'Mock Titel',
    author: 'Mock Autor',
    description: 'Mock Beschreibung',
    content: 'Mock Inhalt'
  };

  component.getArticle('mockID');

  expect(component.articleForm.value).toEqual({
    title: mockArtikel.title,
    author: mockArtikel.author,
    description: mockArtikel.description,
    content: mockArtikel.content
  });

  });

  it('Article that should be edited is the right one', () => {
    component.getArticle('mockID');
    expect(component.articleForm);

  });

  it('form gets filled out correctly', () => {
    expect(component.onFormSubmit()).toBe(true);
  });

  it('/new-article loads', async() =>{
    const url = '/new-article';
    const response = await axios.get(url);
    expect(response.status).toBe(200);
  })

});

describe('HttpClient testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  /// Tests begin ///

  it('can test for 404 error', () => {
    const emsg = 'deliberate 404 error';

    httpClient.get<Data[]>('/new-article').subscribe({
      next: () => fail('should have failed with the 404 error'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).withContext('status').toEqual(404);
        expect(error.error).withContext('message').toEqual(emsg);
      },
    });

    const req = httpTestingController.expectOne('/new-article');


    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });


});
