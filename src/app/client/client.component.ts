import {Component, OnInit} from '@angular/core';
import {Client} from './client';
import {LIST_CLIENT} from './client.json';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {

  listCliet: Client[];

  constructor() {
  }

  ngOnInit(): void {
    this.listCliet = LIST_CLIENT;
  }

}
