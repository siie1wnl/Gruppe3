import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesComponent } from './articles.component';
import { Article } from '../article';
import { DecimalPipe } from '@angular/common';

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete article on call', () => {
    const testArticle: Article = new Article();

    testArticle._id = '1';
    testArticle.author = 'dev';
    testArticle.title = 'Test Article';
    testArticle.content = 'Test content';
    testArticle.description = 'Test Description';
    testArticle.updatedAt = new Date('2024-01-01');

    component.data.push(testArticle);
    //TODO pipe to number!!!
    //TODO test should proof that delete article was called
    //component.deleteArticle(testArticle._id)
  });
});
