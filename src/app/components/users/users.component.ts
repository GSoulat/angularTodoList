import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users : User[];
  usersSubscription: Subscription;

  constructor(private userService : UsersService) { }


  ngOnInit(): void {
    this.usersSubscription = this.userService.usersSub.subscribe(
      (usersRecup: User[]) => {
        this.users = usersRecup;
      }
    );
    this.userService.emitUser();
  }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

}
