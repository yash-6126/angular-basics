import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-user',
  templateUrl: './server-user.component.html',
  styleUrls: ['./server-user.component.css']
})
export class ServerUserComponent implements OnInit {
  username = '';

  resetUser = () => {
    this.username = '';
  }

  constructor() { }

  ngOnInit(): void {
  }
}
