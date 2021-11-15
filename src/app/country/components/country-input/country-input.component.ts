import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Output()
  onEnter: EventEmitter<string> = new EventEmitter();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termInput: string = '';

  constructor() {}

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  public search() {
    this.onEnter.emit(this.termInput);
  }

  public keyboardPress() {
    this.debouncer.next(this.termInput);
  }
}
