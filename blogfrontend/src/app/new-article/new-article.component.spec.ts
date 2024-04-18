import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Article } from '../article';
import { NewArticleComponent } from './new-article.component';
import { ApiService } from '../api.service';
import axios from 'axios';
import { Data } from '@angular/router';
import { ArticlesComponent } from '../articles/articles.component';


describe('NewArticleComponent', () => {
  let component: NewArticleComponent;
  let fixture: ComponentFixture<NewArticleComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewArticleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
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

    // Inject the http service and test controller for each test
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

  // Respond with mock error
  req.flush(emsg, { status: 404, statusText: 'Not Found' });
});
});
