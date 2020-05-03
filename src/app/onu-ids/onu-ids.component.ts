import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onu-ids',
  templateUrl: './onu-ids.component.html',
  styleUrls: ['./onu-ids.component.css']
})
export class OnuIdsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(value) {
    console.log('Evento' + value);
  }

}
