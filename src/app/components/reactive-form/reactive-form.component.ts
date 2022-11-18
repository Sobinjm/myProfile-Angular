import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }
  // FormGroup
  // FormControl
  // 
  sampleForm=new FormGroup(
    {
      userName:new FormControl('',[Validators.required, Validators.minLength(5)]),
      userEmail:new FormControl('',[Validators.required,Validators.email])
    }
  );

  sampleFormControls=this.sampleForm.controls;
  ngOnInit(): void {
  }

  onSubmit123()
  {
    console.log(this.sampleForm.value);
  }


}
