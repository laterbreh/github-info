import { Component } from '@angular/core';
import { ProfileComponent } from './+profile';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { RouterActiveDirective } from 'ng2-router-active';
import { ReposComponent } from './+repos';
import { HomeComponent } from './+home';

@Component({
  moduleId: module.id,
  selector: 'github-info-app',
  templateUrl: 'github-info.component.html',
  styleUrls: ['github-info.component.css'],
  directives: [ROUTER_DIRECTIVES, RouterActiveDirective],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/profile', component: ProfileComponent},
  {path: '/repos', component: ReposComponent},
  {path: '/', component: HomeComponent},
  {path: '/github-info', component: HomeComponent}
])
export class GithubInfoAppComponent {
  title = 'NG2 Github Profile';

}
