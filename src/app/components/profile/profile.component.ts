import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile!: User;

  constructor(private apiService: ApiService) {
   }

  ngOnInit(): void {
    this.apiService.getUser().subscribe((data) => {
      this.profile = data;
    });
  }

}
