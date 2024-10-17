import { Component, OnInit} from '@angular/core';
import { PanelComponent } from "../../panel/panel/panel.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { BudgetsListComponent } from "../../budgets-list/budgets-list/budgets-list.component";
import { BudgetService } from '../../services/budget.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from '../../interfaces/budget';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PanelComponent, ReactiveFormsModule, BudgetsListComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  formularioEjemplo: FormGroup;
  totalCoste: number = 0;
  mensajeDesdeHija: number = 0
  totalCosteWeb: number = 0

  numPagina:number = 0
  numIdioma:number = 0
  fecha:string = new Date().toISOString()
  mostrarErrorcheckbox: boolean = false


  constructor(private form: FormBuilder, private budgetService: BudgetService, private route: ActivatedRoute, private router: Router) {
    this.formularioEjemplo = this.form.group({
      seo: [false,[Validators.required]],
      ads: [false,[Validators.required]],
      web: [false,[Validators.required]],
      nombre: new FormControl('', [Validators.required]),
      telefono: new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
  
    })

    this.formularioEjemplo.valueChanges.subscribe(values => {
      this.recalcularCosteltotal(values)
      this.UpdateUrl()

    });

  }

  UpdateUrl(){

    const queryParams: any = {}

    if(this.formularioEjemplo.get('seo')?.value){
        queryParams.seo = true
      }
    if(this.formularioEjemplo.get('ads')?.value){
      queryParams.ads = true
    }
    if(this.formularioEjemplo.get('web')?.value){
      queryParams.web = true
    }
    
    if(this.numPagina > 0){
      queryParams.pagina = this.numPagina
    }
    if(this.numIdioma > 0){
      queryParams.idioma = this.numIdioma
    }

    if(Object.keys(queryParams).length > 0){
      this.router.navigate([], {
        queryParams: queryParams,
        queryParamsHandling: 'merge' 
      });
    }

  }

  actualizarNumPaginasIdiomas(valores: {numPagina:number, numIdioma:number}){
    this.numPagina = valores.numPagina;
    this.numIdioma = valores.numIdioma;
    this.UpdateUrl();

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
    const seo =this.formularioEjemplo.get('seo')?.value
    const ads = this.formularioEjemplo.get('ads')?.value
    const web = this.formularioEjemplo.get('web')?.value

    if (!seo && !ads && !web) {
      this.mostrarErrorcheckbox = true;
      return;
    }
    this.mostrarErrorcheckbox = false;
      
    if(this.formularioEjemplo.invalid){
      this.formularioEjemplo.markAllAsTouched();
      return
    }
    
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

  this.route.queryParams.subscribe(params => {
    this.formularioEjemplo.patchValue({
      seo: params['seo'] === 'true',
      ads: params['ads'] === 'true',
      web: params['web'] === 'true',
      numPagina: params ['numPagina'] || '',
      numIdioma: params ['numIdioma']|| '',
    });
  });

}

title: string = 'Consigue la mejor calidad';
}

