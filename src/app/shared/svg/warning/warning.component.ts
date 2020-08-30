import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.svg',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarningComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
