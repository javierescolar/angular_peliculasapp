import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  pag:string;
  constructor(
    private _ps:PeliculasService,
    private _route:ActivatedRoute
  ) {
    this._route.params.subscribe(
      params => {
        this.pag = params['pag'];
        this._ps.getPelicula(params['id']).subscribe(
          pelicula => {
            console.log(pelicula);
            this.pelicula=pelicula;
          }
        );
      }
    );
  }

  ngOnInit() {
  }

}
