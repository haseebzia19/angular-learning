// Component controls view (patch of screen)
// chunks of code
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { LevelService } from './services/level/level.service';

// ------------- other decorators --------
//  @Input()
//  @Output()
//  @Injectable()
//  @Component()
// ---------------------------------------
@Component(
  // metadata object
  {
  selector: 'app-root', // help to create componenet instance in DOM
  templateUrl: './app.component.html', // link of html file
  styleUrls: ['./app.component.scss'] // link of style sheet
  }
)
export class AppComponent  implements OnChanges, OnInit, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
// Define component logic here inside class 
  title = 'angular-learning';
  isData : boolean = true;
  list : any = [1,2,3]
  fromChild : string = '';

// life cycle hook  
// angular create, update and destroy component as user moves through application
// With lifecycle hooks, we can gain better control of our application.

 constructor(

  private level : LevelService
  // dependency Injection (DI)
  // design pattern to inject dependencies inside component
  // when angular create a component, it first ask an injector for service that comp required
  // (injector is container of service instance with previous created).
  // if request service is not in container then injector add it 
  //  angular then call constructor with service arguments

  // -------------------DI is Heirarchical injector--------------- : 
  // every component has its own injector
  // if component not find instance inside their injector angular will search it in therir parent and if not then its parent  
  // parent child concept in injector

  // if we use property providers:[myService] inside component decorator
  // it will create instance inside injector of that component

  //  if we donot use provider inside featured componenet but use in root component
  // then feature component find required instance from root

  // if i use @injectable({provideIn:'root'}) inside service then there is no need to add providers property
  // in root or featured components. it will automatically add instance inside injector of root component
  // and the component taht require that service will fetch this from root injector
  // ------------End--------------------------------
 ){} // called 1st

ngOnChanges(){} // when component created and execute when value of bind input property changes (@Input())

ngOnInit(){} // when component initializing

ngDoCheck(){} // execute multiple time when change detect (e.g when we click on button, any action)

ngAfterContentInit(){} // called after external content in view

ngAfterContentChecked(){} // After angular check external content projected in component

ngAfterViewInit(){} // called after angular initialize view and child view

ngAfterViewChecked(){} // called after angular check view and child view

ngOnDestroy(){} // cleanup before angular destroy component


testing(){}

onClick(value : string){
  this.fromChild = value;
}

}
