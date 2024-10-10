import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../share/modal/modal.component';


@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule, ModalComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})


export class PanelComponent implements OnInit { // creo oninit para inicializar 
  formularioReactivo1 : FormGroup; // creo formgroup para realizar el formulario de panel
  
  budgetService = inject(BudgetService) //injecto el servicio para pasarle el calculo desde servicio budget

  totalCosteWeb = 0 
  constructor(private form:FormBuilder) {// se crea el formulario reactivo con los dos inputs (num paginas y num idioma)
    this.formularioReactivo1 = this.form.group({
      numPagina: new FormControl(0, [Validators.required, Validators.min(1)] ), // aqui se valida el formulario con los requsitios que quieras
      numIdioma: new FormControl(0, [Validators.required, Validators.min(1)] ), // aqui se valida el formulario con los requsitios que quieras
   })


  }

  @Output() mensajeEmitido = new EventEmitter<number>();
  @Output() mensajePaginasIdiomas = new EventEmitter<{numPagina: number, numIdioma:number}>();

  calcularPresupuestoPaginas():void{ // definimos el presupuesto de web a partir de los inputs que nos de el  formulario
    const numPagina = this.formularioReactivo1.get('numPagina')?.value
    const numIdioma = this.formularioReactivo1.get('numIdioma')?.value
    const totalcostWeb = this.budgetService.calculoBugdetWeb(numPagina,numIdioma)
    this.totalCosteWeb = totalcostWeb
    this.mensajeEmitido.emit(this.totalCosteWeb) // emitir el valor del coste de las paginas al padre
    this.mensajePaginasIdiomas.emit({ numPagina, numIdioma });

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

