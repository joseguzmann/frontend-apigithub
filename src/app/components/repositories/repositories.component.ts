import { Component, OnInit } from '@angular/core';
import { RepositoriesList } from 'src/app/models/repositories-list';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositories!: RepositoriesList;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRepositories().subscribe((data) => {
      this.repositories = data;
    });
  }

}
