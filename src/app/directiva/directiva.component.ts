import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listCourse: string[] = ['JAVA', 'PYTHON', 'C++', 'JAVASCRIPT', 'GO'];

  enable: boolean = true;

  constructor() {
  }

  setEnable(): void {
    this.enable = (this.enable == true) ? false : true;
  }

}
