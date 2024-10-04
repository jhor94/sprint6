import { Injectable, signal } from '@angular/core';
import { Budget } from '../interfaces/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  calculoBugdetWeb(numPagina:number, numIdioma:number):number{
    return numPagina * numIdioma * 30
  }  

  constructor() { 
 
  }
}
