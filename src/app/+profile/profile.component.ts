import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile.service";
//https://www.youtube.com/watch?v=L7xPwhwbcHE
@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  getProfile: any;
  getRepo: any[];


  constructor(private http: ProfileService) {}
  ngOnInit() {
    this.http.getProfile().subscribe(
      data => this.getProfile = data,
      error => alert(error),
      () => console.log('Finished')
    );

  }

}
