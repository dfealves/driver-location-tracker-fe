import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/shared/service/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  constructor(private service: LocationService) { }

  ngOnInit(): void {
    this.service.getLocation()
  }
}
