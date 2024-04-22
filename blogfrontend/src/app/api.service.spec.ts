import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should delete article', () => {
    const testArticle = new Article();
    testArticle._id = '1';
    testArticle.title = 'Test Article';
    testArticle.description = 'Test Description';
    testArticle.content = 'Test Content';
    testArticle.author = 'Test Author';

    service.deleteArticle(testArticle._id);

    const req = httpTestingController.expectOne('/articles/1');

    expect(req.request.method).toEqual('DELETE');
    req.flush(testArticle._id);

    httpTestingController.verify();
  });
});
