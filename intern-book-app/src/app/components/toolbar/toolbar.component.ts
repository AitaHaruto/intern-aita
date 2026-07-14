import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule,
    MatButtonModule, // mat-icon-button のために必要
    MatIconModule, CardComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
