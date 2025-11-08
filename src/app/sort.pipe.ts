import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

 /*  transform(value:any,args?:any): any { */
    /* if(args<0){
      return value
    }
    else if(args==1){
      return (value).substr(1,3)

    }
    else{
      return (value).substr(1,4)
    } */
    /* transform(value:any): any {
    if(value<6000){
      return  value+"MB"
    }
    else if(value>6000){
      return value+"GB"

    }
  } */
  /* transform(value:any): string {
     let date= value.split("-");
     let result=date[2]+"-"+date[1]+"-"+date[0]
     return result;
  } */

  transform(value:any): any {
    if(value){
      if(value>2){
        return "***"
      }
      else{
        "*"
      }
    }
    return null;
    }



}
