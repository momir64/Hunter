import { Component } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD.MM.YYYY.',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-gb' },
  ],
})
export class AppComponent {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  title = 'Hunter';

  open() {
    alert("function called");
  }

  phrases: string[] = []

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value)
      this.phrases.push(value);
    event.chipInput!.clear();
  }

  remove(fruit: string): void {
    const index = this.phrases.indexOf(fruit);
    if (index >= 0)
      this.phrases.splice(index, 1);
  }
  
}
