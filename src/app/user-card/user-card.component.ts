import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})

export class UserCardComponent implements OnInit{

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router){}

   public goback() {
    this.router.navigate(['/']);
  }

  public createInitials(name: string):void {
    const namesArray = name.trim().split(' ');
    if (namesArray.length === 1)
     console.log(`${namesArray[0].charAt(0)}`);
    else
     console.log( `${namesArray[0].charAt(0)}${namesArray[namesArray.length - 1].charAt(0)}`);
  }

  user: any = '';

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
