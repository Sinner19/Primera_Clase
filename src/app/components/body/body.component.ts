import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
mostar=true;
frase: any = {
  mensaje:"Tengo los lagos, tengo los ríos Tengo mis dientes pa cuando me sonrío La nieve que maquilla mis montañas Tengo el sol que me seca y la lluvia que me baña Un desierto embriagado con peyote Un trago de pulque para cantar con los coyotes Todo lo que necesito Tengo a mis pulmones respirando azul clarito La altura que sofoca Soy las muelas de mi boca mascando coca El otoño con sus hojas desmayadas Los versos escritos bajo la noche estrellada Una viña repleta de uvas Un cañaveral bajo el sol en Cuba Soy el mar Caribe que vigila las casitas Haciendo rituales de agua bendita El viento que peina mi cabello Soy todos los santos que cuelgan de mi cuello El jugo de mi lucha no es artificial Porque el abono de mi tierra es natural",
autor: "Avance De Cancion Latinoamerica"
}
  constructor() { }

  ngOnInit(): void {
  }

}
