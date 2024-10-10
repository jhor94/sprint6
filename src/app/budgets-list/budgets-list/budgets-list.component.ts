import { Component, inject, OnInit, signal} from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../interfaces/budget';



@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss'
})
export class BudgetsListComponent  implements OnInit{

 budgetsList = signal <Budget[]>([])
 budgets = inject(BudgetService)


ngOnInit(): void {
  this.budgetsList.set(this.budgets.getBudget()); // muestro las variables del array budget dentro de html budget list
}
}
