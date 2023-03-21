import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-server',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!!";
  serverName = '';
  serverCreated = false;
  servers = ['Test server 1', 'Test server 2'];

  onCreateServer = () => {
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created!! Name is " + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName = (event: Event) => {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
