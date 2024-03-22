import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBlockComponent } from './article-block.component';

describe('ArticleBlockComponent', () => {
  let component: ArticleBlockComponent;
  let fixture: ComponentFixture<ArticleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
