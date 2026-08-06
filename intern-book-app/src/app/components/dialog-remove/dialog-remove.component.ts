import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-remove',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog-remove.component.html',
  styleUrl: './dialog-remove.component.css'
})
export class DialogRemoveComponent {

}
