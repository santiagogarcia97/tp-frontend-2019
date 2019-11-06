import { Component, OnInit } from '@angular/core';
import {EstadioModel} from '../../../../core';
import {EstadiosService} from '../../../../core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-estadio-details',
  templateUrl: './estadio-details.component.html',
  styleUrls: ['./estadio-details.component.css']
})
export class EstadioDetailsComponent implements OnInit {

  result: {
    message: string;
    data: EstadioModel;
    error: string;
  }

  constructor(
    private EstadiosServ: EstadiosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.EstadiosServ.getById(this.route.snapshot.paramMap.get('id'))
      .subscribe( result => this.result = result );
  }

}
