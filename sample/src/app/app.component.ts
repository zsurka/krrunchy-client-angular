import { Component, OnInit } from '@angular/core';
import { KrrunchyBackendService } from './Krrunchy-Backend.service';
import { Menu } from './Menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KrrunchyBackendService]
})
export class AppComponent implements OnInit {
  title = 'Krrunchy';
  menus: Menu[] = [];
  private backendService: KrrunchyBackendService;

  constructor(service: KrrunchyBackendService) {
    this.backendService = service;
  }

  public ngOnInit() {
    console.log('initiating service');
    this.backendService.getAllMenus()
    .subscribe(
      (menus) => {
        this.menus = menus;
        console.log(this.menus);
      }
    );
  }
}
