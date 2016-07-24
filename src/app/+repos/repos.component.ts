import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";

@Component({
  moduleId: module.id,
  selector: 'app-repos',
  templateUrl: 'repos.component.html',
  styleUrls: ['repos.component.css'],
  providers: [ProfileService]
})
export class ReposComponent implements OnInit {
  getRepo: any[];
  constructor(private http: ProfileService) {}

  ngOnInit() {
    this.http.getRepo()
      .subscribe(
        data => this.getRepo = data,
        error => alert(error),
        () => console.log('Finished')
      );
  }

}
