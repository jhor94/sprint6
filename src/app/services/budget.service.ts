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
}
