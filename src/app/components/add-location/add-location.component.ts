import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  @Output() addLocation = new EventEmitter<string>();

  zipCode: string;

  constructor() { }

  ngOnInit(): void {
  }

  onAddLocationClick() {
    this.addLocation.emit(this.zipCode);
    this.zipCode = null;
  }

}
