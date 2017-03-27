import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-counter',
  template: `
    <p>
      Du bist bereits seit {{seconds}} Sekunden auf dieser Seite
    </p>
  `,
})
export class CounterComponent implements OnInit {
  seconds: number = 0;
  constructor() { }

  ngOnInit() { }
}
