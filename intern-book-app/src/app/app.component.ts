import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { book } from './types/book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intern-book-app';
  
  bookList: book[] = [
    {
      name: 'アンドロイドは電気羊の夢を見るか？',
      detail: '第三次大戦後の未来、サンフランシスコを舞台に賞金稼ぎのリック・デッカードが、火星から逃亡してきた8体のアンドロイドを「処理」するというあらすじ',
      evaluation: 90,
    },
    {
      name: '岩田さん：岩田聡はこんなことを話していた。',
      detail: '任天堂の元社長、岩田聡さんのことばをまとめた本',
      evaluation: 90,

    }
  ];
}
