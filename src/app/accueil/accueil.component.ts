import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
@Injectable()
export class AccueilComponent {
  constructor(private httpClient: HttpClient){
    console.log(environment);
console.log(environment.classeBaseUrl);
console.log(environment.apiLangueUrl);

  }

  monTableau:any[]=[];

  ngOnInit(){
    this.httpClient
      .get<any[]>(environment.classeBaseUrl)
      .subscribe( //HttpClient retourne un observable
        (reponse) =>{
          console.log(reponse);
          this.monTableau = reponse;
        },
        (error) =>{
          console.log('Erreur dans la récupération des données :'+ error);
        }
      )
  }
}
