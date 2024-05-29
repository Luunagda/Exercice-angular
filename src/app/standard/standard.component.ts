import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
@Injectable()
export class StandardComponent {
  constructor(private httpClient: HttpClient){}
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
