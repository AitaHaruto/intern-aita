import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../services/message.service';
import { MessageComponent } from '../message/message.component';

import { Book } from '../../types/book/book.component';
import { CardComponent } from '../card/card.component';
// 1. DialogRemoveComponent をインポート（パスは実際の配置に合わせて調整してください）
import { DialogRemoveComponent } from '../dialog-remove/dialog-remove.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    CommonModule,
    CardComponent,
    FormsModule,
    MessageComponent

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  bookList: Book[] = [
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

  newBook: Book = {
    name: '',
    detail: '',
    evaluation: 0
  };

  // 2. constructor で MatDialog を受取るように修正
  constructor(private dialog: MatDialog,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  addBook(): void {
    if (!this.newBook.name.trim()) {
      return;
    }
    this.bookList.push({ ...this.newBook });
    this.messageService.add(`書籍「${this.newBook.name}」を追加しました`);
    this.resetForm();
  }

  deleteBook(index: number): void {
    // 1. ダイアログを表示
    const dialogRef = this.dialog.open(DialogRemoveComponent, {
      width: '350px',
      autoFocus: false
    });

    // 2. ダイアログが閉じた後の結果を受け取る
    dialogRef.afterClosed().subscribe((result: boolean) => {
      // 「はい」が押されて result が true の場合のみ削除を実行
      if (result) {
        this.bookList.splice(index, 1);
      }
    });
  }

  private resetForm(): void {
    this.newBook = {
      name: '',
      detail: '',
      evaluation: 0
    };
  }
}