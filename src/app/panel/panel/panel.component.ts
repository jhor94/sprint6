import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit {
  formularioReactivo1 : FormGroup;

  constructor(private form:FormBuilder) {
    this.formularioReactivo1 = this.form.group({
      nomPaginas: new FormControl('', [] ),
      nomLenguajes: new FormControl('', []),
   })

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  agregarPaginas(){
    alert('se ha agregado el usuario')
}
}
