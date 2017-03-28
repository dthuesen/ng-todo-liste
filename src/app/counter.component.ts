import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-counter',
  template: `
    <p>
      Du bist bereits seit {{seconds}} Sekunden auf dieser Seite
    </p>
  `,
})
export class CounterComponent implements OnInit, OnDestroy {
  seconds = 0;

  secondsCount;


  constructor() {
  }

  ngOnInit() {
    this.secondsCount = setInterval( () => {
      console.log(this.seconds);
      this.seconds = this.seconds + 1;
    }, 1000);
  }


  ngOnDestroy() {
    clearInterval(this.secondsCount);
  }


}
