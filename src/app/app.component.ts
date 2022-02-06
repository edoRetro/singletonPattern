import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'promises-test';

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.initialLoad('init');

    setTimeout(()=> { this.initialLoad('timeout') }, 3000);
  }

  async initialLoad(caller: string) {
    console.log("enter: " + caller);    
    let result = await this.testService.longTimeRequest();
    console.log("after await: " + caller);    
    console.log("result - " + caller + ": " + JSON.stringify(result));    
  }
}
