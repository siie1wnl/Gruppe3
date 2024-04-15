import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBlockComponent } from './article-block.component';

describe('ArticleBlockComponent', () => {
  let component: ArticleBlockComponent;
  let fixture: ComponentFixture<ArticleBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [ArticleBlockComponent],
    }).compileComponents();

=======
      imports: [ArticleBlockComponent]
    })
    .compileComponents();
    
>>>>>>> a82c402 (Add article main site)
    fixture = TestBed.createComponent(ArticleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
