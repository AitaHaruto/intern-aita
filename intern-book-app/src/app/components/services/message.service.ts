import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  // メッセージを追加する
  add(message: string): void {
    this.messages.push(message);
  }

  // メッセージを全削除する（クリア用）
  clear(): void {
    this.messages = [];
  }
}