import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

//implementamos OnInit para usar nombre del usuario si es que esta logeado
//y nos suscribimos a los cambio en tiempo real
export class ContactoComponent implements OnInit, OnDestroy{

  formularioContacto: FormGroup
  tipoDni: string = 'DNI'
  //Supongamos que consumimos desde el backEnd que el usuarioes Pedro
  //usuarioActivo: string = 'Pedro'

  usuarioActivo: any = {
    nombre: 'Pedro',
    apellido: 'Picapiedra',
    dni: 12345678
  }

  
  constructor( private form: FormBuilder){
     this.formularioContacto = this.form.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      tipoDni: [''],
      //dni: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    //Suscripcion
    //Cuando hay un cambio en los valores del formulario, imprimimos los valores en consola
    //Los valores son objetos con los valores de los campos del formulario
    //Ej: {nombre: 'Juan', apellido: 'Perez', dni: '12345678', email: 'juan@example.com'}
    //this.formularioContacto.valueChanges.subscribe(valor=>{
    //  console.log(valor)
    //})

    //Ej: {nombre: 'Juan', apellido: 'Perez', dni: '12345678', email: 'juan@example.com'}
    //this.formularioContacto.valueChanges.subscribe(valor=>{
    //  console.log(valor.nombre)
    //})

    this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo.nombre)
    this.formularioContacto.get('nombre')?.disable()
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(valor=>{
      //console.log(valor)
      this.tipoDni = valor
    })

    /*
    //ponemos el campo nombre con el del usuario logueado y ponemos disabled el input
    //this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo.nombre)
    
    //usamos patchValue para seter vaios campos
    this.formularioContacto.patchValue({
      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni
    })
    this.formularioContacto.get('nombre')?.disable()
    this.formularioContacto.get('apellido')?.disable()
    this.formularioContacto.get('dni')?.disable()
    */
  }

  ngOnDestroy(): void {
    console.log('Se destruyo el component')
  }

  hasError( controlName: string, errorType: string){
    //console.log('Imprimo error ',this.formularioContacto.get(controlName)?.hasError(errorType));
    //console.log('Touch', this.formularioContacto.get(controlName)?.touched )
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched 
  }


  enviar(){
   console.log(this.formularioContacto)
  }


  /*
  public usuario: any = {
    name: '',
    email: ''
  }

  enviar() {
    console.log(this.usuario);
  }
  */ 
  
}
