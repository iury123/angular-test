import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KeyValue } from '@angular/common';

const OnuStatus = {
  ACTIVE_WITH_APPLIED_PROFILE: 0,
  ACTIVE_WITH_FAILED_PROFILE: 1,
  ACTIVE_NO_PROFILE: 2,
  INACTIVE: 3
};

const OnuStatusText = {
  [OnuStatus.ACTIVE_WITH_APPLIED_PROFILE]: 'Ativa e com profile aplicado',
  [OnuStatus.ACTIVE_WITH_FAILED_PROFILE]: 'Ativa e com profile em falha',
  [OnuStatus.ACTIVE_NO_PROFILE]: 'Ativa e sem o profile',
  [OnuStatus.INACTIVE]: 'Inativa',
};

const OnuStatusCssClass = {
  [OnuStatus.ACTIVE_WITH_APPLIED_PROFILE]: 'green-oval',
  [OnuStatus.ACTIVE_WITH_FAILED_PROFILE]: 'red-oval',
  [OnuStatus.ACTIVE_NO_PROFILE]: 'blue-oval',
  [OnuStatus.INACTIVE]: 'grey-oval',
};

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {

  public isOpen = false;
  public selectedOption: number;
  // tslint:disable-next-line: no-output-native
  @Output() select = new EventEmitter<number>();
  public compareTo = (a: KeyValue<string, number>, b: KeyValue<string, number>) => 0;

  constructor() { }

  ngOnInit(): void {
  }

  public get onuStatus() {
    return OnuStatus;
  }

  public get onuStatusText() {
    return OnuStatusText;
  }

  public get onuStatusCssClass() {
    return OnuStatusCssClass;
  }

  public toggle() {
    this.isOpen = !this.isOpen;
  }

  public onSelect(selectedOption: number) {
    if (selectedOption !== this.selectedOption) {
      this.selectedOption = selectedOption;
      this.select.emit(selectedOption);
    }
    this.isOpen = false;
  }


}
