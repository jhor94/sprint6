import { Component, inject, OnInit, signal, } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../interfaces/budget';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss'
})
export class BudgetsListComponent  implements OnInit{

 budgetsList = signal <Budget[]>([])
 filterBudgetList = signal <Budget[]>([])
 budgets = inject(BudgetService)
formularioBuscar:FormGroup

 constructor(private form:FormBuilder) {
  this.formularioBuscar = this.form.group({
    buscar: new FormControl("", [] ), 
 })
}


ngOnInit(): void {
  this.budgetsList.set(this.budgets.getBudget()); 
  this.filterBudgetList.set(this.budgetsList());
}



orderByDate(){
  const orderDate = [...this.filterBudgetList()].sort((a,b)=>{
    return new Date(b.fecha).getTime()- new Date(a.fecha).getTime();
  });
  this.filterBudgetList.set(orderDate)
}

orderByImport(){
  const orderImport = [...this.filterBudgetList()].sort((a,b)=>{
    return a.total - b.total;
  });
  this.filterBudgetList.set(orderImport)
}

orderByName(){
  const orderNombre = [...this.filterBudgetList()].sort((a,b)=>{
    return a.nombre.localeCompare(b.nombre);
  });
  this.filterBudgetList.set(orderNombre)
}

filterBudget(){
    const word = this.formularioBuscar.get('buscar')?.value.toLowerCase();
    const filtered = this.budgetsList().filter(budget =>
      budget.nombre.toLowerCase().includes(word)
    );
    this.filterBudgetList.set(filtered);
  }
}

