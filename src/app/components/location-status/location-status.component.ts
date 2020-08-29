import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocationStatus } from 'src/app/models/location-status';

@Component({
  selector: 'app-location-status',
  templateUrl: './location-status.component.html',
  styleUrls: ['./location-status.component.css']
})
export class LocationStatusComponent implements OnInit {
  @Input() locationStatus: LocationStatus;
  @Output() remove = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveClick() {
    this.remove.emit();
  }

}
