import { Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';


export const routes: Routes = [
  { path: '', component: HeaderComponent } // ← ここが path: '' になっていること
];
