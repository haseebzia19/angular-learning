import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // import form related classes
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.scss']
})
export class NestedComponent implements OnInit {

  constructor(private httpService : HttpService,private fb:FormBuilder) { }

  myForm : FormGroup = new FormGroup({}); // creating instance of form group

  ngOnInit(): void {
    // getData is function that is calling http request and returning observable
    // subscribing to get data
    this.httpService.getData().subscribe(data=>{
      console.log(data);
    })
    this.initializeForm()
  }

  initializeForm(){
     // two ways to initialize reactive form; with or without FormBuilder
    
     // without formBuilder
    // this.myForm = new FormGroup({
    //   name : new FormControl(''),
    //   email : new FormControl(''),
    //   password : new FormControl('')
    // })

    // with form builder
    // this needs to inject FormBuilder service in constructor
    // calling group method group()
    // using FormBuilder, you can create more complex and nested forms with less code
    this.myForm = this.fb.group({
      name : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
 
  }
  getOrSetData(){
   
    this.myForm.controls['name'].setValue('haseeb'); // to set value of input field name 
    this.myForm.reset(); // reset all form
    
  }

  // use the getter function in your template to display the error messages
  get myFormControls(){
      return this.myForm.controls;
  }

}
