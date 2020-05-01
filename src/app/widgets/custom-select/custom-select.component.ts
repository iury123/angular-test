import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {

  public isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
    this.isOpen = !this.isOpen;
  }


}
