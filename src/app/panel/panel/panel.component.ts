import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})


export class PanelComponent implements OnInit { // creo oninit para inicializar 
  formularioReactivo1 : FormGroup; // creo formgroup para realizar el formulario de panel
  
  budgetService = inject(BudgetService) //injecto el servicio para pasarle el calculo desde servicio budget

  totalcostWeb = 0 
  constructor(private form:FormBuilder) {// se crea el formulario reactivo con los dos inputs (num paginas y num idioma)
    this.formularioReactivo1 = this.form.group({
      numPagina: new FormControl(0, [] ), // aqui se valida el formulario con los requsitios que quieras
      numIdioma: new FormControl(0, [] ), // aqui se valida el formulario con los requsitios que quieras
   })

}

  calcularPresupuestoPaginas():void{ // definimos el presupuesto a partir de los inputs que nos de el  formulario
    const numPagina = this.formularioReactivo1.get('numPagina')?.value
    const numIdioma = this.formularioReactivo1.get('numIdioma')?.value
    const totalcostWeb = this.budgetService.calculoBugdetWeb(numPagina,numIdioma)
    this.totalcostWeb = totalcostWeb
  }

nextStep(controlName:string){
  const control = this.formularioReactivo1.get(controlName)
if(control){
  control.setValue(control.value + 1) }
}

beforeStep(controlName:string){
  const control = this.formularioReactivo1.get(controlName)
if(control){
  control.setValue(control.value - 1) }
}

ngOnInit(): void {
  this.formularioReactivo1.valueChanges.subscribe(()=>{ // hacemos un suscribir para llamar a la funcion calcular presupuesto
    this.calcularPresupuestoPaginas();
  })
}


}

