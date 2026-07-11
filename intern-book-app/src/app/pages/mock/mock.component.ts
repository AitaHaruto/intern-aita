import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-mock',
  standalone: true,
  // 👇 ここに書き込んだマテリアルのModule（部品）が全て並んでいるか確認してください！
  imports: [
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './mock.component.html',
  styleUrl: './mock.component.css'
})
export class MockComponent {
}
