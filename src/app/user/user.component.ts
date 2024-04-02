import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';
import { RouterModule, Router } from '@angular/router';
import { UserCardComponent } from "../user-card/user-card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [RouterModule, UserCardComponent]
})
export class UserComponent implements OnInit {

id!: number;

constructor(private userService: UserService, private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate(['user-card', id]);
  }

  users: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
    this.users = users;
  });
  }

}


