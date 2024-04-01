import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
  this.userService.getUsers().subscribe((users) => {
  this.users = users;
  
  });
  }

}
