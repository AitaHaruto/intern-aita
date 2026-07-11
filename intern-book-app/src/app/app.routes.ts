import { Routes } from '@angular/router';
import { MockComponent } from './pages/mock/mock.component';

export const routes: Routes = [
  { path: '', component: MockComponent } // ← ここが path: '' になっていること
];
