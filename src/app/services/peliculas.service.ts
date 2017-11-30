import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apiKey: string = "ea855defacbabd5bdbecb9811e874cd9";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  peliculas:any[] = [];

  constructor(
    private _jsonp:Jsonp
  ) { }

  getPopulares() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).map(res => res.json().results);
  }

  buscarPelicula(texto:string) {
    let url = `${ this.urlMoviedb }/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get(url)
      .map(res => {
        this.peliculas = res.json().results;
        console.log(this.peliculas);
        return res.json().results;
      });
  }

  getCarteleras(){

    let fecha_desde = new Date();
    let fecha_hasta = new Date();
    fecha_hasta.setDate(fecha_desde.getDate() + 7 );

    let desdeString = `${ fecha_desde.getFullYear()}-${fecha_desde.getMonth()+1}-${fecha_desde.getDay()}`;
    let hastaString = `${ fecha_hasta.getFullYear()}-${fecha_hasta.getMonth()+1}-${fecha_hasta.getDay()}`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${desdeString}&primary_release_date.lte=${hastaString}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).map(res => res.json().results);
  }

  getPopularesNinos(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).map(res => res.json().results);
  }

  getPelicula(id_pelicula:string){
    let url = `${ this.urlMoviedb }/movie/${id_pelicula}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this._jsonp.get(url).map(res => res.json());
  }
}
