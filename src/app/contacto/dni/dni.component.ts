import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges {


  @Input() tipoDni: string = 'DNI'
  fomularioDocumento: FormGroup
 

  
  constructor( private form: FormBuilder){
     this.fomularioDocumento = this.form.group({
      dni: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  hasError( controlName: string, errorType: string){
    //console.log('Imprimo error ',this.formularioContacto.get(controlName)?.hasError(errorType));
    //console.log('Touch', this.formularioContacto.get(controlName)?.touched )
    return this.fomularioDocumento.get(controlName)?.hasError(errorType) && this.fomularioDocumento.get(controlName)?.touched 
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.['tipoDni'].currentValue);
  }

}
