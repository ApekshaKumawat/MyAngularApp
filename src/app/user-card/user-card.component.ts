import { Component, Input } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
    name: any;
    private createInitials():void {
      let initials = this.name.charAt(0).toUpperCase();
      console.log(initials)
    }
    
    users: User[] =[];
    
    constructor(private userService: UserService){}

    ngOnInit(): void {
      this.userService.getUsers().subscribe((users) => {
      this.users = users;
      });
    }
}
