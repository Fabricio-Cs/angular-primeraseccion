import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

 
  elementos:string[]=['agua','tierra','fuego','aire'];
  elementoBorrado: string='';

  borrarElemento()
  {
    
   this.elementoBorrado = this.elementos.shift() || '';
   

  }


}
