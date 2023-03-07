// custom pipe
// command ng g pipe prefix
// you can also create your custom pipe 
// custom pipe ceated using @pipe decorator and implementing PipeTransform interface 
// it uses transform() which take input value and any optional parameters and returnd the transformed output value 


import { Pipe, PipeTransform } from '@angular/core';

// decorator show that class is pipe
@Pipe({
  name: 'prefix'
})
export class PrefixPipe
 implements PipeTransform // implements PipeTransform interace
 {

  // transform function to pass input and returns output
  transform(value: string, param?: string): unknown {
    // transforming logic here
    return 'hello ' + value;
  }

}
