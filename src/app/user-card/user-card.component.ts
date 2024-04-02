import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.interface';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})

export class UserCardComponent implements OnInit{
    // name: any;
    // private createInitials():void {
    //   let initials = this.name.charAt(0).toUpperCase();
    //   console.log(initials)
    // }
    
    // users: User[] =[];
    
    user: any = '';
    
    constructor(private userService: UserService, private route: ActivatedRoute){}

    ngOnInit():void{
      this.getUserById();
    }

    getUserById(){
      this.userService.getUsers().subscribe((users) => {
        const userId = this.route.snapshot.paramMap.get('id') || "";
        [this.user] = users.filter((user: { id: string; }) => user.id == userId);
      });  
    }    
}
