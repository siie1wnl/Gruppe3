import { Component, Input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Article } from '../../article';
import { MatIcon } from '@angular/material/icon';

let input = Input;

@Component({
  selector: 'app-article-block',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatCardTitle,
    MatIcon,
  ],
  templateUrl: './article-block.component.html',
  styleUrl: './article-block.component.css',
})
export class ArticleBlockComponent {
  @Input() article: Article = new Article();
}
