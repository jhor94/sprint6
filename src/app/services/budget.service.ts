import { Injectable, signal } from '@angular/core';
import { Budget } from '../interfaces/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

 
  
  calculoBugdetWeb(numPagina:number, numIdioma:number):number{
    return (numPagina * 30) + (numIdioma * 30)
  }  

  constructor() { 
 
  }

  private budgetsList = signal<Budget[]>([])

  addBudget(budget:Budget){
    const currentBudgets = this.budgetsList()
    currentBudgets.push(budget)
    console.log(currentBudgets)
  }

  getBudget(){
    return this.budgetsList()
  }
}
