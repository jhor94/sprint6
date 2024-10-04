import { Component, OnInit } from '@angular/core';
import { PanelComponent } from "../../panel/panel/panel.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ PanelComponent, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  formularioEjemplo: FormGroup;
  totalCoste:number = 0;

  constructor(private form: FormBuilder){
    this.formularioEjemplo = form.group({
      seo: [false],
      ads: [false],
      web: [false],
    })

    this.formularioEjemplo.valueChanges.subscribe(values => {
      this.totalCoste = 0;
      if (values.seo) this.totalCoste += 300;
      if (values.ads) this.totalCoste += 400;
      if (values.web) this.totalCoste += 500 ;
    });
    
  }
  
  

  ngOnInit(): void {
    
  }

  title:string = 'Aconsegueix la millor qualitat';
}

