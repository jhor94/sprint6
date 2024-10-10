import { Component, OnInit } from '@angular/core';
import { PanelComponent } from "../../panel/panel/panel.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BudgetsListComponent } from "../../budgets-list/budgets-list/budgets-list.component";
import { BudgetService } from '../../services/budget.service';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PanelComponent, ReactiveFormsModule, BudgetsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  formularioEjemplo: FormGroup;
  totalCoste: number = 0;
  mensajeDesdeHija: number = 0
  totalCosteWeb: number = 0

  constructor(private form: FormBuilder, private budgetService: BudgetService) {
    this.formularioEjemplo = this.form.group({
      seo: [false,],
      ads: [false,],
      web: [false,],
      nombre: new FormControl('', [Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.email]),
  
    })

    this.formularioEjemplo.valueChanges.subscribe(values => {
      this.recalcularCosteltotal(values)

    });

  }

  numPagina:number = 0
  numIdioma:number = 0
  fecha:string = new Date().toISOString()
  actualizarNumPaginasIdiomas(valores: {numPagina:number, numIdioma:number}){
    this.numPagina = valores.numPagina;
    this.numIdioma = valores.numIdioma;

  }
  actualizarCosteWeb(coste: number) {
    this.totalCosteWeb = coste;
    this.recalcularCosteltotal(this.formularioEjemplo.value)
  }


  recalcularCosteltotal(values: any) {
    this.totalCoste = 0;
    if (values.seo) this.totalCoste += 300;
    if (values.ads) this.totalCoste += 400;
    if (values.web) this.totalCoste += 500 + this.totalCosteWeb;

  }

  agregarPresupuesto() {
    if(this.formularioEjemplo.valid){
      const nuevoPresupuesto = {
        servicios: {
          seo: this.formularioEjemplo.get('seo')?.value,
          ads: this.formularioEjemplo.get('ads')?.value,
          web: this.formularioEjemplo.get('web')?.value,
        },
        nombre: this.formularioEjemplo.get('nombre')?.value,
        telefono: this.formularioEjemplo.get('telefono')?.value,
        email: this.formularioEjemplo.get('email')?.value,
        total: this.totalCoste,
        numPagina: this.numPagina,
        numIdioma: this.numIdioma,
        fecha:this.fecha,
    };
    this.budgetService.addBudget(nuevoPresupuesto)
    }
    
  }


ngOnInit(): void {

}

title: string = 'Consigue la mejor calidad';
}

