import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserCardComponent } from './user-card/user-card.component';

export const routes: Routes = [
   {path: 'user', component: UserComponent},
   {path: 'user-card',component: UserCardComponent}
];
