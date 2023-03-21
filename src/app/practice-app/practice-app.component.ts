import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice-app.component.html',
  styleUrls: ['./practice-app.component.css']
})
export class PracticeAppComponent implements OnInit {
  showPassword = false;
  buttonLogs = [];
  
  timestamp = new Date();
  date = new Date(this.timestamp).toUTCString();

  togglePassword = () => {
    this.showPassword = !this.showPassword;
    this.buttonLogs.push(this.date);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
