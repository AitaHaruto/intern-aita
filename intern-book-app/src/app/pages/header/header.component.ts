import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, CardComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
